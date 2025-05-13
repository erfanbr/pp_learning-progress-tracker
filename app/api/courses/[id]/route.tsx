import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/client";

interface Props {
    params: { id: string }
}

export async function GET(request: NextRequest, {params}: Props) {
    const course = await prisma.course.findUnique({
        where: {id: parseInt(params.id)},
        include: {
            category: {
                select: {
                    title: true,
                },
            },
            technology: {
                select: {
                    id: true,
                    title: true,
                },
            },
        }
    });
    if (!course) return NextResponse.json({error: "Course not found"}, {status: 404});

    return NextResponse.json(course);
}
