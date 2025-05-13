import React from "react";

interface Props{
    title: string
}

export default function CheckBoxElement(props : Props) {
    return (
        <>
            <div className="flex items-center">
                <input id={props.title.toLowerCase()} key={props.title.toLowerCase()} type="checkbox" value=""
                       className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-200 dark:border-gray-100"/>

                <label htmlFor={props.title.toLowerCase()}
                       className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {props.title}
                </label>
            </div>
        </>
    );
}
