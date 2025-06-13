import {CourseStatusBadge, statusMap} from "@/app/components";
import React from "react";

export default function Home() {
    let myColor = 'blue'
    return (
        <>
            <div>Main Part</div>
            <div>
                <button type="button" className="btn btn-primary">
                    Custom Primary Button Test
                </button>

            </div>
            <div><CourseStatusBadge status={"IN_PROGRESS"} key={"yellow"}/></div>
            <div>
                <span
                    className={` text-xs font-medium me-2 px-2.5 
                py-0.5 rounded-full dark:bg-${myColor}-900 dark:text-${myColor}-300`}>

                    Erfan
                </span>
            </div>

        </>
    )
        ;
}
