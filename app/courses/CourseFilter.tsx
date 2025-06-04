'use client';
import React, {useState} from "react";
import {statusMap} from "@/app/components/mappings/StatusMap";


interface Props {
    dataSource: { id: number; title: string }[],
    onFilterValueClick: (arg0: string) => void,
    onStatusValueClick: (arg0: string) => void,

}

export default function CourseFilter({onFilterValueClick, onStatusValueClick, dataSource}: Props) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
        <>
            <div className={`col-span-2`}>


                {/*Status Filter version*/}

                <div className="">
                    <h2 id="accordion-collapse-heading-2">
                        <button type="button" onClick={() => setIsCollapsed(!isCollapsed)}
                                className="flex items-center pt-2 justify-between w-full font-medium rtl:text-right text-gray-500 pb-4 mb-4 rounded-t border-b sm:mb-5  border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                data-accordion-target="#accordion-collapse-body-2" aria-expanded="false"
                                aria-controls="accordion-collapse-body-2">
                            <span>Status</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M9 5 5 1 1 5"/>
                            </svg>
                        </button>
                    </h2>

                    <div id="accordion-collapse-body-2" className={` ${isCollapsed ? 'hidden' : ''}`}
                         aria-labelledby="accordion-collapse-heading-2">

                        <fieldset className="flex flex-wrap gap-4">
                            <legend className="sr-only">Status</legend>

                            {Object.entries(statusMap).map(([key, value]) => (
                                <div key={key} className="flex items-center mb-4">
                                    <input id={key}
                                           value={key}
                                           type="radio"
                                           name="statuses"
                                           className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                           onClick={()=> onStatusValueClick(key)}/>
                                    <label htmlFor="key"
                                           className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        {value.label}
                                    </label>
                                </div>
                            ))}
                        </fieldset>
                    </div>
                </div>

                <div className="grid gap-4 mb-4 sm:grid-cols-4">


                    {/*/!*Filter Platform*!/*/}
                    <div className="col-span-1">
                        <select
                            id={'filter-value'}
                            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "dark:bg-gray-200 dark:border-gray-100 dark:text-zinc-700" dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                        >
                            <option value="" onClick={() => onFilterValueClick('')}>Select Filter</option>
                            {dataSource.map((d) => (
                                <option key={d.id} value={d.id} onClick={() => onFilterValueClick(d.id.toString())}>
                                    {d.title}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div
                    className="col-span-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Erfan test
                    </h3>
                </div>

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
