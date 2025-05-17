import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import React from "react";
import CustomButton from "@/app/components/buttons/CustomButton";
import {IoAddCircleSharp} from "react-icons/io5";

interface Props{
    pageHeader : string,
    numberOfTableColumns: number,
    numberOfTableRows: number,
}

export default function SimpleDetailsLoadingPage( {pageHeader, numberOfTableColumns, numberOfTableRows}: Props) {
    function createArray(size: number): number[] {
        return Array.from({ length: size }, (_, i) => i);
    }

    const headerArray = createArray(numberOfTableColumns);
    const dataArray = createArray(numberOfTableRows);
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                <div
                    className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {pageHeader}s
                    </h3>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {headerArray.map(arr =>(
                            <th scope="col" key={arr} className="px-6 py-3">
                                <div className="flex">
                                    <Skeleton/>
                                </div>
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {dataArray.map((course) => (
                        <tr key={course}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                            {headerArray.map(arr => (
                                <th key={arr} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <Skeleton />
                                </th>
                            ))}

                            {/*{headerArray.map(arr => (*/}
                            {/*    <td className="px-6 py-4" key={arr}><Skeleton/></td>*/}
                            {/*))}*/}
                        </tr>

                    ))}
                    </tbody>
                </table>
                <div className="text-right py-5">
                    <CustomButton href="/courses/new" icon={IoAddCircleSharp} buttonStyleType={"primary"}>
                        Add {pageHeader}
                    </CustomButton>
                </div>
            </div>
        </>
    );
}
