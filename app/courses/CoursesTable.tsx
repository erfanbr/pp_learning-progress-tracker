'use client'
import React, {useState} from "react";
import Link from "next/link";
import {sort} from "fast-sort";
import {FaCaretDown, FaCaretUp, FaSave} from "react-icons/fa";
import {IoAddCircleSharp} from "react-icons/io5";
import {CustomButton, CourseStatusBadge, TableHeadWithSorting, CourseDifficultyBadge} from '@/app/components'
import delay from "delay";

import CourseFilter from "@/app/courses/CourseFilter";

import {MdCancel} from "react-icons/md";
import PageHeader from "@/app/components/pages/PageHeader";


interface Props<T extends string> {
    sortBy: string,
    sortType: string,
    platformsData: { id: number; title: string }[],
    categoryData: { id: number; title: string }[],
    technologiesData: { id: number; title: string }[],
    coursesData: T,
}

type Course = {
    id: number;
    title: string;
    status: string;

};

export default function CoursesTable({
                                         coursesData,
                                         sortBy,
                                         sortType,
                                         platformsData,
                                         categoryData,
                                         technologiesData,

                                     }: Props<T>) {

    const [currentStatusFilter, setCurrentStatusFilter] = useState('');
    const [currentDifficultyFilter, setCurrentDifficultyFilter] = useState('');
    const [currentPriorityFilter, setCurrentPriorityFilter] = useState('');
    const [currentPlatformFilter, setCurrentPlatformFilter] = useState('');
    const [currentCategoryFilter, setCurrentCategoryFilter] = useState('');
    const [currentTechnologyFilter, setCurrentTechnologyFilter] = useState('');

    const [isCollapsed, setIsCollapsed] = useState(true);


    const filteredCourse = coursesData.filter(course => {
        const matchesStatus = currentStatusFilter ? course.status === currentStatusFilter : true;
        const matchesDifficulty = currentDifficultyFilter ? course.difficulty === currentDifficultyFilter : true;
        const matchesPriority = currentPriorityFilter ? course.priority === currentPriorityFilter : true;
        const matchesPlatform = currentPlatformFilter ? course.platformId === currentPlatformFilter : true;
        const matchesCategory = currentCategoryFilter ? course.categoryId === currentCategoryFilter : true;
        const matchesTechnology = currentTechnologyFilter
            ? course.technology.some(tech => tech.id === currentTechnologyFilter) : true;

        return matchesStatus && matchesDifficulty && matchesPriority && matchesPlatform && matchesCategory && matchesTechnology;
    });

    const handleClearFilter = () => {
        setCurrentStatusFilter('');
        setCurrentDifficultyFilter('');
        setCurrentPriorityFilter('');
        setCurrentPlatformFilter('');
        setCurrentCategoryFilter('');
        setCurrentTechnologyFilter('');

    }

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

    return (
        <>
            <div

                className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                <PageHeader pageHeader="Courses Detail" />

                <div
                    className="pb-4 mb-4 rounded-t sm:mb-5 dark:border-gray-600">

                    <h2 id="accordion-collapse-heading-2">
                        <button type="button" onClick={() => setIsCollapsed(!isCollapsed)}
                                className="flex items-center pt-2 justify-between w-full font-medium rtl:text-right text-gray-500 pb-4 mb-4 rounded-t border-b sm:mb-5  border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                data-accordion-target="#accordion-collapse-body-2" aria-expanded="false"
                                aria-controls="accordion-collapse-body-2">
                            <span>Filters</span>
                            {isCollapsed ? <FaCaretDown/> : <FaCaretUp/>}

                        </button>
                    </h2>
                    <div className={` ${isCollapsed ? 'hidden' : ''}`}>
                        <CourseFilter platformData={platformsData}
                                      categoryData={categoryData}
                                      technologiesData={technologiesData}
                                      onPlatformValueClick={(platformId) => setCurrentPlatformFilter(parseInt(platformId))}
                                      onCategoryValueClick={(category) => setCurrentCategoryFilter(parseInt(category))}
                                      onTechnologyValueClick={(technology) => setCurrentTechnologyFilter(parseInt(technology))}
                                      onStatusValueClick={(status) => setCurrentStatusFilter(status)}
                                      onDifficultyValueClick={(difficulty) => setCurrentDifficultyFilter(difficulty)}
                                      onPriorityValueClick={(priority) => setCurrentPriorityFilter(priority)}
                        >

                        </CourseFilter>

                        <div className="pb-4 mb-4 text-right border-b dark:border-gray-600">
                            <CustomButton
                                icon={MdCancel}
                                onClick={() => handleClearFilter()}
                                buttonStyleType={"discard"}>
                                Clear Filters
                            </CustomButton>
                        </div>

                    </div>

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
                <div className="text-right py-5">
                    <CustomButton href="/courses/new" icon={IoAddCircleSharp} buttonStyleType={"primary"}>Add
                        Course</CustomButton>
                </div>
            </div>
        </>
    );
}
