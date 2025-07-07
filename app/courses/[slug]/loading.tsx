import React from "react";
import SimpleDetailsLoadingPage from "@/app/components/pages/SimpleDetailsLoadingPage";
import CourseDetailLoadingPageSkeleton from "@/app/courses/[slug]/CourseDetailLoadingPageSkeleton";

export default function CourseDetailLoadingPage() {
    return (
        <>
            <CourseDetailLoadingPageSkeleton />
        </>
    );
}
