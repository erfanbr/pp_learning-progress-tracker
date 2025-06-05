'use client';
import React, {useState} from "react";
import {statusMap} from "@/app/components/mappings/StatusMap";
import CollapsibleFilterEnums from "@/app/courses/CollapsibleFilterEnums";
import {difficultyMap} from "@/app/components/mappings/DifficultyMap";
import {priorityMap} from "@/app/components/mappings/PriorityMap";
import CollapsibleFilter from "@/app/courses/CollpsibleFilter";
import {prisma} from "@/prisma/client";


interface Props {
    platformData: { id: number; title: string }[],
    categoryData: { id: number; title: string }[],
    onPlatformValueClick: (arg0: string) => void,
    onCategoryValueClick: (arg0: string) => void,
    onStatusValueClick: (arg0: string) => void,
    onDifficultyValueClick: (arg0: string) => void,
    onPriorityValueClick: (arg0: string) => void,

}

export default function CourseFilter({
                                         onPlatformValueClick,
                                         onCategoryValueClick,
                                         onStatusValueClick,
                                         onDifficultyValueClick,
                                         onPriorityValueClick,
                                         platformData,
                                         categoryData
                                     }: Props) {


    return (
        <>
            <div className={`col-span-2`}>


                <div className="grid gap-4 mb-4 sm:grid-cols-4">
                    <CollapsibleFilterEnums title={"Status"}
                                            onValueChange={onStatusValueClick}
                                            dataSource={statusMap}
                                            initiallyCollapsed={false}
                                            columnSize='2'
                    />

                    <CollapsibleFilterEnums title={"Difficulty"}
                                            onValueChange={onDifficultyValueClick}
                                            dataSource={difficultyMap}
                                            initiallyCollapsed={false}
                                            columnSize='2'
                    />
                    <CollapsibleFilterEnums title={"Priority"}
                                            onValueChange={onPriorityValueClick}
                                            dataSource={priorityMap}
                                            initiallyCollapsed={false}
                                            columnSize='2'
                    />

                    <CollapsibleFilter title={"Platforms"}
                                            onValueChange={onPlatformValueClick}
                                            dataSource={platformData}
                                            initiallyCollapsed={false}
                                            columnSize='2'
                    />
                    <CollapsibleFilter title={"Categories"}
                                            onValueChange={onCategoryValueClick}
                                            dataSource={categoryData}
                                            initiallyCollapsed={false}
                                            columnSize='2'
                    />


                </div>
            </div>

        </>
    );
}
