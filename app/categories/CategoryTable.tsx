import React, {useState} from "react";
import {prisma} from "@/prisma/client";
import Link from "next/link";
import {sort} from "fast-sort"
import {FaCaretUp, FaCaretDown, FaSave} from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import AddItemButton from "@/app/components/AddItemButton";

interface Props {
    sortBy: string;
    sortType: string;
}

type Category = {
    id: number;
    title: string;
};


export default async function CategoryTable({sortBy, sortType}: Props) {


    const categories = await prisma.catergory.findMany();
    const sortMethod = sortType;

    const sortedCategories = sortMethod === "asc"
        ? sort(categories).asc(category =>
            sortBy in category ? category[sortBy as keyof Category] : category.id
        )
        : sort(categories).desc(category =>
            sortBy in category ? category[sortBy as keyof Category] : category.id
        );


    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex"><Link
                                href={`/categories?sortBy=id&sortType=${sortMethod === "asc" ? "desc" : "asc"}`}>
                                ID
                            </Link>
                                {sortBy === "id" ? (
                                    sortMethod === "asc" ? (
                                        <FaCaretDown className="ml-3"/>
                                    ) : (
                                        <FaCaretUp className="ml-3"/>
                                    )
                                ) : null}</div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex">
                                <Link
                                    href={`/categories?sortBy=title&sortType=${sortMethod === "asc" ? "desc" : "asc"}`}>
                                    Category name
                                </Link>
                                {sortBy === "title" ? (
                                    sortMethod === "asc" ? (
                                        <FaCaretDown className="ml-3" />
                                    ) : (
                                        <FaCaretUp className="ml-3" />
                                    )
                                ) : null}
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {sortedCategories.map((category) => (

                        <tr key={category.id}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {category.id}
                            </th>
                            <td className="px-6 py-4">{category.title}</td>
                            <td className="px-6 py-4">
                                <Link href={`/categories/${category.id}`}
                                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className="text-right">
                    <AddItemButton href="/categories/new" label="Add Category"></AddItemButton>
                </div>

            </div>
        </>
    );
}
