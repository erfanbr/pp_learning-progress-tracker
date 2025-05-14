import React from "react";
import PageWithSimpleTable from "@/app/components/PageWithSimpleTable";

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
            <PageWithSimpleTable pageHeader={"Platforms"} id={"Platform"} sortBy={sortBy} sortType={sortType}/>
        </>
    );
}
