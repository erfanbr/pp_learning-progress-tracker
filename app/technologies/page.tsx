import React from "react";
import SimplePageWithTable from "@/app/components/pages/SimplePageWithTable";

interface Props {
    searchParams: {
        sortBy?: string,
        sortType?: string
    };
}

export default function TechnologyPage({searchParams}: Props) {
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
