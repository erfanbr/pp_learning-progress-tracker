// 'use client'
import React, {useState} from "react";
import {prisma} from "@/prisma/client";
import Link from "next/link";
import CategoryTable from "@/app/categories/CategoryTable";

interface Props {
    searchParams: {
        sortBy?: string,
        sortAsc?: string
    };
}

export default function CategoriesPage( {searchParams}: Props) {
    // const [IsAcending, setIsAcsending]= useState(true);

    // const sortOrder = searchParams?.sortOrder || 'desc';
    const sortBy = searchParams?.sortBy || "id";
    const sortAsc = searchParams?.sortAsc;
    // const categories = await prisma.catergory.findMany();


    const handeleSortClick = ()=> {
        // setIsAcsending(!IsAcending);

    }


    return (
        <>
            <CategoryTable sortBy={sortBy} sortAsc={sortAsc}></CategoryTable>
        </>
    );
}
