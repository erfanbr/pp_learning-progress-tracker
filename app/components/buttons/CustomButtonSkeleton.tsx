import React, {ElementType, PropsWithChildren} from "react";
import {MdCancel} from "react-icons/md";
import Link from "next/link";
import clsx from "clsx";
import {Button} from "flowbite-react";
import {Skeleton} from "@/app/components";

type ButtonStyleType = "primary" | "danger" | "discard" | "outline_primary" | "primary_xs";
type ButtonType = 'reset' | 'submit' | 'button';

type CancelButtonProps = PropsWithChildren<{
    icon: ElementType;
    buttonStyleType: ButtonStyleType;
}>;

const variantClasses: Record<ButtonStyleType, string> = {
    primary: `
    px-5 py-2.5 text-zinc-200 inline-flex items-center hover:text-white border-2 border-zinc-200
    hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-3xl
    text-sm text-center dark:border-zinc-200 dark:text-zinc-200 dark:hover:text-white
    dark:bg-primary-500 dark:hover:bg-primary-600 dark:focus:ring-primary-700 

  `,

    primary_xs: `
    px-3 py-1.5 text-zinc-200 inline-flex items-center hover:text-white border-2 border-zinc-200
    hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-3xl
    text-sm  text-center dark:border-zinc-200 dark:text-zinc-200 dark:hover:text-white
    dark:bg-primary-500 dark:hover:bg-primary-600 dark:focus:ring-primary-700 

  `,

    danger: `
    mx-2 text-red-600 inline-flex items-center hover:text-white border-2 border-red-600
    hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-3xl
    text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white
    dark:hover:bg-red-600 dark:focus:ring-red-900
  `,

    discard: `
    px-5 py-2.5 mr-2.5  text-zinc-200 inline-flex items-center font-medium text-gray-900 focus:outline-none
    bg-white rounded-3xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700
    focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800
    dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700
  `,

    outline_primary: `
    px-5 py-2.5 mr-2.5  text-zinc-200 inline-flex items-center font-medium text-gray-900 focus:outline-none
    bg-white rounded-3xl border border-primary-500 hover:bg-gray-100 hover:text-blue-700
    focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800
    dark:text-primary-500 dark:border-primary-500 dark:hover:text-white dark:hover:bg-primary-500
  `,
}

export default function CustomButtonSkeleton({
                                         icon: Icon,
                                         buttonStyleType = 'primary',

                                     }: CancelButtonProps) {

    return (
        <>
            <>
                <button className={clsx(variantClasses[buttonStyleType])}>
                    <Icon className="mr-1.5 -ml-1.5 w-4 h-4"/><Skeleton width={"4rem"}/>
                </button>
            </>
        </>
    )};
