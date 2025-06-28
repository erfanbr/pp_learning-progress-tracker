import React from "react";
import SimplePageWithTable from "@/app/components/pages/SimplePageWithTable";

interface Props {
    searchParams: {
        sortBy?: string,
        sortType?: string
    };
}

export default async function TechnologyPage({searchParams}: Props) {
    searchParams = await searchParams;
    const sortBy = searchParams?.sortBy || "id";
    const sortType = searchParams?.sortType || "asc";

    return (
        <>
            <SimplePageWithTable
                pageHeader={"Technologies"}
                apiPath={'technologies'}
                id={"Technology"}
                sortBy={sortBy}
                sortType={sortType}
            />
        </>
    );
}
