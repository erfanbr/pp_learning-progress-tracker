import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/client";
import schema from "@/app/api/courses/[id]/schema";

export async function GET(request: NextRequest) {
    const platforms = await prisma.platform.findMany();
    return NextResponse.json(platforms);
}


export async function POST(request: NextRequest) {
    const body = await request.json();

    const validatedData = schema.safeParse(body);
    if (!validatedData.success) return NextResponse.json({error: validatedData.error.errors}, {status: 400})

    const platform = await prisma.platform.findFirst({
        where: {
            // id: 4
            title: body.title
        }
    })

    if (platform) return NextResponse.json({error: "This platform already exists"}, {status: 400});

    const newPlatform = await prisma.platform.create({
        data: {
            title: body.title,
        }
    })


    return NextResponse.json(newPlatform);
}