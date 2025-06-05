import React, {useState} from "react";

import CoursesTable from "@/app/courses/CoursesTable";
import CourseFilter from "@/app/courses/CourseFilter";
import CourseEditPageForm from "@/app/courses/[slug]/CourseEditPageForm";
import {prisma} from "@/prisma/client";

interface Props {
    searchParams: {
        sortBy?: string,
        sortType?: string
    };
}

export default async function CoursesPage( {searchParams} : Props) {
    const sortBy = searchParams?.sortBy || "id";
    const sortType = searchParams?.sortType || "asc";

    const courses = await prisma.course.findMany({
        include: {
            category: {
                select: {
                    title: true,
                },
            },
            platform: {
                select: {
                    title: true,
                }
            },
            technology: {
                select: {
                    id: true,
                    title: true,
                },
            },
        },
    });

    const platforms = await prisma.platform.findMany();
    const categories = await prisma.category.findMany();
    const technologies = await prisma.technology.findMany();








    return (
        <>

            <CoursesTable
                coursesData={courses}
                sortBy={sortBy}
                sortType={sortType}
                platformsData={platforms}
                categoryData={categories}
                technologiesData={technologies}

            >

            </CoursesTable>
        </>
    );
}
