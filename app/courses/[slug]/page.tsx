import React from "react";
import {prisma} from "@/prisma/client";
import Link from "next/link";
import {FaTrashCan} from "react-icons/fa6";
import {FaSave} from "react-icons/fa";
import CustomButton from "@/app/components/buttons/CustomButton";
import {Status} from "../../generated/prisma/client";
import {statusMap} from "@/app/components/mappings/StatusMap";
import {difficultyMap} from "@/app/components/mappings/DifficultyMap";
import {priorityMap} from "@/app/components/mappings/PriorityMap";
import FormCheckBoxElement from "@/app/components/formInputs/FormCheckBoxElement";
import axios from "axios";
import {string} from "zod";
import {MdEditDocument} from "react-icons/md";
import FormInputFieldElement from "@/app/components/formInputs/FormInputFieldElement";
import FormInputDropDownElement from "@/app/components/formInputs/FormInputsDropdownElement";
import FormInputDropDownElementEnums from "@/app/components/formInputs/FormInputsDropdownElementEnums";


interface Props {
    params: { slug: string }
}


export default async function CourseDetailPage({params}: Props) {
    const apiURL = "http://localhost:3000/api/courses/" + params.slug;
    const response = await axios.get(apiURL);
    const course = response.data;
    // const course = await prisma.course.findUnique({
    //     where: {id: parseInt(myProp.params.slug)},
    //     include: {
    //         category: {
    //             select: {
    //                 title: true,
    //             },
    //         },
    //         technology: {
    //             select: {
    //                 id: true,
    //                 title: true,
    //             },
    //         },
    //     }
    // });
    const platforms = await prisma.platform.findMany();
    const categories = await prisma.category.findMany();
    const technologies = await prisma.technology.findMany();

    const currentTechnologies: number[] = [];
    course.technology.map((tech: { id: number; }) => (
        currentTechnologies.push(tech.id)
    ))


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
                            Course Details
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
                    <form action="#">
                        <div className="grid gap-4 mb-4 sm:grid-cols-4">
                            {/*<div>*/}
                            {/*    <label htmlFor="id"*/}
                            {/*           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID</label>*/}
                            {/*    <input type="text" name="id" id="id"*/}
                            {/*           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"*/}
                            {/*           placeholder="id goes here" disabled={true} readOnly={true}*/}
                            {/*           defaultValue={course!.id}/>*/}
                            {/*</div>*/}
                            {/*{course.map(c => (*/}
                            {/*    <div>{c.id}</div>*/}
                            {/*))}*/}


                            <FormInputFieldElement
                                title={"Title"}
                                id={"title"}
                                columnSize={"2"}
                                placeholder={`Course Title`}
                                defaultValue={course!.title}
                                isReadonly={true}
                                isDisabled={true}
                            />

                            <FormInputFieldElement
                                title={"Link"}
                                id={"link"}
                                columnSize={"2"}
                                placeholder={`Course Link`}
                                defaultValue={course!.link}
                                isReadonly={true}
                                isDisabled={true}
                            />

                            <FormInputDropDownElement title={'Platform'}
                                                      id={'platform'}
                                                      dataSource={platforms}
                                                      defaultValue={course!.platformId}
                                                      columnSize={'1'}
                                                      isDisabled={true}
                            />

                            <FormInputDropDownElementEnums title={'Status'}
                                                           id={'status'}
                                                           dataSource={statusMap}
                                                           defaultValue={course!.status}
                                                           columnSize={'1'}
                                                           isDisabled={true}
                            />

                            <FormInputDropDownElementEnums title={'Difficulty'}
                                                           id={'difficulty'}
                                                           dataSource={difficultyMap}
                                                           defaultValue={course!.difficulty}
                                                           columnSize={'1'}
                                                           isDisabled={true}
                            />


                            <FormInputDropDownElement title={'Category'}
                                                      id={'category'}
                                                      dataSource={categories}
                                                      defaultValue={course!.categoryId}
                                                      columnSize={'1'}
                                                      isDisabled={true}
                            />


                            <FormInputDropDownElementEnums title={'Priority'}
                                                           id={'priority'}
                                                           dataSource={priorityMap}
                                                           defaultValue={course!.priority}
                                                           columnSize={'1'}
                                                           isDisabled={true}
                            />

                            {/*TODO: format time nicer => based on timepicker from flowbite*/}
                            <FormInputFieldElement
                                title={"Duration (Hours)"}
                                id={"duration"}
                                type={'number'}
                                columnSize={"1"}
                                placeholder={'Total hours'}
                                defaultValue={85}
                                isDisabled={true}
                            />

                            <FormInputFieldElement
                                title={"Last Seen"}
                                id={"lastSeen"}
                                columnSize={"2"}
                                placeholder={'Last seen video / episode'}
                                defaultValue={course.lastSeen}
                                isDisabled={true}
                            />



                            {/*Multiple select area*/}
                            <div className={"col-span-4"}>
                                <label htmlFor="technologies"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Technologies
                                </label>

                                {/*{console.log(currentTechnologies)}*/}

                                {/*{course.technology.map(t => (*/}
                                {/*    console.log(t.title)*/}
                                {/*))};*/}

                                <div className="grid grid-cols-2 gap-2 px-4 md:px-2 md:grid-cols-4 col-span-4">
                                    {technologies.map(technology => (
                                        <FormCheckBoxElement title={technology.title}
                                                             key={technology.id}
                                                             id={technology.id}
                                                             isDisabled={true}
                                                             value={technology.id.toString()}
                                                             isCheck={currentTechnologies.includes(technology.id)}/>
                                    ))}


                                </div>
                            </div>


                            {/*Note Area*/}
                            <div className={"col-span-4"}>
                                <label htmlFor="note"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Notes</label>
                                <textarea id="note" rows={4}
                                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-zinc-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                          placeholder="Write your thoughts here..."></textarea>
                            </div>


                        </div>
                        <div className="text-right">
                            <CustomButton icon={MdEditDocument}
                                          href={`/courses/${params.slug}/edit`}
                                          buttonStyleType={'primary'}>
                                Edit Course
                            </CustomButton>
                        </div>
                    </form>
                </div>


                {/*<div id="defaultModal" tabIndex="-1" aria-hidden="true"*/}
                {/*     className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">*/}
                {/*    <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">*/}
                {/*        <!-- Modal content -->*/}

                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </>
    );
}
