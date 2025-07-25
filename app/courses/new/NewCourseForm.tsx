'use client'
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {createCourseSchema} from "@/app/validationSchema";
import {useRouter} from "next/navigation";
import {prisma} from "@/prisma/client";
import Link from "next/link";
import FormInputFieldElement from "@/app/components/formInputs/FormInputFieldElement";
import {statusMap} from "@/app/components/mappings/StatusMap";
import {difficultyMap} from "@/app/components/mappings/DifficultyMap";
import {priorityMap} from "@/app/components/mappings/PriorityMap";
import CustomButton from "@/app/components/buttons/CustomButton";
import {FaTrashCan} from "react-icons/fa6";
import {FaSave} from "react-icons/fa";
import {z} from "zod";
import FormCheckBoxElement from "@/app/components/formInputs/FormCheckBoxElement";
import axios from "axios";
import {MdCancel} from "react-icons/md";
import FormInputDropDownElement from "@/app/components/formInputs/FormInputsDropdownElement";
import FormInputDropDownElementEnums from "@/app/components/formInputs/FormInputsDropdownElementEnums";
import FormInputTextAreaElement from "@/app/components/formInputs/FormInputTextAreaElement";

type CourseTechnology = z.infer<typeof createCourseSchema>;

interface Props {
    platformsData: { id: number; title: string }[],
    categoriesData: { id: number; title: string }[],
    technologiesData: { id: number; title: string }[],
}
// TODO: Add Error Modal to Course, Technology etc pages. For edit and add (similar to learning paths)

