import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/client";
import {createTechnologySchema} from "@/app/validationSchema";

export async function GET(request: NextRequest) {
    const technologies = await prisma.technology.findMany();
    return NextResponse.json(technologies);
}


export async function POST(request: NextRequest) {
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