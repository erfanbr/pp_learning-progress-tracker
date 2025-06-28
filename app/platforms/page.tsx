import React from "react";
import SimplePageWithTable from "@/app/components/pages/SimplePageWithTable";

interface Props {
    searchParams: {
        sortBy?: string,
        sortType?: string
    };
}

export default async function PlatformPage( {searchParams}: Props) {
    searchParams = await searchParams;
    const sortBy = searchParams?.sortBy || "id";
    const sortType = searchParams?.sortType || "asc";



    return (
        <>
            <SimplePageWithTable
                pageHeader={"Platforms"}
                apiPath={'platforms'}
                id={"Platform"}
                sortBy={sortBy}
                sortType={sortType}
            />
        </>
    );
}
