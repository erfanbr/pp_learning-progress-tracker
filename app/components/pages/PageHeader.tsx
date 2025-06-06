import React from "react";

export default function PageHeader({pageHeader} : {pageHeader: string}) {
    return (
        <>
            <div
                className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {pageHeader}
                </h3>
            </div>
        </>
    );
}
