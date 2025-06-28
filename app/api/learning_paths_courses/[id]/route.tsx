import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/client";
import {createCategorySchema, createLearningPathSchema} from "@/app/validationSchema";

interface Props {
    params: { id: string }
}

export async function GET(request: NextRequest, {params}: Props) {
    params = await params;
    const result = await prisma.learningPathCourse.findMany({
        where: {
            learningPathId: parseInt(params.id)
        },
        orderBy: {
            order: 'asc',
        },
        include: {
            learningPath: {
                select: {
                    title: true,
                    description: true,
                }
            },
            course: {
                select: {
                    id: true,
                    title: true,
                    status: true,
                    description: true,
                }
            }
        }
    });

    if (!result) return NextResponse.json({error: "Learning path not found"}, {status: 404})
    return NextResponse.json(result)
}


// TODO: its working from API but not web app, figure out why
export async function DELETE(request: NextRequest, {params}: Props) {
    const learningPathCourse = await prisma.learningPathCourse.findMany({
        where: {
            learningPathId: parseInt(params.id)
        }
    })

    if (!learningPathCourse) return NextResponse.json({error: "Learning path course not found!"}, {status: 400})

    const learningPathToCoursesToDelete = await prisma.learningPathCourse.deleteMany({
        where: {
            learningPathId: parseInt(params.id)
        }
    })

    const learningPath = await prisma.learningPath.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })

    if (!learningPath) return NextResponse.json({error: "Learning path not found!"}, {status: 400})

    const learningPathToDelete = await prisma.learningPath.delete({
        where: {
            id: parseInt(params.id)
        }
    })

    return NextResponse.json({
        learningPathToCoursesToDelete,
        learningPathToDelete
    });
}

export async function PUT(request: NextRequest, {params}: Props) {
    const body = await request.json();
    console.log("Update learningPathCourses...");
    console.log(body);
    params = await params;

    const learningPathId = parseInt(params.id);

    if (!learningPathId || isNaN(learningPathId)) {
        return NextResponse.json({error: "Invalid learningPathId"}, {status: 400});
    }

    const dataValidation = createLearningPathSchema.safeParse(body);
    if (!dataValidation.success)
        return NextResponse.json({error: dataValidation.error.errors}, {status: 400});


    const existing = await prisma.learningPath.findUnique({
        where: {id: learningPathId}
    });

    if (!existing)
        return NextResponse.json({error: "Learning path not found!"}, {status: 404});


    const updatedLearningPath = await prisma.learningPath.update({
        where: {id: learningPathId},
        data: {
            title: body.title,
            description: body.description,
        }
    });

    const deleteExistingCourses = await prisma.learningPathCourse.deleteMany({
        where: {learningPathId: learningPathId},
    });


    const addningNewCourses = await prisma.learningPathCourse.createMany({
        data: body.courses.map((c) => ({
            learningPathId,
            courseId: c.courseId,
            order: c.order,
        })),
        skipDuplicates: true
    });

    return NextResponse.json({
        learningPath: updatedLearningPath,
        coursesToDelete: deleteExistingCourses,
        coursesToAdd: addningNewCourses
    });
}
