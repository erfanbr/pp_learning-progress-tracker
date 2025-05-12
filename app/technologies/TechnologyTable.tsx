import React from "react";
import {prisma} from "@/prisma/client";
import Link from "next/link";
import {sort} from "fast-sort";
import {FaCaretDown, FaCaretUp, FaSave} from "react-icons/fa";
import AddItemButton from "@/app/components/AddItemButton";
import CustomButton from "@/app/components/CustomButton";

interface Props {
    sortBy: string,
    sortType: string
}

type Technology = {
    id: number;
    title: string;
};

export default async function TechnologyTable({sortBy, sortType}: Props) {
    const technologies = await prisma.technology.findMany();

    const sortMethod = sortType;

    const sortedPlatforms = sortMethod === "asc"
        ? sort(technologies).asc(technology =>
            sortBy in technology ? technology[sortBy as keyof Technology] : technology.id
        )
        : sort(technologies).desc(technology =>
            sortBy in technology ? technology[sortBy as keyof Technology] : technology.id
        );

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex"><Link
                                href={`/technologies?sortBy=id&sortType=${sortMethod === "asc" ? "desc" : "asc"}`}>
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
                                    href={`/technologies?sortBy=title&sortType=${sortMethod === "asc" ? "desc" : "asc"}`}>
                                    Technology name
                                </Link>
                                {sortBy === "title" ? (
                                    sortMethod === "asc" ? (
                                        <FaCaretDown className="ml-3"/>
                                    ) : (
                                        <FaCaretUp className="ml-3"/>
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
                    {sortedPlatforms.map((technology) => (

                        <tr key={technology.id}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {technology.id}
                            </th>
                            <td className="px-6 py-4">{technology.title}</td>
                            <td className="px-6 py-4">
                                <Link href={`/technologies/${technology.id}`}
                                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                            </td>
                        </tr>

                    ))}
                    </tbody>
                </table>
                <div className="text-right py-5">
                    <CustomButton href="/technologies/new" icon={FaSave} buttonType={"primary"}>Add Platform</CustomButton>
                </div>
            </div>
        </>
    );
}
