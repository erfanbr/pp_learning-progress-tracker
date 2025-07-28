import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/client";
import {createTechnologySchema} from "@/app/validationSchema";
import {getServerSession} from "next-auth";
import authOptions from "@/app/auth/authOptions";

export async function GET(request: NextRequest) {
    const technologies = await prisma.technology.findMany();
    return NextResponse.json(technologies);
}


export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions);
    if (!session)
        return NextResponse.json({}, {status: 401});

    const body = await request.json();

    const validatedData = createTechnologySchema.safeParse(body);
    if (!validatedData.success) return NextResponse.json({error: validatedData.error.errors}, {status: 400})

    const technology = await prisma.technology.findFirst({
        where: {
            title: body.title
        }
    })

    if (technology) return NextResponse.json({error: "This technology already exists"}, {status: 400});

    const newTechnology = await prisma.technology.create({
        data: {
            title: body.title,
        }
    })


    return NextResponse.json(newTechnology);
}