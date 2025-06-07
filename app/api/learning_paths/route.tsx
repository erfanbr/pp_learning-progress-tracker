import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/client";
import {createLearningPathSchema, createPlatformSchema} from "@/app/validationSchema";

export async function GET(request: NextRequest) {
    const learningPaths = await prisma.learningPath.findMany();
    return NextResponse.json(learningPaths);
}


export async function POST(request: NextRequest) {
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
        }
    })


    return NextResponse.json(newLearningPath);
}