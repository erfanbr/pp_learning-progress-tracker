import React from "react";
import {prisma} from "@/prisma/client";

import SimpleDetailPage from "@/app/components/pages/SimpleDetailPage";


interface Props {
    params: { slug: string }
}

export default async function PlatformDetailPage(myProp: Props) {
    const platform = await prisma.platform.findUnique({
        where: {id: parseInt(myProp.params.slug)}
    })

    return (
        <>
            <SimpleDetailPage params={myProp.params} pageHeader={"Platforms"} id={"Platform"} backURL={'/platforms'} apiURL={'platforms'} />
        </>
    );
}
