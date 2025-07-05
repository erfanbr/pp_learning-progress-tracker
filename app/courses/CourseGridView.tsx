import React from "react";
import {CourseDifficultyBadge, CourseStatusBadge, TableHeadWithSorting} from "@/app/components";
import Link from "next/link";
import CustomButton from "../components/buttons/CustomButton";
import {FaMagnifyingGlass} from "react-icons/fa6";
import {FaInfoCircle} from "react-icons/fa";

interface Props<T extends string> {
    sortMethod: string,
    sortBy: string,
    sortedPlatforms: T
}

export default function CourseGridView({sortMethod, sortBy, sortedPlatforms}: Props<any>) {
    const coursesLength: number[] = Array(3).fill(0);

    return (
        <>
            {/*TODO: improve layout and image size*/}
            {sortedPlatforms.map(course => (
                <div key={course.id}
                     className="w-full flex flex-col mb-5 items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row dark:border-gray-700 dark:bg-gray-900"
                >
                    <img
                        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-80 md:rounded-none md:rounded-s-lg"
                        src="/images/placeholder_image.png"
                        alt="Technology"
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal w-full">

                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
                            {course.title}
                            <span className={"p-4"}>
                                <CourseStatusBadge status={course.status}/>
                            </span>

                        </h5>
                        <p className={"mb-1 font-light dark:text-gray-500 text-sm "}>
                            {"Last seen: Episode " + course.lastSeen}
                        </p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-hidden text-ellipsis line-clamp-2">
                            {course.description}
                        </p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Technologies:
                            {course.technology.map(t => (
                                <span key={t.id}
                                      className={"bg-gray-100 text-gray-800 text-xs font-medium ml-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300"}>
                                    {t.title}
                                </span>
                            ))}
                        </p>


                        <div className='text-right'>
                            <CustomButton icon={FaInfoCircle}
                                          buttonStyleType={"primary_xs"}
                                          type={"button"}
                                          href={`/courses/${course.id}`}>Course Details
                            </CustomButton>
                        </div>
                    </div>
                </div>
            ))}

        </>
    );
}
