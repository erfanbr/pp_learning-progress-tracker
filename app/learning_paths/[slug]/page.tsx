import React from "react";
import LearningPathPage from "@/app/learning_paths/page";
import axios from "axios";
import {prisma} from "@/prisma/client";
import LearningPathsDetailPageForm from "@/app/learning_paths/[slug]/LearningPathsDetailPageForm";

interface Props {
    params: { slug: string }
}

export default async function Page({params}: Props) {
    params = await params;
    // const apiURL = "http://localhost:3000/api/learning_paths/" + params.slug;
    const apiURL = "http://localhost:3000/api/learning_paths_courses/" + params.slug;
    const response = await axios.get(apiURL);
    const learningPaths = response.data;

    const platforms = await prisma.platform.findMany();
    const categories = await prisma.category.findMany();
    const technologies = await prisma.technology.findMany();


    return (
        <>
            <LearningPathsDetailPageForm
                id={params.slug}
                learningPathsCoursesData={learningPaths}>

            </LearningPathsDetailPageForm>
        </>
    );
}
