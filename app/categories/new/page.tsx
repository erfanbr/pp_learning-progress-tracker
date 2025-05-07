'use client'
import Link from "next/link";
import React from "react";
import {FaSave} from "react-icons/fa";
import {MdCancel} from "react-icons/md";
import {useForm} from "react-hook-form";
import axios from 'axios';
import {useRouter} from "next/navigation";


interface CategoryFrom{
    title: string
}

export default function NewCategoryPage() {
    const {
        register,
        handleSubmit,
        formState: {errors, isValid}
    }= useForm<CategoryFrom>();
    const router = useRouter();

    return (
        <>
            <div>
                {/*<h1>Post: {myProp.params.slug}</h1>*/}
                {/*<div>{platform!.title}</div>*/}
                {/*<div>{platform!.id}</div>*/}


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
                            Add Category
                        </h3>
                        <Link
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            href="/categories/">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </Link>
                    </div>
                    {/*// <!-- Modal body -->*/}
                    <form onSubmit={handleSubmit(async (data)=> {
                        await axios.post('/api/categories', data);
                        router.push('/categories');
                    })}>
                        <div className="grid gap-4 mb-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="id"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID:</label>
                                <input type="text" name="id" id="id"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                       placeholder="ID generates automatically" disabled={true} readOnly={true}
                                       defaultValue=""/>
                            </div>

                            <div>
                                <label htmlFor="title"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title:</label>
                                <input type="text" id="title"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                       focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200
                                       dark:border-gray-100 dark:placeholder-gray-400 dark:text-zinc-700 dark:focus:ring-primary-500
                                       dark:focus:border-primary-500"
                                       {...register('title')}/>
                                {/*validation*/}
                                {/*<div>*/}
                                {/*    <p id="filled_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400">*/}
                                {/*        <span className="font-medium">Oh, snapp!</span> Some error message.</p>*/}
                                {/*</div>*/}
                            </div>


                        </div>

                        {/*TODO: Fix button style*/}
                        <div className="text-right">
                        <Link href="/categories/" className="px-5 py-2.5 mr-2.5  text-zinc-200 inline-flex items-center font-medium text-gray-900 focus:outline-none
                                    bg-white rounded-3xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700
                                    focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800
                                    dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                <MdCancel className="mr-1.5 -ml-1.5 w-5 h-5"/>Cancel
                            </Link>

                            <button className="px-5 py-2.5 text-zinc-200 inline-flex items-center hover:text-white border-2 border-zinc-200
                                    hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-3xl
                                    text-sm text-center dark:border-zinc-200 dark:text-zinc-200 dark:hover:text-white
                                     dark:bg-primary-500 dark:hover:bg-primary-600 dark:focus:ring-primary-700">
                                <FaSave className="mr-1.5 -ml-1.5 w-5 h-5"/>Add Category
                            </button>
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
