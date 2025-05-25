'use client';
import React from "react";
import {statusMap} from "@/app/components/mappings/StatusMap";
import CustomButton from "@/app/components/buttons/CustomButton";
import {Fa0} from "react-icons/fa6";
import {FaSave} from "react-icons/fa";

interface Props {
    onFilterValueClick: (arg0: string) => void;

}

export default function CourseFilter({onFilterValueClick}: Props) {
    return (
        <>
            <div className={`col-span-2`}>


                <select
                    id={'filter-value'}
                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "dark:bg-gray-200 dark:border-gray-100 dark:text-zinc-700" dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                >
                    <option value="" onClick={()=> onFilterValueClick('')}>Select Filter</option>
                    {Object.entries(statusMap).map(([key, value]) => (
                        <option key={key} value={key} onClick={()=> onFilterValueClick(key)}>
                            {value.label}
                        </option>
                    ))}
                </select>

            </div>



            {/*<CustomButton icon={FaSave} onClick={() => onFilterValueClick('erfan')} type={"button"} buttonStyleType={"primary"}>Filter</CustomButton>*/}
            {/*<div className={"mb-3"}>*/}
            {/*    <select name="" id="" className="form-select">*/}
            {/*        <option key="all-categories" value="" onClick={() => onFilterValueClick('')}>All categories</option>*/}
            {/*        {Object.entries(statusMap).map(([key, value]) => (*/}
            {/*            <option key={key} value={key} onClick={() => onFilterValueClick(key)}>*/}
            {/*                {value.label}*/}
            {/*            </option>*/}
            {/*        ))}*/}
            {/*    </select>*/}
            {/*</div>*/}


            {/*<div>*/}
            {/*    <form className="max-w-sm ml-auto">*/}
            {/*        <div className="flex">*/}
            {/*<button id="filter-type-dropdown-button" data-dropdown-toggle="dropdown"*/}
            {/*        className="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"*/}
            {/*        type="button">Filter Type*/}
            {/*    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true"*/}
            {/*         xmlns="http://www.w3.org/2000/svg" fill="none"*/}
            {/*         viewBox="0 0 10 6">*/}
            {/*        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"*/}
            {/*              stroke-width="2"*/}
            {/*              d="m1 1 4 4 4-4"/>*/}
            {/*    </svg>*/}
            {/*</button>*/}
            {/*<div id="filter_type_dropdown"*/}
            {/*     className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">*/}
            {/*    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"*/}
            {/*        aria-labelledby="dropdown-button">*/}
            {/*        <li>*/}
            {/*            <button type="button"*/}
            {/*                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups*/}
            {/*            </button>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <button type="button"*/}
            {/*                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates*/}
            {/*            </button>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <button type="button"*/}
            {/*                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design*/}
            {/*            </button>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <button type="button"*/}
            {/*                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos*/}
            {/*            </button>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</div>*/}


            {/*<div className="relative w-full">*/}
            {/*    <button id="filter-value-dropdown-button" data-dropdown-toggle="dropdown"*/}
            {/*            className="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"*/}
            {/*            type="button">Filter Value*/}
            {/*        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true"*/}
            {/*             xmlns="http://www.w3.org/2000/svg" fill="none"*/}
            {/*             viewBox="0 0 10 6">*/}
            {/*            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"*/}
            {/*                  stroke-width="2"*/}
            {/*                  d="m1 1 4 4 4-4"/>*/}
            {/*        </svg>*/}
            {/*    </button>*/}
            {/*    <div id="filter_type_dropdown"*/}
            {/*         className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">*/}
            {/*        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"*/}
            {/*            aria-labelledby="dropdown-button">*/}

            {/*            /!*{Object.entries(statusMap).map(([key, value]) => (*!/*/}
            {/*            /!*    <li key={key}>*!/*/}
            {/*            /!*        <button type="button"*!/*/}
            {/*            /!*                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{value}*!/*/}
            {/*            /!*        </button>*!/*/}
            {/*            /!*    </li>*!/*/}
            {/*            /!*))}*!/*/}


            {/*            <li>*/}
            {/*                <button type="button"*/}
            {/*                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups*/}
            {/*                </button>*/}
            {/*            </li>*/}


            {/*            <li>*/}
            {/*                <button type="button"*/}
            {/*                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates*/}
            {/*                </button>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                <button type="button"*/}
            {/*                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design*/}
            {/*                </button>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                <button type="button"*/}
            {/*                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos*/}
            {/*                </button>*/}
            {/*            </li>*/}
            {/*        </ul>*/}
            {/*    </div>*/}


            {/*<input type="search" id="search-dropdown"*/}
            {/*       className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"*/}
            {/*       placeholder="Filter value" required/>*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*</form>*/}
            {/*</div>*/}
        </>
    );
}
