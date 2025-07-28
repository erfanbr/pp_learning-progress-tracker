import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/client";
import {createLearningPathSchema, createPlatformSchema} from "@/app/validationSchema";
import {getServerSession} from "next-auth";
import authOptions from "@/app/auth/authOptions";

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
    const session = await getServerSession(authOptions);
    if (!session)
        return NextResponse.json({}, {status: 401});

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