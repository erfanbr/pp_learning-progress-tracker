// 'use client'
import React from "react";
import SimplePageWithTable from "@/app/components/pages/SimplePageWithTable";


interface Props {
    searchParams: {
        sortBy?: string,
        sortType?: string
    };
}

export default async function CategoriesPage( {searchParams}: Props) {
    searchParams = await searchParams;
    const sortBy = searchParams?.sortBy || "id";
    const sortType = searchParams?.sortType || "asc";

    return (
        <>
            <SimplePageWithTable pageHeader={"Categories"}
                                 apiPath={"categories"}
                                 id={"Category"}
                                 sortBy={sortBy}
                                 sortType={sortType}/>
        </>
    );
}
