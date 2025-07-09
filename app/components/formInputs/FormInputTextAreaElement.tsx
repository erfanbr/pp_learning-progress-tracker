import React, {PropsWithChildren} from "react";
import {UseFormRegisterReturn} from 'react-hook-form';


type ColumnSize = '1' | '2' | '3' | '4';

interface InputProps {
    title: string;
    id: string;
    placeholderText: string;
    textHeight: number;
    defaultValue: string | null;
    columnSize?: ColumnSize;
    register?: UseFormRegisterReturn;
    isDisabled?: boolean;
    error?: string;
}

const FormInputTextAreaElement: React.FC<InputProps> = ({
                                                            title,
                                                            id,
                                                            textHeight,
                                                            placeholderText,
                                                            defaultValue,
                                                            columnSize = '2',
                                                            register,
                                                            error
                                                        }) => {
    return (
        <div className={`col-span-${columnSize}`}>
            <label htmlFor={id}
                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {title}
            </label>
            <textarea id={id} rows={textHeight} {...register}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-zinc-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder={placeholderText}
                      defaultValue={defaultValue}
            >
            </textarea>

            <div>
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
        </div>

    );
};

export default FormInputTextAreaElement;


