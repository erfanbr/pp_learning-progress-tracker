import React from "react";
import SimpleEditPage from "@/app/components/pages/SimpleEditPage";

interface Props {
    params: { slug: string }
}

export default function EditPlatformPage(myProps : Props) {
    return (
        <>
           <SimpleEditPage id={'Platform'} backURL={'../'} params={myProps.params} />
        </>
    );
}
