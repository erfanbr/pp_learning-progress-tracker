import React from "react";
import TechnologyTable from "@/app/technologies/TechnologyTable";

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
            <TechnologyTable sortBy={sortBy} sortType={sortType}></TechnologyTable>
        </>
    );
}
