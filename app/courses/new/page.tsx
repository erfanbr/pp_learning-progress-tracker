
import React, {useState} from "react";
import Link from "next/link";
import {statusMap} from "@/app/components/mappings/StatusMap";
import {difficultyMap} from "@/app/components/mappings/DifficultyMap";
import {PriorityMap} from "@/app/components/mappings/PriorityMap";
import FormCheckBoxElement from "@/app/components/FormCheckBoxElement";
import CustomButton from "@/app/components/buttons/CustomButton";
import {FaTrashCan} from "react-icons/fa6";
import {FaSave} from "react-icons/fa";
import {prisma} from "@/prisma/client";
import FormInputFieldElement from "@/app/components/FormInputFieldElement";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {createTechnologySchema} from "@/app/validationSchema";
import {useRouter} from "next/navigation";
import {z} from "zod";
import NewCourseForm from "@/app/courses/new/NewCourseForm";


export default async function CourseNewPage() {
    const platforms = await prisma.platform.findMany();
    const categories = await prisma.category.findMany();
    const technologies = await prisma.technology.findMany();

    // use it for updating technologies on courses
    // TODO: see if adding technology to courses also works (following code has been added to technology API)
    const technology = await prisma.technology.findUnique({
        where: {
            id: 9
        },
        include: {
            Course: true
        }
    });


    return (
        <>
            {/*TODO: Fix the layout, default values for input fields and API test for adding new course*/}
            <NewCourseForm platformsData={platforms} categoriesData={categories} technologiesData={technologies} ></NewCourseForm>

        </>
    );
}