export default function NewCourseForm({platformsData, categoriesData, technologiesData}: Props) {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<CourseTechnology>({resolver: zodResolver(createCourseSchema)});
    const router = useRouter();
    const [error, setError] = useState('');
    const [isSubmitted, setSubmitted] = useState(false);


    const onFormSubmit = handleSubmit(async (data) => {

        // add id to technology array so it works on Many 2 Many
        const transformed = {
            ...data,
            technology: data.technology.map((id: string) => ({id: Number(id)}))
        };
        console.log(transformed);
        const url: string = 'http://localhost:3000/api/courses';
        try {
            setSubmitted(true);
            await axios.post(url, transformed);
            router.push(`/courses`);
            router.refresh();
        } catch (error) {
            setSubmitted(false);
            setError('Unexpected error has happened');
        }
    });


    const platforms = platformsData;
    const categories = categoriesData;
    const technologies = technologiesData;

    return (
        <>
            <div>
                {/*<h1>Post: {myProp.params.slug}</h1>*/}
                {/*<div>{course!.title}</div>*/}
                {/*<div>{course!.id}</div>*/}


                {/*<div className="flex justify-center m-5">*/}
                {/*    <button id="defaultModalButton" data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button">*/}
                {/*        Create product*/}
                {/*    </button>*/}
                {/*</div>*/}

                <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    {/*// <!-- Modal header -->*/}
                    <div
                        className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Add a Course
                        </h3>
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
                    {/*// <!-- Modal body -->*/}
                    <form onSubmit={onFormSubmit}>
                        <div className="grid gap-4 mb-4 sm:grid-cols-4">


                            <FormInputFieldElement
                                title={"Title"}
                                id={"title"}
                                columnSize={"2"}
                                placeholder={`Course Title`}
                                defaultValue={""}
                                register={register('title')}
                                error={errors.title?.message}
                            />

                            <FormInputFieldElement
                                title={"Link"}
                                id={"link"}
                                columnSize={"2"}
                                placeholder={'URL to course content'}
                                defaultValue={""}
                                register={register('link')}
                                error={errors.link?.message}
                            />


                            <FormInputDropDownElement title={'Platform'}
                                                      id={'platform'}
                                                      dataSource={platforms}
                                                      columnSize={'1'}
                                                      register={register('platformId', {valueAsNumber: true})}
                                                      error={errors.platformId?.message}
                            />


                            <FormInputDropDownElementEnums title={'Status'}
                                                      id={'status'}
                                                      dataSource={statusMap}
                                                      columnSize={'1'}
                                                      register={register('status')}
                                                      error={errors.status?.message}
                            />

                            <FormInputDropDownElementEnums title={'Difficulty'}
                                                           id={'difficulty'}
                                                           dataSource={difficultyMap}
                                                           columnSize={'1'}
                                                           register={register('difficulty')}
                                                           error={errors.difficulty?.message}
                            />


                            <FormInputDropDownElement title={'Category'}
                                                      id={'category'}
                                                      dataSource={categories}
                                                      columnSize={'1'}
                                                      register={register('categoryId', {valueAsNumber: true})}
                                                      error={errors.categoryId?.message}
                            />

                            <FormInputDropDownElementEnums title={'Priority'}
                                                           id={'priority'}
                                                           dataSource={priorityMap}
                                                           columnSize={'1'}
                                                           register={register('priority')}
                                                           error={errors.priority?.message}
                            />


                            {/*TODO: format time nicer => based on timepicker from flowbite*/}
                            {/*<div>*/}
                            {/*    <label htmlFor="duration"*/}
                            {/*           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Duration</label>*/}
                            {/*    <input type="number" value="399"  id="duration" {...register('duration')}*/}
                            {/*           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-zinc-700 dark:focus:ring-primary-500 dark:focus:border-primary-500"*/}
                            {/*           placeholder="$299"/>*/}
                            {/*</div>*/}
                            <FormInputFieldElement
                                title={"Duration (Hours)"}
                                id={"duration"}
                                type={'number'}
                                columnSize={"1"}
                                placeholder={'Total hours'}
                                defaultValue={""}
                                register={register('duration', {valueAsNumber: true})}
                                error={errors.duration?.message}
                            />

                            <FormInputFieldElement
                                title={"Last Seen"}
                                id={"lastSeen"}
                                columnSize={"2"}
                                placeholder={'Last seen video / episode'}
                                defaultValue={""}
                                register={register('lastSeen')}
                                error={errors.lastSeen?.message}
                            />


                            {/*Multiple select area*/}
                            <div className={"col-span-4"}>
                                <label htmlFor="technologies"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Technologies
                                </label>

                                <div className="grid grid-cols-2 gap-2 px-4 md:px-2 md:grid-cols-4 col-span-4">
                                    {technologies.map(technology => (
                                        <FormCheckBoxElement
                                            title={technology.title}
                                            key={technology.id}
                                            id={technology.id}
                                            value={technology.id.toString()}
                                            register={register('technology')}/>
                                    ))}
                                </div>

                                {errors.technology?.message && (
                                    <p className="text-red-500 text-sm mt-1">{errors.technology.message}</p>
                                )}
                            </div>

                            {/*Description Area*/}
                            <FormInputTextAreaElement
                                title={"Description"}
                                id={'description'}
                                defaultValue={""}
                                placeholderText={"Briefly write what the course is about"}
                                register={register('description')}
                                isDisabled={false}
                                columnSize={"4"}
                                textHeight={2}
                                error={errors.description?.message}
                            />


                            {/*Note Area*/}
                            <FormInputTextAreaElement
                                title={"Notes"}
                                id={'note'}
                                defaultValue={""}
                                placeholderText={"Write your notes here..."}
                                register={register('note')}
                                isDisabled={false}
                                columnSize={"4"}
                                textHeight={4}
                                error={errors.note?.message}
                            />
                        </div>

                        <div className="text-right">
                            <CustomButton href="/courses/" icon={MdCancel}
                                          buttonStyleType={'discard'}>Cancel</CustomButton>
                            <CustomButton type="submit" icon={FaSave} buttonStyleType={'primary'}>Add
                                Course</CustomButton>
                        </div>
                    </form>
                </div>


                {/*<div id="defaultModal" tabIndex="-1" aria-hidden="true"*/
                }
                {/*     className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">*/
                }
                {/*    <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">*/
                }
                {/*        <!-- Modal content -->*/
                }

                {/*    </div>*/
                }
                {/*</div>*/
                }
            </div>
        </>
    )
        ;
}
