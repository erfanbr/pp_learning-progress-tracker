import SimpleAddPage from "@/app/components/pages/SimpleAddPage";
import React from "react";

export default function NewCategoryPage() {
    return (
        <>
            <SimpleAddPage id={'Category'} backURL={'/categories'} apiURL={'categories'}/>
        </>
    );
}
