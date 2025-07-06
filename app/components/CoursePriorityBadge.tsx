import React from "react";
import {Course, Priority} from "../generated/prisma/client";


import {priorityMap} from "@/app/components/mappings/PriorityMap";


interface Props {
    priority: Priority
}


export default function CoursePriorityBadge({priority}: Props) {
    return (
        <>
             <span
                 className={`bg-${priorityMap[priority].color}-100 text-${priorityMap[priority].color}-800 text-xs font-medium me-2 px-2.5
                 py-0.5 rounded-full dark:bg-${priorityMap[priority].color}-900 dark:text-${priorityMap[priority].color}-300`}>
                 {priorityMap[priority].label}
             </span>
        </>
    );
}

