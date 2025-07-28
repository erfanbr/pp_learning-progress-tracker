import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/client"
import schema from "@/app/api/courses/schema";
import {getServerSession} from "next-auth";
import authOptions from "@/app/auth/authOptions";

export async function GET( request: NextRequest) {
    const coursesWithTechnologies = await prisma.course.findMany({
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
    })


    return NextResponse.json(coursesWithTechnologies);
}


export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions);
    if (!session)
        return NextResponse.json({}, {status: 401});

    const body = await request.json();

    // const validatedData =  validationSchema.safeParse(body);
    // if (!validatedData.success) return NextResponse.json({error: validatedData.error.errors}, {status: 400})
    //
    // const course = await prisma.course.findFirst({
    //     where: {
    //         title: body.title
    //     }
    // })
    //
    // if (course) return NextResponse.json({error: "Course already exist"}, {status: 400})
    const newCourse = await prisma.course.create({
        data: {
            title: body.title,
            status: body.status,
            createdAt: body.createdAt,
            updatedAt: body.updateAt,
            duration: body.duration,
            lastSeen: body.lastSeen,
            difficulty: body.difficulty,
            priority: body.priority,
            link: body.link,
            note: body.note,
            categoryId: body.categoryId,
            platformId: body.platformId,
            description: body.description,
            technology: {

                connect: body.technology.map((tech: {id:number}  )  => ({
                    id: tech.id
                }))
            }

        },

    })

    return NextResponse.json(newCourse)
}