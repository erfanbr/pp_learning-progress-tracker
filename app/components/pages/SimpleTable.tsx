import React from "react";
import Link from "next/link";
import {FaCaretDown, FaCaretUp} from "react-icons/fa";

interface Props {
    pageHeader: string,
    id: string,
    sortBy: string,
    sortedPlatforms: { id: number; title: string }[],
    sortType: string
    actionText?: string
}

export default function SimpleTable({pageHeader, id, sortBy, sortedPlatforms, sortType, actionText = "Edit"}: Props) {
    return (
        <>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead
                    className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        <div className="flex"><Link
                            href={`/${pageHeader.toLowerCase()}?sortBy=id&sortType=${sortType === "asc" ? "desc" : "asc"}`}>
                            ID
                        </Link>
                            {sortBy === "id" ? (
                                sortType === "asc" ? (
                                    <FaCaretDown className="ml-3"/>
                                ) : (
                                    <FaCaretUp className="ml-3"/>
                                )
                            ) : null}</div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <div className="flex">
                            <Link
                                href={`/${pageHeader.toLowerCase()}?sortBy=title&sortType=${sortType === "asc" ? "desc" : "asc"}`}>
                                {id + " name"}
                            </Link>
                            {sortBy === "title" ? (
                                sortType === "asc" ? (
                                    <FaCaretDown className="ml-3"/>
                                ) : (
                                    <FaCaretUp className="ml-3"/>
                                )
                            ) : null}
                        </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        {actionText}
                    </th>
                </tr>
                </thead>
                <tbody>
                {sortedPlatforms.map((platform) => (
                    <tr key={platform.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {platform.id}
                        </th>
                        <td className="px-6 py-4">{platform.title}</td>
                        <td className="px-6 py-4">
                            <Link href={`/${pageHeader.toLowerCase().replace(/ /g, "_")}/${platform.id}`}
                                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                {actionText}
                            </Link>
                        </td>
                    </tr>

                ))}
                </tbody>
            </table>
        </>
    );
}
