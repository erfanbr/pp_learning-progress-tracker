import React, {PropsWithChildren} from "react";
import {UseFormRegisterReturn} from 'react-hook-form';


type ColumnSize = '1' | '2' | '3' | '4';

interface InputProps {
    title: string;
    id: string;
    dataSource: { id: number; title: string }[];
    defaultValue?: number;
    columnSize?: ColumnSize;
    register?: UseFormRegisterReturn;
    isDisabled?: boolean;
    error?: string;
}

const FormInputDropDownElement: React.FC<InputProps> = ({
                                                            title,
                                                            id,
                                                            dataSource,
                                                            defaultValue,
                                                            columnSize = '2',
                                                            isDisabled = false,
                                                            register,
                                                            error
                                                        }) => {
    return (
        <div className={`col-span-${columnSize}`}>
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {title}
            </label>

            <select
                id={id}
                disabled={isDisabled}
                {...register}
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${isDisabled ? "dark:bg-gray-400 dark:border-gray-300 dark:text-zinc-600" : "dark:bg-gray-200 dark:border-gray-100 dark:text-zinc-700" } dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500`}
            >
                <option value="">Select {title}</option>
                {dataSource.map((d) => (
                    <option key={d.id} value={d.id}
                            selected={defaultValue === d.id}>
                        {d.title}
                    </option>
                ))}
            </select>

            <div>
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
        </div>

    );
};

export default FormInputDropDownElement;


