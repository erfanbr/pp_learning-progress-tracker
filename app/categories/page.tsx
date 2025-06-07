// 'use client'
import React from "react";
import SimplePageWithTable from "@/app/components/pages/SimplePageWithTable";


interface Props {
    searchParams: {
        sortBy?: string,
        sortType?: string
    };
}

export default function CategoriesPage( {searchParams}: Props) {
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
