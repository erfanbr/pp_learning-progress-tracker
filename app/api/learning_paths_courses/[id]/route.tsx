import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/client";

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
        // include: {
        //     courses: {
        //
        //         select: {
        //             id: true,
        //             order: true,
        //             course: {
        //                 select: {
        //                     id: true,
        //                     title: true
        //                 }
        //             },
        //
        //         }
        //     }
        // }
    });

    if (!result) return NextResponse.json({error: "Learning path not found"}, {status: 404})
    return NextResponse.json(result)
}