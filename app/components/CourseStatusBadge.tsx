
import React from "react";
import { Course, Status } from "../generated/prisma/client";

type colors = "blue" | "red" | "green" | "yellow" | "indigo";


interface Props {
    status: Status
}

const statusMap: Record<Status, {label: string, color: colors}> = {
    NOT_STARTED_YET: { label: 'Not Started Yet', color: 'indigo'},
    IN_PROGRESS: { label: 'In Progress', color: 'blue'},
    BLOCKED: { label: 'Blocked', color: 'red'},
    DONE: { label: 'Done', color: 'green'},
    ABANDONED: { label: 'Abandoned', color: 'yellow'}
};


export default function CourseStatusBadge({status} : Props) {
    return (
        <>
            {/*<p>{statusMap[status].label}</p>*/}

            <span
                className={`bg-${statusMap[status].color}-100 text-${statusMap[status].color}-800 text-xs font-medium me-2 px-2.5 
                py-0.5 rounded-full dark:bg-${statusMap[status].color}-900 dark:text-${statusMap[status].color}-300`}>
                {statusMap[status].label}
            </span>
        </>
    );
}

// Continue with part 25.2`