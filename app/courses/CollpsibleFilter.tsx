import React, {useState} from "react";
import {FaCaretDown, FaCaretUp} from "react-icons/fa";


type ColumnSize = '1' | '2' | '3' | '4';

interface Props {
    onValueChange: (arg0: string) => void,
    title: string,
    dataSource: { id: number; title: string }[],
    initiallyCollapsed: boolean,
    columnSize?: ColumnSize;

}

const CollapsibleFilter = ({
                               dataSource,
                               title,
                               initiallyCollapsed,
                               onValueChange,
                               columnSize = '4',
                           }: Props) => {
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

                        {dataSource.map((d) => (
                            <div key={d.id} className="flex items-center mb-4">
                                <input id={d.id.toString()}
                                       value={d.id}
                                       type="radio"
                                       name={title}
                                       className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                       onClick={() => onValueChange(d.id.toString())}/>
                                <label htmlFor={d.id.toString()}
                                       className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    {d.title}
                                </label>
                            </div>
                        ))}
                    </fieldset>

                </div>

            </div>
        </>
    );
}

export default CollapsibleFilter;