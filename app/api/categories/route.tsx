import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/client";
import {createCategorySchema} from "@/app/validationSchema";

export async function GET(request: NextRequest) {
    const categories = await prisma.category.findMany();
    return NextResponse.json(categories);
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    const validatedData = createCategorySchema.safeParse(body);
    if (!validatedData.success) return NextResponse.json({error: validatedData.error.errors}, {status: 400})

    const category = await prisma.category.findFirst({
        where: {title: body.title}
    })

    if (category) return NextResponse.json({error: "Category already exist!"}, {status: 400})

    const newCategory = await prisma.category.create({
        data: {
            title: body.title
        }
    })

    return NextResponse.json(newCategory);
}