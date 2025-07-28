import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/client";
import {createPlatformSchema} from "@/app/validationSchema";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

interface Props {
    params: { id: string }
}

export async function GET(request: NextRequest, {params}: Props) {
    const session = await getServerSession(authOptions);
    if (!session)
        return NextResponse.json({}, {status: 401});

    const result = await prisma.learningPath.findUnique({
        where: {
            id: parseInt(params.id)
        },
        include: {
            courses: {
                orderBy: {
                    order: 'asc',
                },
                select: {
                    id: true,
                    order: true,
                    course: {
                        select: {
                            id: true,
                            title: true
                        }
                    },

                }
            }
        }
    });

    if (!result) return NextResponse.json({error: "Learning path not found"}, {status: 404})
    return NextResponse.json(result)
}

export async function DELETE(request: NextRequest, {params}: Props) {
    const session = await getServerSession(authOptions);
    if (!session)
        return NextResponse.json({}, {status: 401});

    const result = await prisma.learningPath.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })

    if (!result) return NextResponse.json({error: "Learning path not found!"}, {status: 400})

    const resultToDelete = await prisma.learningPath.delete({
        where: {
            id: parseInt(params.id)
        }
    })

    return NextResponse.json(resultToDelete);
}

export async function PUT(request: NextRequest, {params}: Props) {
    const session = await getServerSession(authOptions);
    if (!session)
        return NextResponse.json({}, {status: 401});

    const body = await request.json();
    const param  = await params;
    const result = await prisma.learningPath.findUnique({
        where: {id: parseInt(param.id)}
    })

    const dataValidation = createPlatformSchema.safeParse(body);

    if (!dataValidation.success) return NextResponse.json({error: dataValidation.error.errors}, {status: 400})
    if (!result) return NextResponse.json({error: "Learning path not found!"}, {status: 400});

    const updatedResult = await prisma.learningPath.update({
        where: {id: result.id},
        data: {
            title: body.title,
            description: body.description
        }
    })

    return NextResponse.json(updatedResult);

}