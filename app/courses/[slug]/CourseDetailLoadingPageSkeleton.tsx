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
import {CourseDifficultyBadge, CourseStatusBadge, Skeleton} from "@/app/components";
import CoursePriorityBadge from "@/app/components/CoursePriorityBadge";
import delay from "delay";
import CustomButtonSkeleton from "@/app/components/buttons/CustomButtonSkeleton";


export default function CourseDetailLoadingPageSkeleton() {
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


    return (
        <>
            <div>

                <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    {/*// <!-- Modal header -->*/}
                    <div
                        className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            <Skeleton width={"8rem"}/>
                        </h3>

                        {/* Right-aligned actions */}
                        <div className="flex items-center space-x-2 ml-auto">
                            <CustomButtonSkeleton icon={FaRegEdit}
                                          buttonStyleType="primary"
                                          >
                                <Skeleton width={"3rem"}/>
                            </CustomButtonSkeleton>
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

                    <div className="grid gap-4 mb-4 p-4 rounded-2xl sm:grid-cols-3 bg-gray-50">

                        <img
                            className="row-span-2 col-span-1 rounded-lg object-cover w-full h-full"
                            src="/images/placeholder_image.png"
                            alt="Technology"
                        />


                        <h3 className="col-span-2 font-bold text-2xl text-gray-800">
                            <Skeleton/>
                        </h3>


                        <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 gap-2 font-semibold text-gray-800">
                            <p><Skeleton/></p>
                            <p><Skeleton/></p>
                            <p><Skeleton/></p>
                            <p><Skeleton/></p>
                            <p><Skeleton/></p>


                            <p><Skeleton/></p>
                            <p><Skeleton/></p>

                            <p className="col-span-full flex flex-wrap items-center">
                                <Skeleton/>
                            </p>
                            <p className="col-span-full flex flex-wrap items-center"><Skeleton/></p>

                        </div>


                        <div className="text-gray-800 col-span-4">
                            <p className="font-bold"><Skeleton width={"15rem"}/></p>
                            <p><Skeleton height={"5rem"}/></p>
                        </div>

                        <div className="text-gray-800 col-span-4">
                            <p className="font-bold"><Skeleton width={"15rem"}/></p>
                            <p><Skeleton height={"5rem"}/></p>
                        </div>


                        <div className="col-span-4 flex justify-end space-x-4 mt-4">

                            <CustomButtonSkeleton
                                icon={FaTrashCan}
                                buttonStyleType="danger">
                            </CustomButtonSkeleton>

                            <CustomButtonSkeleton
                                icon={FaSave}
                                buttonStyleType="primary"

                            >
                                Save Changes {isSubmitted && <Spinner/>}
                            </CustomButtonSkeleton>
                        </div>
                    </div>


                </div>


            </div>
        </>
    );
}
