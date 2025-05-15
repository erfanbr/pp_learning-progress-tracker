import React from "react";
import SimpleDetailsLoadingPage from "@/app/components/pages/SimpleDetailsLoadingPage";

export default function PlatformLoadingPage() {
    return (
        <>
            <SimpleDetailsLoadingPage pageHeader={'Platform'} numberOfTableColumns={3} numberOfTableRows={8} />
        </>
    );
}
