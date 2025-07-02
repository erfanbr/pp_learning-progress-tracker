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
import CourseListView from "@/app/courses/CourseListView";


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
                <PageHeader pageHeader="Courses Detail"/>

                <div
                    className="pb-4 mb-4 rounded-t sm:mb-5 dark:border-gray-600">

                    <h2 id="accordion-collapse-heading-2">
                        <button type="button" onClick={() => setIsCollapsed(!isCollapsed)}
                                className={`flex items-center p-3 justify-between w-full font-medium rtl:text-right text-gray-500 mb-4 border-b sm:mb-5  border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-600 dark:text-gray-400 ${isCollapsed ? 'dark:bg-gray-800' : 'dark:bg-gray-700'} hover:bg-gray-100 dark:hover:bg-gray-700 gap-3`}
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
                    <div>
                        List view
                    </div>
                </div>

                <CourseListView
                    sortedPlatforms={sortedPlatforms}
                    sortBy={sortBy}
                    sortMethod={sortMethod}>
                </CourseListView>

                <div className="text-right py-5">
                    <CustomButton href="/courses/new" icon={IoAddCircleSharp} buttonStyleType={"primary"}>Add
                        Course</CustomButton>
                </div>
            </div>
        </>
    );
}
