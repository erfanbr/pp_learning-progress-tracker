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
                className={`bg-${statusMap[status].color}-100 text-${statusMap[status].color}-800 text-xs font-medium me-2 px-2.5 
                py-0.5 rounded-full dark:bg-${statusMap[status].color}-900 dark:text-${statusMap[status].color}-300`}>
                {statusMap[status].label}
            </span>
        </>
    );
}

