import React from "react";
import SimpleDetailsLoadingPage from "@/app/components/pages/SimpleDetailsLoadingPage";

export default function TechnologyLoadingPage() {
    return (
        <>
            <SimpleDetailsLoadingPage pageHeader={'Technology'} numberOfTableColumns={3} numberOfTableRows={8} />
        </>
    );
}
