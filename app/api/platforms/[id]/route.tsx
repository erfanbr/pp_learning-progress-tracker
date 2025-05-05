import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/client";

interface Props {
    params: {id: string}
}

export async function GET(request: NextRequest, {params}: Props) {
    const platform = await prisma.platform.findUnique({
            where: {id: parseInt(params.id)}
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