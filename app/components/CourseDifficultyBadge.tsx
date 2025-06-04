import React from "react";
import { Course, Difficulty } from "../generated/prisma/client";

import {difficultyMap} from "@/app/components/mappings/DifficultyMap";





interface Props {
    difficulty: Difficulty
}



export default function CourseDifficultyBadge({difficulty} : Props) {
    return (
        <>
            <span
                className={`bg-${difficultyMap[difficulty].color}-100 text-${difficultyMap[difficulty].color}-800 text-xs font-medium me-2 px-2.5 
                py-0.5 rounded-full dark:bg-${difficultyMap[difficulty].color}-900 dark:text-${difficultyMap[difficulty].color}-300`}>
                {difficultyMap[difficulty].label}
            </span>
        </>
    );
}

