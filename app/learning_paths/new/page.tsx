import React from "react";
import NewLearningPathForm from "@/app/learning_paths/new/NewLearningPathForm";
import {prisma} from "@/prisma/client";


export default async function  NewLearningPathPage() {
    const platforms = await prisma.platform.findMany();
    const courses = await prisma.course.findMany();

    return (
        <>
            <NewLearningPathForm  coursesData={courses}/>
        </>
    );
}
