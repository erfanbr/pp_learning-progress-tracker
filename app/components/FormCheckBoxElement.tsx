import React from "react";
import {UseFormRegisterReturn} from "react-hook-form";

interface Props{
    title: string,
    id: number,
    value: string,
    register?: UseFormRegisterReturn;
    isCheck?: boolean
}

export default function FormCheckBoxElement(props : Props) {
    return (
        <>
            <div className="flex items-center">
                <input
                    id={`tech-${props.id}`}
                    type="checkbox"
                    value={props.value}
                    defaultChecked={props.isCheck}
                    {...props.register}
                       className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-200 dark:border-gray-100"/>

                <label htmlFor={`tech-${props.id}`}
                       className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {props.title}
                </label>
            </div>
        </>
    );
}
