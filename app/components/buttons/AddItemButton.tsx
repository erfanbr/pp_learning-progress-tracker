import React from "react";
import Link from "next/link";
import {FaSave} from "react-icons/fa";

interface Props{
    href: string,
    label: string
}

export default function AddItemButton( {href, label}: Props) {
    return (
        <>
            <Link href={href} className=" text-zinc-200 inline-flex items-center hover:text-white border-2 border-zinc-200
                                    hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-3xl
                                    text-sm mx-2.5 my-5 px-5 py-2.5 text-center dark:border-zinc-200 dark:text-zinc-200 dark:hover:text-white
                                     dark:bg-primary-500 dark:hover:bg-primary-600 dark:focus:ring-primary-700">
                <FaSave className="mr-1.5 -ml-1.5 w-5 h-5"/>{label}
            </Link>
        </>
    );
}
