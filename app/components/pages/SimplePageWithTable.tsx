import React from "react";
import Link from "next/link";
import {FaCaretDown, FaCaretUp, FaSave} from "react-icons/fa";
import CustomButton from "@/app/components/buttons/CustomButton";
import {prisma} from "@/prisma/client";
import {sort} from "fast-sort";
import axios from "axios";
import delay from "delay"
import PageHeader from "@/app/components/pages/PageHeader";
import SimpleTable from "@/app/components/pages/SimpleTable";
import { IoMdAddCircle } from "react-icons/io";

interface Props{
    pageHeader : string,
    id : string,
    apiPath: string,
    sortBy: string,
    sortType: string
    actionText?: string
}

type Element = {
    id: number;
    title: string;
};

export default async function SimplePageWithTable({pageHeader, apiPath, id, sortBy, sortType, actionText} : Props) {
    // used for checking loading and skeleton
    // await delay(2000);

    const url : string = `http://localhost:3000/api/${apiPath}`;

    const response = await axios.get(url);
    const elements : {id:number; title: string}[] = response.data;

    const sortedPlatforms = sortType === "asc"
        ? sort(elements).asc(platform =>
            sortBy in platform ? platform[sortBy as keyof Element] : platform.id
        )
        : sort(elements).desc(platform =>
            sortBy in platform ? platform[sortBy as keyof Element] : platform.id
        );
    return (
        <>
            <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <PageHeader pageHeader={pageHeader} />

                    <SimpleTable pageHeader={pageHeader}
                                 id={id} sortBy={sortBy}
                                 sortType={sortType}
                                 sortedPlatforms={sortedPlatforms}
                                 actionText={actionText}
                    />

                    <div className="text-right py-5">
                        <CustomButton href={`/${pageHeader.toLowerCase().replace(/ /g, "_")}/new`} icon={IoMdAddCircle} buttonStyleType={"primary"}>
                            Add {id}
                        </CustomButton>
                    </div>
                </div>
            </div>
        </>
    );
}
