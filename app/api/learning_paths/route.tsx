import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/client";
import {createLearningPathSchema, createPlatformSchema} from "@/app/validationSchema";
import {getServerSession} from "next-auth";
import authOptions from "@/app/auth/authOptions";

export async function GET(request: NextRequest) {

    const learningPaths = await prisma.learningPath.findMany({
        include: {
            courses: {
                select: {
                    id: true,
                    course: {
                        select: {
                            title: true,
                            categoryId: true,
                        }
                    }
                }
            }
        }
    });


    return NextResponse.json(learningPaths);
}


export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions);
    if (!session)
        return NextResponse.json({}, {status: 401});

    const body = await request.json();

    const validatedData = createLearningPathSchema.safeParse(body);
    if (!validatedData.success) return NextResponse.json({error: validatedData.error.errors}, {status: 400})

    const learningPath = await prisma.learningPath.findFirst({
        where: {
            title: body.title
        }
    })

    if (learningPath) return NextResponse.json({error: "This Learning Path already exists"}, {status: 400});

    const newLearningPath = await prisma.learningPath.create({
        data: {
            title: body.title,
            description: body.description
        }
    })


    return NextResponse.json(newLearningPath);
}