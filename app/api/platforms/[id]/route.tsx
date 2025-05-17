import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/client";
import {createPlatformSchema} from "@/app/validationSchema";

interface Props {
    params: {id: string}
}

export async function GET(request: NextRequest, {params}: Props) {
    const platform = await prisma.platform.findUnique({
            where: {
                id: parseInt(params.id)
            },
        include: {
                Course: true
        }
    });

    if (!platform) return NextResponse.json({error: "Platform not found"}, {status: 404})
    return NextResponse.json(platform)
}

export async function DELETE(request: NextRequest, {params}: Props){
    const platform = await prisma.platform.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })

    if (!platform) return NextResponse.json({error: "Platform not found!"}, {status: 400})

    const platformToDelete = await prisma.platform.delete({
        where: {
            id: parseInt(params.id)
        }
    })

    return NextResponse.json(platformToDelete);
}

export async function PUT(request: NextRequest, {params} : Props){
    const body = await request.json();

    const platform = await prisma.platform.findUnique({
        where: {id: parseInt(params.id)}
    })

    const dataValidation = createPlatformSchema.safeParse(body);

    if (!dataValidation.success) return  NextResponse.json({error: dataValidation.error.errors}, {status: 400})
    if (!platform) return NextResponse.json({error: "Platform not found!"}, {status:400});

    const updatedUser  = await prisma.platform.update({
        where: {id: platform.id},
        data: {
            title: body.title,
        }
    })

    return NextResponse.json(updatedUser);

}