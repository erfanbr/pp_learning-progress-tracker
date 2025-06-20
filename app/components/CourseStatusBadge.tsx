import React from "react";
import { Course, Status } from "../generated/prisma/client";
import {statusMap} from "@/app/components/mappings/StatusMap";




interface Props {
    status: Status
}



export default function CourseStatusBadge({status} : Props) {
    return (
        <>
            <span
                className={`text-xs font-medium me-2 px-2.5 
                py-0.5 rounded-full dark:bg-${statusMap[status].color}-900 dark:text-${statusMap[status].color}-300`}>
                {statusMap[status].label}
            </span>
        </>
    );
}

export function CourseStatusLearningPathBadge({status} : Props) {
    return (
        <>
            <span
                className={`text-sm font-medium text-
                me-2 px-2.5 py-0.5 rounded-full 
                dark:bg-${statusMap[status].color}-900 dark:text-${statusMap[status].color}-300 ms-3`}>
                {statusMap[status].label}
            </span>
        </>
    );
}



