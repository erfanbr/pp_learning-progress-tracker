import React from "react";
import {prisma} from "@/prisma/client";
import SimpleDetailPage from "@/app/components/pages/SimpleDetailPage";


interface Props {
    params: { slug: string }
}

export default async function CategoryEditPage(myProp: Props) {
    return (
        <>
            <SimpleDetailPage params={myProp.params} pageHeader={"Categories"} id={"Category"}
                              backURL={'/categories'} apiURL={'categories'} />
        </>
    );
}
