import React from "react";
import {CourseDifficultyBadge, CourseStatusBadge, TableHeadWithSorting} from "@/app/components";
import Link from "next/link";

interface Props<T extends string> {
    sortMethod: string,
    sortBy: string,
    sortedPlatforms: T
}

export default function CourseListView({sortMethod, sortBy, sortedPlatforms}: Props<any>) {
    return (
        <>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <TableHeadWithSorting title={"ID"} stringTitle={"id"} sortMethod={sortMethod}
                                          url={`/courses?sortBy=id&sortType=${sortMethod === "asc" ? "desc" : "asc"}`}
                                          sortBy={sortBy}/>

                    <TableHeadWithSorting title={"Course name"} stringTitle={"title"} sortMethod={sortMethod}
                                          url={`/courses?sortBy=title&sortType=${sortMethod === "asc" ? "desc" : "asc"}`}
                                          sortBy={sortBy}/>

                    <TableHeadWithSorting title={"Status"} stringTitle={"status"} sortMethod={sortMethod}
                                          url={`/courses?sortBy=status&sortType=${sortMethod === "asc" ? "desc" : "asc"}`}
                                          sortBy={sortBy}/>


                    {/*/!*TODO: Fix category sorting*!/*/}
                    <TableHeadWithSorting title={"Category"} stringTitle={"categoryId"} sortMethod={sortMethod}
                                          url={`/courses?sortBy=categoryId&sortType=${sortMethod === "asc" ? "desc" : "asc"}`}
                                          sortBy={sortBy}/>

                    <TableHeadWithSorting title={"Difficulty"} stringTitle={"difficulty"}
                                          sortMethod={sortMethod}
                                          url={`/courses?sortBy=difficulty&sortType=${sortMethod === "asc" ? "desc" : "asc"}`}
                                          sortBy={sortBy}/>

                    {/*/!*TODO: Fix Platform sorting*!/*/}
                    <TableHeadWithSorting title={"Platform"} stringTitle={"platformId"} sortMethod={sortMethod}
                                          url={`/courses?sortBy=platformId&sortType=${sortMethod === "asc" ? "desc" : "asc"}`}
                                          sortBy={sortBy}/>

                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
                </thead>
                <tbody>
                {sortedPlatforms.map((course) => (

                    <tr key={course.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {course.id}
                        </th>
                        <td className="px-6 py-4">{course.title}</td>
                        <td className="px-6 py-4"><CourseStatusBadge status={course.status}/></td>
                        <td className="px-6 py-4">{(course.category!.title)}</td>
                        <td className="px-6 py-4"><CourseDifficultyBadge difficulty={course.difficulty}/></td>
                        <td className="px-6 py-4">{(course.platform!.title)}</td>
                        <td className="px-6 py-4">
                            <Link href={`/courses/${course.id}`}
                                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                        </td>
                    </tr>

                ))}
                </tbody>
            </table>
        </>
    );
}
