import React from "react";
import SimpleAddPage from "@/app/components/pages/SimpleAddPage";

export default function AddPlatformPage() {
    return (
        <>
            <SimpleAddPage id={'Platform'} backURL={'/platforms'} apiURL={'platforms'}/>
        </>
    );
}
