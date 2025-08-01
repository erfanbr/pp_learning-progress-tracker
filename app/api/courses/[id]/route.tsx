import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/client";
import {createCategorySchema} from "@/app/validationSchema";
import {getServerSession} from "next-auth";
import authOptions from "@/app/auth/authOptions";

interface Props {
    params: { id: string }
}

export async function GET(request: NextRequest, {params}: Props) {
    const course = await prisma.course.findUnique({
        where: {id: parseInt(params.id)},
        include: {
            category: {
                select: {
                    title: true,
                },
            },
            technology: {
                select: {
                    id: true,
                    title: true,
                },
            },
            platform: {
                select: {
                    title: true,
                },
            },
        }
    });
    if (!course) return NextResponse.json({error: "Course not found"}, {status: 404});

    return NextResponse.json(course);
}

export async function DELETE(request: NextRequest, {params}: Props){
    const session = await getServerSession(authOptions);
    if (!session)
        return NextResponse.json({}, {status: 401});

    const course = await prisma.course.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })

    if (!course) return NextResponse.json({error: "Category not found!"} , {status: 400});

    const courseToDelete  = await prisma.course.delete({
        where: {
            id: parseInt(params.id)
        }
    })

    return NextResponse.json(courseToDelete);
}


export async function PUT(request: NextRequest, {params}: Props) {
    const session = await getServerSession(authOptions);
    if (!session)
        return NextResponse.json({}, {status: 401});

    const body = await request.json();

    const course = await prisma.course.findUnique({
        where: {id: parseInt(params.id)},
        include: {
            category: {
                select: {
                    title: true,
                },
            },
            technology: {
                select: {
                    id: true,
                    title: true,
                },
            },
        }
    })

    const dataValidation = createCategorySchema.safeParse(body);

    if (!dataValidation.success) return NextResponse.json({error: dataValidation.error.errors}, {status: 400})
    if (!course) return NextResponse.json({error: "Category not found!"}, {status: 400});

    const updateCourse = await prisma.course.update({
        where: {id: course.id},
        data: {
            title: body.title,
            status: body.status,
            createdAt: body.createdAt,
            updatedAt: body.updateAt,
            duration: body.duration,
            lastSeen: body.lastSeen,
            difficulty: body.difficulty,
            priority: body.priority,
            link: body.link,
            note: body.note,
            categoryId: body.categoryId,
            platformId: body.platformId,
            description: body.description,
            technology: {

                set: body.technology.map((tech: { id: number }) => ({
                    id: tech.id
                }))
            }
        },
    })

    return NextResponse.json(updateCourse);
}