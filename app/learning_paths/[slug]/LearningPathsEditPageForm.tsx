'use client'
import React, {useState} from "react";
import Link from "next/link";
import FormInputFieldElement from "@/app/components/formInputs/FormInputFieldElement";
import CustomButton from "../../components/buttons/CustomButton";
import {FaMagnifyingGlass, FaTrashCan} from "react-icons/fa6";
import {CourseStatusLearningPathBadge} from "@/app/components/CourseStatusBadge";
import {FaCaretDown, FaCaretUp} from "react-icons/fa";

// type LearningPaths = z.infer<typeof createLearningPathSchema>;

type LearningPaths = {
    id: number;
    title: string;
    description: string;
    // courses: Course[];
};

type LearningPathsCourses = {
    id: number,
    title: string,
    description: string,
    courses: Course[],
    learningPaths: LearningPath[];
};
type Course = {
    id: number,
    title: string,
    order: number,
}

interface Props {
    id: string,
    // platformsData: { id: number; title: string }[],
    // categoriesData: { id: number; title: string }[],
    // technologiesData: { id: number; title: string }[],
    // currentTechnologiesId: number[],
    learningPathsCoursesData: LearningPathsCourses,
}

export default function LearningPathsEditPageForm({learningPathsCoursesData}: Props) {
    const [isTitleCollapsed, setTitleCollapsed] = useState(true);
    const [isDescriptionCollapsed, setDescriptionCollapsed] = useState(true);
    const [isLearningPathCollapsed, setLearningPathCollapsed] = useState(false);

    return (
        <>
            <div>
                <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    {/*// <!-- Modal header -->*/}
                    <div
                        className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Learning Path - {learningPathsCoursesData[0]?.learningPath?.title}
                        </h3>
                        <Link
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            href="/learning_paths/">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </Link>
                    </div>
                    {/*// <!-- Modal body -->*/}


                    {/*Tittle Section*/}
                    <div id="accordion-open" data-accordion="open">
                        <h2 id="accordion-open-heading-1">
                            <button type="button"
                                    onClick={() => setTitleCollapsed(!isTitleCollapsed)}
                                    className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 ${isTitleCollapsed ? 'dark:bg-gray-800' : 'dark:bg-gray-700'} dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3`}
                                    data-accordion-target="#accordion-open-body-1" aria-expanded="true"
                                    aria-controls="accordion-open-body-1">
                                <span className="flex items-center"><svg className="w-5 h-5 me-2 shrink-0"
                                                                         fill="currentColor" viewBox="0 0 20 20"
                                                                         xmlns="http://www.w3.org/2000/svg"><path
                                    fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                    clip-rule="evenodd"></path></svg> Title: </span>
                                {isTitleCollapsed ? <FaCaretDown/> : <FaCaretUp/>}
                            </button>
                        </h2>
                        <div id="accordion-open-body-1" className={` ${isTitleCollapsed ? 'hidden' : ''}`} aria-labelledby="accordion-open-heading-1">
                            <div
                                className="p-10 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    {learningPathsCoursesData[0]?.learningPath?.title}
                                </p>

                            </div>
                        </div>

                        {/*Description Section*/}
                        <h2 id="accordion-open-heading-2">
                            <button type="button"
                                    onClick={() => setDescriptionCollapsed(!isDescriptionCollapsed)}
                                    className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 ${isDescriptionCollapsed ? 'dark:bg-gray-800' : 'dark:bg-gray-700'} dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3`}
                                    data-accordion-target="#accordion-open-body-2" aria-expanded="false"
                                    aria-controls="accordion-open-body-2">
                                <span className="flex items-center"><svg className="w-5 h-5 me-2 shrink-0"
                                                                         fill="currentColor" viewBox="0 0 20 20"
                                                                         xmlns="http://www.w3.org/2000/svg"><path
                                    fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                    clip-rule="evenodd"></path></svg>Description:</span>
                                {isDescriptionCollapsed ? <FaCaretDown/> : <FaCaretUp/>}
                            </button>
                        </h2>
                        <div id="accordion-open-body-2" className={` ${isDescriptionCollapsed ? 'hidden' : ''}`} aria-labelledby="accordion-open-heading-2">
                            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    {learningPathsCoursesData[0]?.learningPath?.description}
                                </p>

                            </div>
                        </div>



                        {/*Learning Path Section*/}
                        <h2 id="accordion-open-heading-3">
                            <button type="button"
                                    onClick={() => setLearningPathCollapsed(!isLearningPathCollapsed)}
                                    className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 ${isLearningPathCollapsed ? 'dark:bg-gray-800' : 'dark:bg-gray-700'} dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3`}
                                    data-accordion-target="#accordion-open-body-3" aria-expanded="false"
                                    aria-controls="accordion-open-body-3">
                                <span className="flex items-center"><svg className="w-5 h-5 me-2 shrink-0"
                                                                         fill="currentColor" viewBox="0 0 20 20"
                                                                         xmlns="http://www.w3.org/2000/svg"><path
                                    fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                    clip-rule="evenodd"></path></svg>Learning Path Breakdown:</span>
                                {isLearningPathCollapsed ? <FaCaretDown/> : <FaCaretUp/>}
                            </button>

                        </h2>
                        <div id="accordion-open-body-3" className={` ${isLearningPathCollapsed ? 'hidden' : ''}`} aria-labelledby="accordion-open-heading-3">
                            <div className="p-10  border border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-800" >
                                        <ol className="relative border-s border-gray-200 dark:border-gray-700">
                                            {learningPathsCoursesData.map((c) => (
                                                <li className="mb-10 ms-6" key={c.id}>
                                                    <span
                                                        className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-2 ring-white dark:ring-gray-100 dark:bg-primary-500">
                                                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-gray-100"
                                                             aria-hidden="true"
                                                             xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                             viewBox="0 0 20 20">
                                                            <path
                                                                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                                        </svg>
                                                    </span>
                                                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                                        {c.course.title}
                                                        <CourseStatusLearningPathBadge status={c.course.status}/>

                                                    </h3>
                                                    <time
                                                        className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                                        {"Learning Order: " + c.order}
                                                    </time>
                                                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                                        {c.course.description}
                                                    </p>


                                                    <div className='text-right mt-2.5'>
                                                        <CustomButton icon={FaMagnifyingGlass}
                                                                      buttonStyleType={"discard"}
                                                                      type={"button"}
                                                                      href={`/courses/${c.course.id}`}>Course Details
                                                        </CustomButton>
                                                    </div>
                                                </li>
                                            ))}
                                        </ol>

                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </>
    );
}
