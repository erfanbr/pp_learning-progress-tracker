import React from "react";
import SimpleAddPage from "@/app/components/pages/SimpleAddPage";


export default async function TechnologyAddPage() {

    return (
        <>
            <SimpleAddPage  id={'Technology'} backURL={'/technologies'} apiURL={'technologies'}/>
        </>
    );
}
