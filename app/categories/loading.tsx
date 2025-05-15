import React from "react";
import SimpleDetailsLoadingPage from "@/app/components/pages/SimpleDetailsLoadingPage";

export default function CategoryLoadingPage() {
    return (
        <>
            <SimpleDetailsLoadingPage pageHeader={'Category'} numberOfTableColumns={3} numberOfTableRows={8} />
        </>
    );
}
