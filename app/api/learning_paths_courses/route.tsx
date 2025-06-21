import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/client";
import {createLearningPathSchema, createPlatformSchema} from "@/app/validationSchema";

export async function GET(request: NextRequest) {
    const result = await prisma.learningPathCourse.findMany({
        include: {
            course: {
                select: {
                    id: true,
                    title: true
                },
            },
            learningPath: {
                select: {
                    id: true,
                    title: true
                }
            }
        }
    });


    return NextResponse.json(result);

}


export async function POST(request: NextRequest) {
    const body = await request.json();

    // enable this later on
    // const validatedData = createLearningPathSchema.safeParse(body);
    // if (!validatedData.success) return NextResponse.json({error: validatedData.error.errors}, {status: 400})

    const learningPath = await prisma.learningPathCourse.findFirst({
        where: {
            learningPathId: body.learningPathId,
            courseId: body.courseId,
        }
    })
    if (learningPath) return NextResponse.json({error: "This course already exists in this learning path"}, {status: 400});

    const validateOrder = await prisma.learningPathCourse.findFirst({
        where: {
            learningPathId: body.learningPathId,
            order: body.order,
        }
    })
    if (validateOrder) return NextResponse.json({error: "You cannot course with same order in a learning path"}, {status: 400});

    const newLearningPath = await prisma.learningPathCourse.create({
        data: {
            learningPathId: body.learningPathId,
            courseId: body.courseId,
            order: body.order
        }
    })


    return NextResponse.json(newLearningPath);
}