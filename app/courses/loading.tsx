import React from "react";
import CustomButton from "@/app/components/buttons/CustomButton";
import {IoAddCircleSharp} from "react-icons/io5";
import {Skeleton} from "@/app/components";
import {FaCaretDown, FaCaretUp} from "react-icons/fa";

export default function LoadingCoursesPage() {
    const courses = [1, 2, 3, 4, 5]
    return (
        <>
            <div
                className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                <div
                    className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Courses Detail
                    </h3>
                </div>
                <div
                    className="pb-4 mb-4 rounded-t sm:mb-5 dark:border-gray-600">
                    <button type="button"
                            className="flex items-center pt-2 justify-between w-full font-medium rtl:text-right text-gray-500 pb-4 mb-4 rounded-t border-b sm:mb-5  border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                            data-accordion-target="#accordion-collapse-body-2" aria-expanded="false"
                            aria-controls="accordion-collapse-body-2">
                        <span>Filters</span>
                        <FaCaretDown/>
                    </button>
                </div>
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
                                Category
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex">
                                Difficulty
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex">
                                Platform
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
                                <Skeleton/>
                            </th>
                            <td className="px-6 py-4"><Skeleton/></td>
                            <td className="px-6 py-4"><Skeleton/></td>
                            <td className="px-6 py-4"><Skeleton/></td>
                            <td className="px-6 py-4"><Skeleton/></td>
                            <td className="px-6 py-4"><Skeleton/></td>
                            <td className="px-6 py-4"><Skeleton/></td>
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
