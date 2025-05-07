import React, {PropsWithChildren, ReactNode} from "react";


export default function InputErrorMessage({children}: PropsWithChildren) {
    if (!children) return null;
    return (
        <>
            <div>
                <p id="filled_error_help"
                   className="mt-2 text-xs text-red-600 dark:text-red-400">
                    {children}
                </p>
            </div>
        </>
    );
}
