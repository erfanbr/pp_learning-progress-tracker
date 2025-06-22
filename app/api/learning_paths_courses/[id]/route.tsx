import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/client";

interface Props {
    params: { id: string }
}

export async function GET(request: NextRequest, {params}: Props) {
    const result = await prisma.learningPathCourse.findMany({
        where: {
            learningPathId: parseInt(params.id)
        },
        orderBy: {
            order: 'asc',
        },
        include: {
            learningPath: {
                select: {
                    title: true,
                    description: true,
                }
            },
            course: {
                select: {
                    id: true,
                    title: true,
                    status: true,
                    description: true,
                }
            }
        }
    });

    if (!result) return NextResponse.json({error: "Learning path not found"}, {status: 404})
    return NextResponse.json(result)
}


export async function DELETE(request: NextRequest, {params}: Props){
    const learningPathCourse = await prisma.learningPathCourse.findMany({
        where: {
            learningPathId: parseInt(params.id)
        }
    })

    if (!learningPathCourse) return NextResponse.json({error: "Learning path course not found!"}, {status: 400})

    const learningPathToCoursesToDelete = await prisma.learningPathCourse.deleteMany({
        where: {
            learningPathId: parseInt(params.id)
        }
    })

    const learningPath = await prisma.learningPath.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })

    if (!learningPath) return NextResponse.json({error: "Learning path not found!"}, {status: 400})

    const learningPathToDelete = await prisma.learningPath.delete({
        where: {
            id: parseInt(params.id)
        }
    })

    return NextResponse.json({
        learningPathToCoursesToDelete,
        learningPathToDelete
    });
}