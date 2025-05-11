import React from "react";
import Link from "next/link";
import {FaCaretDown, FaCaretUp} from "react-icons/fa";

interface Props {
    title: string,
    stringTitle: string,
    sortMethod: string,
    url: string,
    sortBy: string
}

export default function TableHeadWithSorting({title, url, sortMethod, sortBy, stringTitle}: Props) {
    return (
        <>
            <th scope="col" className="px-6 py-3">
                <div className="flex">
                    <Link
                        href={url}>
                        {title}
                    </Link>
                    {sortBy === stringTitle ? (
                        sortMethod === "asc" ? (
                            <FaCaretDown className="ml-3"/>
                        ) : (
                            <FaCaretUp className="ml-3"/>
                        )
                    ) : null}
                </div>
            </th>
        </>
    );
}
