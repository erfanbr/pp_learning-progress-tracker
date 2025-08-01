'use client'
import React, {useEffect, useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {createCourseSchema, createLearningPathSchema} from "@/app/validationSchema";
import {useRouter} from "next/navigation";
import {prisma} from "@/prisma/client";
import Link from "next/link";
import FormInputFieldElement from "@/app/components/formInputs/FormInputFieldElement";
import {statusMap} from "@/app/components/mappings/StatusMap";
import {difficultyMap} from "@/app/components/mappings/DifficultyMap";
import {priorityMap} from "@/app/components/mappings/PriorityMap";
import CustomButton from "@/app/components/buttons/CustomButton";
import {FaInfo, FaTrashCan} from "react-icons/fa6";
import {FaMinus, FaPlus, FaSave} from "react-icons/fa";
import {z} from "zod";
import FormCheckBoxElement from "@/app/components/formInputs/FormCheckBoxElement";
import axios from "axios";
import {MdCancel} from "react-icons/md";
import FormInputDropDownElement from "@/app/components/formInputs/FormInputsDropdownElement";
import FormInputDropDownElementEnums from "@/app/components/formInputs/FormInputsDropdownElementEnums";
import LearningPathDropDown from "@/app/components/formInputs/LearningPathCourseDropDown";
import {IoMdAddCircle} from "react-icons/io";
import ErrorModal from "@/app/components/Modal/ErrorModal";

type LearningPath = z.infer<typeof createLearningPathSchema>;

interface Props {
    coursesData: { id: number; title: string }[],
}

export default function NewLearningPathForm({coursesData}: Props) {
    const [numberOfCourses, setNumberOfCourses] = useState(2);

    const {
        register,
        handleSubmit,
        control,
        watch,
        getValues,
        formState: {errors},
        setValue
    } = useForm<LearningPath>({
        defaultValues: {
            title: "",
            description: "",
            // courses: Array(numberOfCourses).fill(''),
            courses: Array.from({ length: numberOfCourses }, () => '')

        },
        resolver: zodResolver(createLearningPathSchema),
    });


    // const {
    //     register,
    //     handleSubmit,
    //     formState: {errors}
    // } = useForm<LearningPath>({resolver: zodResolver(createLearningPathSchema)});

    const router = useRouter();
    const [error, setError] = useState('');
    const [isSubmitted, setSubmitted] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);



    const allOptions = coursesData.map(c => ({
        id: c.id.toString(),
        title: c.title
    }));

    const watchedCourses = watch('courses') || [];
    const courses = watchedCourses.filter(f => f);


    useEffect(() => {
        const current = watch('courses') || [];
        const newValues = [...current];

        while (newValues.length < numberOfCourses) newValues.push('');
        while (newValues.length > numberOfCourses) newValues.pop();

        setValue('courses', newValues);
    }, [numberOfCourses]);


    const getFilteredOptions = (index: number, currentValue: string) => {
        const selectedIds = watchedCourses.filter((_, i) => i !== index); // exclude current index
        return allOptions.filter(
            (opt) => !selectedIds.includes(opt.id.toString()) || opt.id.toString() === currentValue
        );
    };

    const onFormSubmit = handleSubmit(async (data) => {
        // Adding orderId to courses
        const transformedCourses = data.courses.map((courseId: string, index: number) => ({
            courseId: parseInt(courseId),
            order: index + 1,
        }));

        const finalData = {
            title: data.title,
            description: data.description,
            courses: transformedCourses
        }

        const url: string = 'http://localhost:3000/api/learning_paths_courses';
        try {
            setSubmitted(true);
            await axios.post(url, finalData);
            router.push(`/learning_paths`);

        } catch (error) {
            setShowErrorModal(true);
            setSubmitted(false);
            setError('Unexpected error has happened');
        }
    },
    (errors) => {
        console.log("Form validation errors", errors); // 👈 log this
    }
    );




    return (
        <>
            <div>
                <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    {/*// <!-- Modal header -->*/}
                    <div
                        className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Add a Learning Path
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
                    <form onSubmit={onFormSubmit}>
                        <div className="grid gap-4 mb-4 sm:grid-cols-4">

                            <FormInputFieldElement
                                title={"Title"}
                                id={"title"}
                                columnSize={"4"}
                                defaultValue={""}
                                placeholder={`Learning Path Title`}
                                register={register('title')}
                                error={errors.title?.message}
                            />


                            {/*Description Area*/}
                            <div className={"col-span-4"}>
                                <label htmlFor="description"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea id="description" rows={4} {...register('description')}
                                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-zinc-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                          placeholder="Write your thoughts here..."></textarea>
                                <div>
                                    {errors.description?.message &&
                                        <p className="text-red-500 text-sm mt-1">{errors.description?.message}</p>}
                                </div>
                            </div>


                            {/*TODO: Find a way to fix validation issue on newly added courses. Validation works only on existing ones*/}
                            {[...Array(numberOfCourses)].map((_, i) => (
                                <LearningPathDropDown
                                    key={i}
                                    index={i}
                                    control={control}
                                    isRequired={false}
                                    error={errors.courses?.[i]?.message}
                                    getFilteredOptions={getFilteredOptions}
                                />
                            ))}
                            <div>
                                {errors.courses?.message &&
                                    <p className="text-red-500 text-sm mt-1">{errors.courses?.message}</p>}
                            </div>


                            <div className={"col-span-4"}>
                                <CustomButton icon={FaPlus}
                                              type={"button"}
                                              buttonStyleType={"discard"}
                                              onClick={() => setNumberOfCourses(numberOfCourses + 1)}>
                                    Add More
                                </CustomButton>


                                <CustomButton icon={FaMinus}
                                              type={"button"}
                                              buttonStyleType={"discard"}
                                              onClick={() => setNumberOfCourses(numberOfCourses - 1)}>
                                    Remove More
                                </CustomButton>
                            </div>


                        </div>

                        <div className="text-right">
                            <CustomButton href="/learning_paths/" icon={MdCancel}
                                          buttonStyleType={'discard'}>Cancel</CustomButton>
                            <CustomButton icon={IoMdAddCircle} buttonStyleType={'primary'} type={'submit'}>Add
                                Learning Path</CustomButton>
                        </div>
                    </form>

                    <ErrorModal
                        isOpen={showErrorModal}
                        title={"Error!"}
                        message={"Unexpected error has happened!"}
                        onConfirm={() => setShowErrorModal(false)}
                    />

                </div>

            </div>

        </>
    )
        ;
}
