import React from "react";
import {prisma} from "@/prisma/client";
import Link from "next/link";
import {sort} from "fast-sort";
import {FaCaretDown, FaCaretUp, FaSave} from "react-icons/fa";
import CustomButton from "@/app/components/CustomButton";

interface Props {
    sortBy: string,
    sortType: string
}

type Platform = {
    id: number;
    title: string;
};

export default async function PlatformTable({sortBy, sortType}: Props) {
    const platforms = await prisma.platform.findMany();

    const sortMethod = sortType;

    const sortedPlatforms = sortMethod === "asc"
        ? sort(platforms).asc(platform =>
            sortBy in platform ? platform[sortBy as keyof Platform] : platform.id
        )
        : sort(platforms).desc(platform =>
            sortBy in platform ? platform[sortBy as keyof Platform] : platform.id
        );

    return (
        <>
            <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <div
                        className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Platforms
                        </h3>
                    </div>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex"><Link
                                    href={`/platforms?sortBy=id&sortType=${sortMethod === "asc" ? "desc" : "asc"}`}>
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
                                        href={`/platforms?sortBy=title&sortType=${sortMethod === "asc" ? "desc" : "asc"}`}>
                                        Platform name
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
                        {sortedPlatforms.map((platform) => (

                            <tr key={platform.id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {platform.id}
                                </th>
                                <td className="px-6 py-4">{platform.title}</td>
                                <td className="px-6 py-4">
                                    <Link href={`/platforms/${platform.id}`}
                                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                </td>
                            </tr>

                        ))}
                        </tbody>
                    </table>
                    <div className="text-right py-5">
                        <CustomButton href="/platforms/new" icon={FaSave} buttonType={"primary"}>Add
                            Platform</CustomButton>
                    </div>
                </div>
            </div>
        </>
    );
}
