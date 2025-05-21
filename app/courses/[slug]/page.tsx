import React from "react";
import axios from "axios";
import CourseEditPageForm from "@/app/courses/[slug]/CourseEditPageForm";
import {prisma} from "@/prisma/client";

interface Props {
    params: { slug: string }
}


export default async function CourseDetailPage({params}: Props) {
    const apiURL = "http://localhost:3000/api/courses/" + params.slug;
    const response = await axios.get(apiURL);
    const course = response.data;

    const platforms = await prisma.platform.findMany();
    const categories = await prisma.category.findMany();
    const technologies = await prisma.technology.findMany();


    const currentTechnologies: number[] = [];
    course.technology.map((tech: { id: number; }) => (
        currentTechnologies.push(tech.id)
    ))


    return (
        <>
            <CourseEditPageForm
                id={params.slug}
                platformsData={platforms}
                categoriesData={categories}
                technologiesData={technologies}
                currentTechnologiesId={currentTechnologies}
                courseData={course}
            >


            </CourseEditPageForm>
        </>
    );
}
