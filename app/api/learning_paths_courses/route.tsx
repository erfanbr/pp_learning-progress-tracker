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



    const validatedData = createLearningPathSchema.safeParse(body);
    if (!validatedData.success) return NextResponse.json({error: validatedData.error.errors}, {status: 400})


    const newLearningPath = await prisma.learningPath.create({
        data: {
            title: body.title,
            description: body.description,
        }
    });
    const learningPathId = newLearningPath.id;

    const newLearningPathCourse = await prisma.learningPathCourse.createMany({
        data: body.courses.map((c) => ({
            learningPathId,
            courseId: c.courseId,
            order: c.order,
        })),
        skipDuplicates: true
    });


    return NextResponse.json({
        learningPath: newLearningPath,
        coursesLinked: newLearningPathCourse
    });
}