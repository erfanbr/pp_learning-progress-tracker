import React from "react";
import {z} from "zod";
import SimplePageWithTable from "@/app/components/pages/SimplePageWithTable";

export const createLearningPathSchema = z.object({
    title: z.string().min(3, 'Title has to be at least 3 characters').max(150),
    description: z.string().min(0).max(1024, 'description can be max 1024 characters')
})

export default function LearningPathPage( {searchParams} : Props) {
    const sortBy = searchParams?.sortBy || "id";
    const sortType = searchParams?.sortType || "asc";

    return (
        <>
            <SimplePageWithTable pageHeader={"Learning Paths"}
                                 apiPath={"learning_paths"}
                                 id={"Learning Paths"}
                                 sortBy={sortBy}
                                 sortType={sortType}
            />
        </>
    );
}
