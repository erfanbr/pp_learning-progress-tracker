import React from "react";
import {prisma} from "@/prisma/client";
import Link from "next/link";
import PlatformTable from "@/app/platforms/PlatformTable";

interface Props {
    searchParams: {
        sortBy?: string,
        sortType?: string
    };
}

export default async function PlatformPage( {searchParams}: Props) {
    const sortBy = searchParams?.sortBy || "id";
    const sortType = searchParams?.sortType || "asc";


    return (
        <>
            <PlatformTable sortBy={sortBy} sortType={sortType}></PlatformTable>

        </>
    );
}
