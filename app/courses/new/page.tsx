
import React from "react";
import {prisma} from "@/prisma/client";
import NewCourseForm from "@/app/courses/new/NewCourseForm";


export default async function CourseNewPage() {
    const platforms = await prisma.platform.findMany();
    const categories = await prisma.category.findMany();
    const technologies = await prisma.technology.findMany();

    return (
        <>
            {/*TODO: Fix the layout, default values for input fields and API test for adding new course*/}
            <NewCourseForm platformsData={platforms} categoriesData={categories} technologiesData={technologies} ></NewCourseForm>

        </>
    );
}
