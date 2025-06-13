import React, {useState} from "react";
import colors from "@/app/components/types/Colors";
import {FaCaretDown, FaCaretUp} from "react-icons/fa";
import CustomButton from "@/app/components/buttons/CustomButton";
import {IoAddCircleSharp} from "react-icons/io5";

type ColumnSize = '1' | '2' | '3' | '4';

interface Props<T extends string> {
    onValueChange: (arg0: string) => void,
    title: string,
    dataSource: Record<T, { label: string; color: colors }>,
    initiallyCollapsed: boolean,
    columnSize?: ColumnSize;

}

const CollapsibleFilterEnums = <T extends string>({
                                                 dataSource,
                                                 title,
                                                 initiallyCollapsed = true,
                                                 onValueChange,
                                                 columnSize = '4',
                                             }: Props<T>) => {
    const [isCollapsed, setIsCollapsed] = useState(initiallyCollapsed);

    return (
        <>
            <div className={`col-span-${columnSize}`}>
                <h2 id="accordion-collapse-heading-2">
                    <button type="button" onClick={() => setIsCollapsed(!isCollapsed)}
                            className={`flex items-center p-3 justify-between w-full font-medium rtl:text-right text-gray-500 mb-4 border-b sm:mb-5  border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-600 dark:text-gray-400 ${isCollapsed ? 'dark:bg-gray-800' : 'dark:bg-gray-700'} hover:bg-gray-100 dark:hover:bg-gray-700 gap-3`}
                            data-accordion-target="#accordion-collapse-body-2" aria-expanded="false"
                            aria-controls="accordion-collapse-body-2">
                        <span>{title}</span>
                        {isCollapsed ? <FaCaretDown/> : <FaCaretUp/>}

                    </button>
                </h2>

                <div id="accordion-collapse-body-2" className={` ${isCollapsed ? 'hidden' : ''}`}
                     aria-labelledby="accordion-collapse-heading-2">

                    <fieldset className="flex flex-wrap gap-4">
                        <legend className="sr-only">{title}</legend>

                        {Object.entries(dataSource).map(([key, value]) => (
                            <div key={key} className="flex items-center mb-4">
                                <input id={key}
                                       value={key}
                                       type="radio"
                                       name={title}
                                       className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                       onClick={() => onValueChange(key)}/>
                                <label htmlFor={key}
                                       className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    {value.label}
                                </label>
                            </div>
                        ))}
                    </fieldset>
                </div>

            </div>
        </>
    );
}

export default CollapsibleFilterEnums;