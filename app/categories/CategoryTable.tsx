import React, {useState} from "react";
import {prisma} from "@/prisma/client";
import Link from "next/link";
import {sort} from "fast-sort"

interface Props {
    sortBy: string;
    sortAsc: string;
}

type Category = {
    id: number;
    title: string;

};


export default async function CategoryTable({sortBy, sortAsc}: Props) {


    const categories = await prisma.catergory.findMany();

    // const isAscending = (sortAsc === "asc") ? true : false;

    // const sortedCategories = ((sortAsc === 'true')
    //     ? sort(categories).asc((category => category.title))
    //     : sort(categories).desc(category => category.title))

    // const sortedCategories = ((sortBy === 'title')
    //     ? sort(categories).asc((category => category.title))
    //     : sort(categories).asc(category => category.id))


    const sortedCategories = sort(categories).asc(category =>
        sortBy in category ? category[sortBy as keyof Category] : category.id
    );




    return (
        <>
            <h2>Sort by:{sortBy}</h2>
            <h2>Type: {sortAsc}</h2>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            <Link href="/categories?sortBy=id">
                                ID
                            </Link>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <Link
                                // href={`/categories?sortOrder=title&sortAsc=${(sortAsc === 'true') ? 'false' : 'true'}`}>
                                href="/categories?sortBy=title">
                                Category name
                            </Link>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {/*{(sortBy === null*/}
                    {/*        ? categories*/}
                    {/*        : sortedCategories*/}
                    {/*).map((category) => (                    */}

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
            </div>
        </>
    );
}
