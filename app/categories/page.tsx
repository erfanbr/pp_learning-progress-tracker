// 'use client'
import React from "react";

import CategoryTable from "@/app/categories/CategoryTable";

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
            <CategoryTable sortBy={sortBy} sortType={sortType}></CategoryTable>
        </>
    );
}
