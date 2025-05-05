import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/client"

export async function GET( request: NextRequest) {
    const courses = await prisma.course.findMany();
    return NextResponse.json(courses);
}
