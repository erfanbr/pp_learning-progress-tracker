import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/client";
import {createPlatformSchema} from "@/app/validationSchema";
import {getServerSession} from "next-auth";
import authOptions from "@/app/auth/authOptions";


export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
    const platforms = await prisma.platform.findMany();
    return NextResponse.json(platforms);
}


export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions);
    if (!session)
        return NextResponse.json({}, {status: 401});

    const body = await request.json();

    const validatedData = createPlatformSchema.safeParse(body);
    if (!validatedData.success) return NextResponse.json({error: validatedData.error.errors}, {status: 400})

    const platform = await prisma.platform.findFirst({
        where: {
            title: body.title
        },
        include: {
            Course: true
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