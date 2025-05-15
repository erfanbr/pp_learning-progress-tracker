import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/client";
import {createTechnologySchema} from "@/app/validationSchema";

interface Props {
    params: {id: string}
}

export async function GET(request: NextRequest, {params}: Props) {
    const technology = await prisma.technology.findUnique({
        where: {id: parseInt(params.id)}
    });

    if (!technology) return NextResponse.json({error: "Technology not found"}, {status: 404})
    return NextResponse.json(technology)
}

export async function DELETE(request: NextRequest, {params}: Props){
    const technology = await prisma.technology.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })

    if (!technology) return NextResponse.json({error: "Technology not found!"}, {status: 400})

    const technologyToDelete = await prisma.technology.delete({
        where: {
            id: parseInt(params.id)
        }
    })

    return NextResponse.json(technologyToDelete);
}

export async function PUT(request: NextRequest, {params} : Props){
    const body = await request.json();

    const technology = await prisma.technology.findUnique({
        where: {id: parseInt(params.id)}
    })

    const dataValidation = createTechnologySchema.safeParse(body);

    if (!dataValidation.success) return  NextResponse.json({error: dataValidation.error.errors}, {status: 400})
    if (!technology) return NextResponse.json({error: "Technology not found!"}, {status:400});

    const updatedUser  = await prisma.technology.update({
        where: {id: technology.id},
        data: {
            title: body.title,
        }
    })

    return NextResponse.json(updatedUser);

}