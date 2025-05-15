import React from "react";
import Link from "next/link";
import CustomButton from "@/app/components/CustomButton";
import {FaTrashCan} from "react-icons/fa6";
import {FaEdit, FaSave} from "react-icons/fa";
import {prisma} from "@/prisma/client";
import FormInputFieldElement from "@/app/components/FormInputFieldElement";
import { MdEditDocument } from "react-icons/md";
import axios from "axios";
import {z} from "zod";
import {createPlatformSchema} from "@/app/validationSchema";
import {useRouter} from "next/navigation";

interface Props {
    pageHeader: string,
    id: string,
    backURL: string,
    params: { slug: string }
}

type PlatformForm = z.infer<typeof createPlatformSchema>

export default async function SimpleDetailPage({pageHeader, id, backURL, params}: Props) {
    const platform = await prisma.platform.findUnique({
        where: {id: parseInt(params.slug)}
    })

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
                            {pageHeader} Detail
                        </h3>
                        <Link
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            href={backURL}>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </Link>
                    </div>
                    {/*// <!-- Modal body -->*/}
                    <form>
                        <div className="grid gap-4 mb-4 sm:grid-cols-2">
                            {/*<div>*/}
                            {/*    <label htmlFor="id"*/}
                            {/*           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID:</label>*/}
                            {/*    <input type="text" name="id" id="id"*/}
                            {/*           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"*/}
                            {/*           placeholder="id goes here" disabled={true} readOnly={true}*/}
                            {/*           defaultValue={platform!.id}/>*/}
                            {/*</div>*/}
                            <FormInputFieldElement title={'Title'} id={'title'} defaultValue={platform!.id.toString()} columnSize={'1'}
                                                   isDisabled={true} isReadonly={true} />
                            {/*<div>*/}
                            {/*    <label htmlFor="title"*/}
                            {/*           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title:</label>*/}
                            {/*    <input type="text" name="title" id="title"*/}
                            {/*           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-zinc-700 dark:focus:ring-primary-500 dark:focus:border-primary-500"*/}
                            {/*           placeholder="Product brand" required={true} value={platform!.title}/>*/}
                            {/*</div>*/}
                            <FormInputFieldElement title={'Title'} id={'title'} defaultValue={platform!.title}
                                                   columnSize={'1'} isDisabled={true} isReadonly={true} />
                        </div>
                        <div className="text-right">

                            <CustomButton icon={MdEditDocument} buttonType={'primary'}
                                          // href={`/${pageHeader.toLowerCase()}/${params.slug}/edit`}>Edit {id}</CustomButton>
                                          href={`/${pageHeader.toLowerCase()}/${params.slug}/edit`}>Edit {id}</CustomButton>

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
