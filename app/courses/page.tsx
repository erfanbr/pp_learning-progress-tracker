import React from "react";
import CourseStatusBadge from "@/app/components/CourseStatusBadge";
import CoursesTable from "@/app/courses/CoursesTable";

interface Props {
    searchParams: {
        sortBy?: string,
        sortType?: string
    };
}

export default function CoursesPage( {searchParams} : Props) {
    const sortBy = searchParams?.sortBy || "id";
    const sortType = searchParams?.sortType || "asc";

    return (
        <>
            <CoursesTable sortBy={sortBy} sortType={sortType} ></CoursesTable>

        </>
    );
}
