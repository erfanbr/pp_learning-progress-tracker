import React from "react";
import {prisma} from "@/prisma/client";
import Link from "next/link";
import {FaTrashCan} from "react-icons/fa6";
import {FaSave} from "react-icons/fa";
import CustomButton from "@/app/components/CustomButton";
import {Status} from "../../generated/prisma/client";
import {statusMap} from "@/app/components/StatusMap";
import {difficultyMap} from "@/app/components/DifficultyMap";
import {PriorityMap} from "@/app/components/PriorityMap";
import CheckBoxElement from "@/app/components/CheckBoxElement";


interface Props {
    params: { slug: string }
}


export default async function CourseEditPage(myProp: Props) {
    const course = await prisma.course.findUnique({
        where: {id: parseInt(myProp.params.slug)}
    })
    const platforms = await prisma.platform.findMany();
    const categories = await prisma.category.findMany();
    const technologies = await prisma.technology.findMany()


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
                            Edit Course
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
                            <div className={"col-span-2"}>
                                <label htmlFor="title"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                <input type="text" name="title" id="title"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-zinc-700 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                       placeholder="Product brand" required={true} value={course!.title}/>
                            </div>
                            <div className={"col-span-2"}>
                                <label htmlFor="link"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link</label>
                                <input type="text" name="link" id="link"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-zinc-700 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                       placeholder="Product brand" required={true}/>
                            </div>
                            <div>
                                <label htmlFor="platform"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Platform</label>
                                <select id="platform"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-zinc-700 dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    {platforms.map((platform) => (
                                        <option key={platform.id} value={platform.id}
                                                selected={course!.platformId === platform.id}>
                                            {platform.title}
                                        </option>
                                    ))};
                                </select>
                            </div>

                            <div>
                                <label htmlFor="status"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                                <select id="platform"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-zinc-700 dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    {Object.entries(statusMap).map(([key, value]) => (
                                        <option key={key} value={key} selected={course!.status === key && true}>
                                            {value.label}
                                        </option>
                                    ))};
                                </select>
                            </div>

                            <div>
                                <label htmlFor="difficulty"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Difficulty</label>
                                <select id="difficulty"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-zinc-700 dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    {Object.entries(difficultyMap).map(([key, value]) => (
                                        <option key={key} value={key} selected={course!.difficulty === key && true}>
                                            {value.label}
                                        </option>
                                    ))};
                                </select>
                            </div>

                            <div>
                                <label htmlFor="cateogry"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                <select id="cateogry"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-zinc-700 dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    {categories.map((category) => (
                                        <option key={category.id} value={category.id}
                                                selected={course!.categoryId === category.id}>
                                            {category.title}
                                        </option>
                                    ))};
                                </select>
                            </div>

                            <div>
                                <label htmlFor="priority"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Priority</label>
                                <select id="priority"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-zinc-700 dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    {Object.entries(PriorityMap).map(([key, value]) => (
                                        <option key={key} value={key} selected={course!.priority === key && true}>
                                            {value.label}
                                        </option>
                                    ))};
                                </select>
                            </div>

                            {/*Multiple select*/}
                            {/*<div>*/}
                            {/*    <label htmlFor="technologies"*/}
                            {/*           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Technologies*/}
                            {/*        (more than one can be selected)</label>*/}
                            {/*    <select multiple id="technologies"*/}
                            {/*            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-zinc-700 dark:focus:ring-blue-500 dark:focus:border-blue-500">*/}
                            {/*        <option selected>Choose a country</option>*/}
                            {/*        <option value="US">United States</option>*/}
                            {/*        <option value="CA">Canada</option>*/}
                            {/*        <option value="FR">France</option>*/}
                            {/*        <option value="DE">Germany</option>*/}
                            {/*    </select>*/}
                            {/*</div>*/}

                            {/*TODO: format time nicer => based on timepicker from flowbite*/}
                            <div>
                                <label htmlFor="duration"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Duration</label>
                                <input type="number" value="399" name="price" id="price"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-zinc-700 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                       placeholder="$299"/>
                            </div>

                            <div className={"col-span-2"}>
                                <label htmlFor="lastSeen"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                                    Seen</label>
                                <input type="text" name="lastSeen" id="lastSeen"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-zinc-700 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                       placeholder="Product brand" required={true}/>
                            </div>



                            {/*Multiple select area*/}
                            <div className={"col-span-4"}>
                                <label htmlFor="technologies"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Technologies
                                </label>

                                <div className="grid grid-cols-2 gap-2 px-4 md:px-2 md:grid-cols-4 col-span-4">
                                    {technologies.map(technology => (
                                        <CheckBoxElement title={technology.title} key={technology.id}/>
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
                            <CustomButton icon={FaTrashCan} buttonType={'danger'}>Delete</CustomButton>
                            <CustomButton icon={FaSave} buttonType={'primary'}>Save Changes</CustomButton>
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
