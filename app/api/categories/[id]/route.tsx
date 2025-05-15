import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/client";
import {createCategorySchema, createPlatformSchema} from "@/app/validationSchema";


interface Props {
    params: { id: string }
}

export async function GET(request: NextRequest, {params}: Props) {
    const categories = await prisma.category.findUnique({where: {id: parseInt(params.id)}});
    if (!categories) return NextResponse.json({error: "Category not found"}, {status: 404});

    return NextResponse.json(categories);
}

export async function DELETE(request: NextRequest, {params}: Props){
    const category = await prisma.category.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })

    if (!category) return NextResponse.json({error: "Category not found!"} , {status: 400});

    const categoryToDelete  = await prisma.category.delete({
        where: {
            id: parseInt(params.id)
        }
    })

    return NextResponse.json(categoryToDelete);
}

export async function PUT(request: NextRequest, {params} : Props){
    const body = await request.json();

    const category = await prisma.category.findUnique({
        where: {id: parseInt(params.id)}
    })

    const dataValidation = createCategorySchema.safeParse(body);

    if (!dataValidation.success) return  NextResponse.json({error: dataValidation.error.errors}, {status: 400})
    if (!category) return NextResponse.json({error: "Category not found!"}, {status:400});

    const updatedUser  = await prisma.category.update({
        where: {id: category.id},
        data: {
            title: body.title,
        }
    })

    return NextResponse.json(updatedUser);

}