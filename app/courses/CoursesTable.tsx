import React from "react";
import {prisma} from "@/prisma/client";
import Link from "next/link";
import {sort} from "fast-sort";
import {FaCaretDown, FaCaretUp, FaSave} from "react-icons/fa";
import { IoAddCircleSharp } from "react-icons/io5";
import CustomButton from "@/app/components/CustomButton";
import CourseStatusBadge from "@/app/components/CourseStatusBadge";
import delay from "delay";
import axios from "axios";

interface Props {
    sortBy: string,
    sortType: string
}

type Course = {
    id: number;
    title: string;
    status: string;
};

export default async function CoursesTable({sortBy, sortType}: Props) {
    const courses = await prisma.course.findMany({
        include: {
            category: {
                select: {
                    title: true,
                },
            },
        },
    });



    // await delay(2000);

    const sortMethod = sortType;

    const sortedPlatforms = sortMethod === "asc"
        ? sort(courses).asc(course =>
            sortBy in course ? course[sortBy as keyof Course] : course.id
        )
        : sort(courses).desc(course =>
            sortBy in course ? course[sortBy as keyof Course] : course.id
        );

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex"><Link
                                href={`/courses?sortBy=id&sortType=${sortMethod === "asc" ? "desc" : "asc"}`}>
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
                                    href={`/courses?sortBy=title&sortType=${sortMethod === "asc" ? "desc" : "asc"}`}>
                                    Course name
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
                            <div className="flex">
                                <Link
                                    href={`/courses?sortBy=status&sortType=${sortMethod === "asc" ? "desc" : "asc"}`}>
                                    Status
                                </Link>
                                {sortBy === "status" ? (
                                    sortMethod === "asc" ? (
                                        <FaCaretDown className="ml-3"/>
                                    ) : (
                                        <FaCaretUp className="ml-3"/>
                                    )
                                ) : null}
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex">
                                <Link
                                    href={`/courses?sortBy=creationTime&sortType=${sortMethod === "asc" ? "desc" : "asc"}`}>
                                    Creation Time
                                </Link>
                                {sortBy === "creationTime" ? (
                                    sortMethod === "asc" ? (
                                        <FaCaretDown className="ml-3"/>
                                    ) : (
                                        <FaCaretUp className="ml-3"/>
                                    )
                                ) : null}
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex">
                                <Link
                                    href={`/courses?sortBy=creationTime&sortType=${sortMethod === "asc" ? "desc" : "asc"}`}>
                                    Category
                                </Link>
                                {sortBy === "creationTime" ? (
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
                    {sortedPlatforms.map((course) => (

                        <tr key={course.id}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {course.id}
                            </th>
                            <td className="px-6 py-4">{course.title}</td>
                            <td className="px-6 py-4"><CourseStatusBadge status={course.status}/></td>
                            <td className="px-6 py-4">{(course.createdAt).toDateString()}</td>
                            <td className="px-6 py-4">{(course.category!.title)}</td>
                            <td className="px-6 py-4">
                                <Link href={`/courses/${course.id}`}
                                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                            </td>
                        </tr>

                    ))}
                    </tbody>
                </table>
                <div className="text-right py-5">
                    <CustomButton href="/courses/new" icon={IoAddCircleSharp} buttonType={"primary"}>Add Course</CustomButton>
                </div>
            </div>
        </>
    );
}
