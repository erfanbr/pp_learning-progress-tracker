import React, {PropsWithChildren} from "react";
import {UseFormRegisterReturn} from 'react-hook-form';

type ColumnSize = '1' | '2' | '3' | '4';

interface InputProps{
    title: string;
    id: string;
    defaultValue: string;
    columnSize?: ColumnSize;
    register?: UseFormRegisterReturn;
    placeholder?: string;
    type?: string;
    isReadonly?: boolean;
    isDisabled?: boolean;
    error?: string;
}

const FormInputFieldElement: React.FC<InputProps> = ({
                                                         title,
                                                         id,
                                                         columnSize = '2',
                                                         placeholder = 'placeholder text',
                                                         defaultValue,
                                                         type = 'text',
                                                         isReadonly = false,
                                                         isDisabled = false,
                                                         register,
                                                         error
                                                     }) => {
    return (
        <div className={`col-span-${columnSize}`}>
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {title}
            </label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                readOnly={isReadonly}
                disabled={isDisabled}
                defaultValue={defaultValue}
                {...register}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-zinc-700 dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
            <div>
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
        </div>

    );
};

export default FormInputFieldElement;
