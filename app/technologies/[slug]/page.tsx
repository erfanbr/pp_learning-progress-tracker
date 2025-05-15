import React from "react";
import SimpleDetailPage from "@/app/components/pages/SimpleDetailPage";


interface Props {
    params: { slug: string }
}

export default async function TechnologyDetailPage(myProp: Props) {


    return (
        <>
            <SimpleDetailPage params={myProp.params} pageHeader={"Technologies"} id={"Technology"}
                              backURL={'/technologies'} apiURL={'technologies'}/>

        </>
    );
}
