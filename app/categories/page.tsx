// 'use client'
import React from "react";
import PageWithSimpleTable from "@/app/components/PageWithSimpleTable";


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
            <PageWithSimpleTable pageHeader={"Categories"} id={"Category"} sortBy={sortBy} sortType={sortType}/>
        </>
    );
}
