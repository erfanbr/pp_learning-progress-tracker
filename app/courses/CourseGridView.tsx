import React from "react";
import {CourseDifficultyBadge, CourseStatusBadge, TableHeadWithSorting} from "@/app/components";
import Link from "next/link";

interface Props<T extends string> {
    sortMethod: string,
    sortBy: string,
    sortedPlatforms: T
}

export default function CourseGridView({sortMethod, sortBy, sortedPlatforms}: Props<any>) {
    return (
        <>
            GridView
        </>
    );
}
