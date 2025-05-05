import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/client";


interface Props {
    params: { id: string }
}

export async function GET(request: NextRequest, {params}: Props) {
    const categories = await prisma.catergory.findUnique({where: {id: parseInt(params.id)}});
    if (!categories) return NextResponse.json({error: "Category not found"}, {status: 404});

    return NextResponse.json(categories);
}

export async function DELETE(request: NextRequest, {params}: Props){
    const category = await prisma.catergory.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })

    if (!category) return NextResponse.json({error: "Category not found!"} , {status: 400});

    const categoryToDelete  = await prisma.catergory.delete({
        where: {
            id: parseInt(params.id)
        }
    })

    return NextResponse.json(categoryToDelete);




}