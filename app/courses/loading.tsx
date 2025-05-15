import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import React from "react";
import CustomButton from "@/app/components/buttons/CustomButton";
import {IoAddCircleSharp} from "react-icons/io5";

export default function LoadingCoursesPage() {
    const courses = [1, 2, 3, 4, 5]
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex">ID</div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex">
                                Course Name
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex">
                                Status
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex">
                                Creation Time
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {courses.map((course) => (

                        <tr key={course}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <Skeleton />
                            </th>
                            <td className="px-6 py-4"><Skeleton/></td>
                            <td className="px-6 py-4"><Skeleton/></td>
                            <td className="px-6 py-4"><Skeleton/></td>
                            <td className="px-6 py-4"><Skeleton/></td>
                        </tr>

                    ))}
                    </tbody>
                </table>
                <div className="text-right py-5">
                    <CustomButton href="/courses/new" icon={IoAddCircleSharp} buttonType={"primary"}>Add
                        Course</CustomButton>
                </div>
            </div>
        </>
    );
}
