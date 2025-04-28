import React from "react";
import {prisma} from "@/prisma/client";
import Link from "next/link";

export default async function PlatformPage() {
    const platforms = await prisma.platform.findMany();

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Platform name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {platforms.map((platform) => (

                            <tr key={platform.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
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
            </div>


        </>
    );
}
