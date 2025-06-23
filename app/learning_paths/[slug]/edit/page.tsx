import React from "react";
import LearningPathsEditPageForm from "@/app/learning_paths/[slug]/edit/LearningPathsEditPageForm";
import axios from "axios";
import {prisma} from "@/prisma/client";


interface Props {
    params: { slug: string }
}

export default async function LearningPathEditPage( {params}: Props) {
    const apiURL = "http://localhost:3000/api/learning_paths_courses/" + params.slug;
    const response = await axios.get(apiURL);
    const learningPaths = response.data;
    const courses = await prisma.course.findMany();

    return (
        <>
            <LearningPathsEditPageForm
                learningPathsCoursesData={learningPaths}
                coursesData={courses}>
            </LearningPathsEditPageForm>
        </>
    );
}
