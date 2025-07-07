'use client'

import Link from "next/link";
import FormInputFieldElement from "@/app/components/formInputs/FormInputFieldElement";
import FormInputDropDownElement from "@/app/components/formInputs/FormInputsDropdownElement";
import FormInputDropDownElementEnums from "@/app/components/formInputs/FormInputsDropdownElementEnums";
import {statusMap} from "@/app/components/mappings/StatusMap";
import {difficultyMap} from "@/app/components/mappings/DifficultyMap";
import {priorityMap} from "@/app/components/mappings/PriorityMap";
import FormCheckBoxElement from "@/app/components/formInputs/FormCheckBoxElement";
import CustomButton from "@/app/components/buttons/CustomButton";
import {MdCancel} from "react-icons/md";
import {FaRegEdit, FaSave} from "react-icons/fa";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {createCourseSchema} from "@/app/validationSchema";
import {useRouter} from "next/navigation";
import axios from "axios";
import {z} from "zod";
import ConfirmModal from "@/app/components/Modal/ConfirmModal";
import Spinner from "@/app/components/Spinner";
import {FaTrashCan} from "react-icons/fa6";
import {CourseDifficultyBadge, CourseStatusBadge} from "@/app/components";
import CoursePriorityBadge from "@/app/components/CoursePriorityBadge";
import delay from "delay";


type CourseTechnology = z.infer<typeof createCourseSchema>;

interface Props {
    id: string,
    platformsData: { id: number; title: string }[],
    categoriesData: { id: number; title: string }[],
    technologiesData: { id: number; title: string }[],
    currentTechnologiesId: number[],
    courseData: CourseTechnology,
}

export default function CourseDetailPageForm({
                                                 id,
                                                 platformsData,
                                                 categoriesData,
                                                 technologiesData,
                                                 currentTechnologiesId,
                                                 courseData
                                             }: Props) {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<CourseTechnology>({resolver: zodResolver(createCourseSchema)});
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState('');
    const [isSubmitted, setSubmitted] = useState(false);
    const [isDeleted, setDeleted] = useState(false);


    const onFormSubmit = handleSubmit(async (data) => {

        console.log(id);
        // add id to technology array so it works on Many 2 Many
        const transformed = {
            ...data,
            technology: data.technology.map((id: string) => ({id: Number(id)}))
        };
        console.log(transformed);
        const url: string = `http://localhost:3000/api/courses/${id}`;

        try {
            setSubmitted(true);
            await axios.put(url, transformed);
            router.push(`/courses`);
        } catch (error) {
            setSubmitted(false);
            setError('Unexpected error has happened');
        }
    });

    const handleDelete = async () => {
        setShowModal(true);
    };

    const confirmDelete = async () => {
        const url = `http://localhost:3000/api/courses/${id}`;
        try {
            setDeleted(true);
            await axios.delete(url);
            router.push(`/courses`);
            router.refresh();
        } catch (error) {
            setDeleted(false);
            setError('An unexpected error has happened!');
        } finally {
            setShowModal(false);
        }
    };

    const platforms = platformsData;
    const categories = categoriesData;
    const technologies = technologiesData;

    return (
        <>
            <div>
                {/*{delay(500000)}*/}
                <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    {/*// <!-- Modal header -->*/}
                    <div
                        className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Course Details
                        </h3>

                        {/* Right-aligned actions */}
                        <div className="flex items-center space-x-2 ml-auto">
                            <CustomButton icon={FaRegEdit}
                                          type="button"
                                          buttonStyleType="primary"
                                          href={`/courses/${id}/edit`}>
                                Edit
                            </CustomButton>
                            <Link
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                href="/courses/">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clipRule="evenodd"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    {/*// <!-- Modal body -->*/}
                    <form onSubmit={onFormSubmit}>
                        <div className="grid gap-4 mb-4 p-4 rounded-2xl sm:grid-cols-3 bg-gray-50">

                            <img
                                className="row-span-2 col-span-1 rounded-lg object-cover w-full h-full"
                                src="/images/placeholder_image.png"
                                alt="Technology"
                            />


                            <h3 className="col-span-2 font-bold text-2xl text-gray-800">
                                {courseData.title}
                            </h3>


                            <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 gap-2 font-semibold text-gray-800">
                                <p>Status: <span className="font-light text-gray-500"><CourseStatusBadge status={courseData.status}/>    </span></p>
                                <p>Difficulty: <span className="font-light text-gray-500"><CourseDifficultyBadge difficulty={courseData.difficulty}/> </span></p>
                                <p>Category: <span className="font-light text-gray-500">{courseData.category!.title}</span></p>
                                <p>Platform: <span className="font-light text-gray-500">{platformsData[courseData.platformId].title}</span></p>
                                <p>Priority: <span className="font-light text-gray-500"> <CoursePriorityBadge priority={courseData.priority} /></span></p>


                                <p>Last Seen: <span className="font-light text-gray-500">{"E" + courseData.lastSeen}</span></p>
                                <p>Duration: <span className="font-light text-gray-500">{courseData.duration}  hours </span></p>

                                <p className="col-span-full flex flex-wrap items-center">
                                    <span className="font-bold mr-2">Technologies:</span>
                                    {courseData.technology.map(t => (
                                        <span
                                            key={t.id}
                                            className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 mb-1 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300"
                                        >
                                            {t.title}
                                    </span>
                                    ))}
                                </p>
                                <p className="col-span-full flex flex-wrap items-center">Link: <span className="font-light text-gray-500 ml-1">{ courseData.link}</span></p>
                            </div>



                            <div className="text-gray-800 col-span-4">
                                <p className="font-bold">Description:</p>
                                <p>{courseData.description}</p>
                            </div>

                            <div className="text-gray-800 col-span-4">
                                <p className="font-bold">Notes:</p>
                                <p>{courseData.note}</p>
                            </div>



                            <div className="col-span-4 flex justify-end space-x-4 mt-4">
                                <CustomButton
                                    icon={FaTrashCan}
                                    type="button"
                                    buttonStyleType="danger"
                                    onClick={handleDelete}
                                    isDisabled={isDeleted}
                                >
                                    Delete {isDeleted && <Spinner />}
                                </CustomButton>

                                <CustomButton
                                    icon={FaSave}
                                    buttonStyleType="primary"
                                    isDisabled={isSubmitted}
                                >
                                    Save Changes {isSubmitted && <Spinner />}
                                </CustomButton>
                            </div>
                        </div>


                    </form>

                    <ConfirmModal
                        isOpen={showModal}
                        title="Confirm Deletion"
                        message={`Are you sure you want to delete --> ID: ${id}, Title: ${courseData.title}? `}
                        onConfirm={confirmDelete}
                        onCancel={() => setShowModal(false)}
                    />
                </div>


            </div>
        </>
    );
}
