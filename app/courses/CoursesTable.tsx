'use client'
import React, {useState} from "react";
import {prisma} from "@/prisma/client";
import Link from "next/link";
import {sort} from "fast-sort";
import {FaCaretDown, FaCaretUp, FaSave} from "react-icons/fa";
import {IoAddCircleSharp} from "react-icons/io5";
import CustomButton from "@/app/components/buttons/CustomButton";
import CourseStatusBadge from "@/app/components/CourseStatusBadge";
import delay from "delay";
import axios from "axios";
import TableHeadWithSorting from "@/app/components/TableHeadWithSorting";
import CourseFilter from "@/app/courses/CourseFilter";
import {z} from "zod";
import {createCourseSchema} from "@/app/validationSchema";



interface Props<T extends string> {
    sortBy: string,
    sortType: string,
    coursesData: T,

}

type Course = {
    id: number;
    title: string;
    status: string;

};

export default function CoursesTable({coursesData, sortBy, sortType}: Props<T>) {
    // const courses = await prisma.course.findMany({
    //     include: {
    //         category: {
    //             select: {
    //                 title: true,
    //             },
    //         },
    //         platform: {
    //             select: {
    //                 title: true,
    //             }
    //         }
    //     },
    // });
    const [currentFilterValue, setCurrentFilterValue] = useState('');
    //
    const filteredCourse = currentFilterValue ?
        coursesData.filter(course => course.status === currentFilterValue) : coursesData;

    // const filteredCourse = coursesData.filter(course => course.status === currentFilterValue);



    const courses = filteredCourse;




    // await delay(2000);

    const sortMethod = sortType;

    const sortedPlatforms = sortMethod === "asc"
        ? sort(courses).asc(course =>
            sortBy in course ? course[sortBy as keyof Course] : course.id
        )
        : sort(courses).desc(course =>
            sortBy in course ? course[sortBy as keyof Course] : course.id
        );

    // const [currentFilterValue, setFilterValue] = useState('');

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                <div
                    className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Courses Detail
                    </h3>

                    <CourseFilter onFilterValueClick={(status) => setCurrentFilterValue(status)} ></CourseFilter>




                </div>



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

                        <TableHeadWithSorting title={"Creation Time"} stringTitle={"creationTime"} sortMethod={sortMethod}
                                              url={`/courses?sortBy=creationTime&sortType=${sortMethod === "asc" ? "desc" : "asc"}`}
                                              sortBy={sortBy}/>


                        {/*/!*TODO: Fix category sorting*!/*/}
                        <TableHeadWithSorting title={"Category"} stringTitle={"categoryId"} sortMethod={sortMethod}
                                              url={`/courses?sortBy=categoryId&sortType=${sortMethod === "asc" ? "desc" : "asc"}`}
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
                            <td className="px-6 py-4">{(course.createdAt).toDateString()}</td>
                            <td className="px-6 py-4">{(course.category!.title)}</td>
                            <td className="px-6 py-4">{(course.platform!.title)}</td>
                            <td className="px-6 py-4">
                                <Link href={`/courses/${course.id}`}
                                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                            </td>
                        </tr>

                    ))}
                    </tbody>
                </table>
                <div className="text-right py-5">
                    <CustomButton href="/courses/new" icon={IoAddCircleSharp} buttonStyleType={"primary"}>Add
                        Course</CustomButton>
                </div>
            </div>
        </>
    );
}
