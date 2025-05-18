import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/client"
import schema from "@/app/api/courses/schema";

export async function GET( request: NextRequest) {
    const courses = await prisma.course.findMany({
        include: {
            category: {
                select: {
                    title: true,
                },
            },
        },
    });

    const coursesWithTechnologies = await prisma.course.findMany({
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


    return NextResponse.json(coursesWithTechnologies);
}


export async function POST(request: NextRequest) {
    const body = await request.json();

    // const validatedData =  validationSchema.safeParse(body);
    // if (!validatedData.success) return NextResponse.json({error: validatedData.error.errors}, {status: 400})
    //
    // const course = await prisma.course.findFirst({
    //     where: {
    //         title: body.title
    //     }
    // })
    //
    // if (course) return NextResponse.json({error: "Course already exist"}, {status: 400})
    const newCourse = await prisma.course.create({
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
            technology: {
                create: body.technology.map((tech: { id: number; title: string; })  => ({
                    title: tech.title
                }))
            }

        },

    })

    return NextResponse.json(newCourse)
}