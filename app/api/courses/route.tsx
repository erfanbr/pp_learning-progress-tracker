import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/client"
import schema from "@/app/api/courses/schema";

export async function GET( request: NextRequest) {
    const courses = await prisma.course.findMany();
    return NextResponse.json(courses);
}

// TODO: Complete this later on
// export async function POST(request: NextRequest) {
//     const body = await request.json();
//
//     const validatedData =  schema.safeParse(body);
//     if (!validatedData.success) return NextResponse.json({error: validatedData.error.errors}, {status: 400})
//
//     const course = await prisma.course.findFirst({
//         where: {
//             title: body.title
//         }
//     })
//
//     if (course) return NextResponse.json({error: "Course already exist"}, {status: 400})
//     const newCourse = await prisma.course.create({
//         data: {
//             title: body.title
//         }
//     })
//
//     return NextResponse.json(newCourse)
// }