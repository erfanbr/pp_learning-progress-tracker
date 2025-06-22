import React from 'react';
import {Controller, Control, UseFormRegisterReturn} from 'react-hook-form';

interface Course {
    id: string;
    title: string;
}

interface Props {
    index: number;
    control: Control<any>;
    getFilteredOptions: (index: number, currentId: string) => Course[];
    isRequired: boolean;
    error?: string;

}


const LearningPathCourseDropDown: React.FC<Props> = ({index, control, getFilteredOptions, isRequired, error}) => {
    return (
        <Controller
            name={`courses.${index}` as const}
            control={control}
            rules={{ required: "A course is required" }}
            render={({field}) => {
                const currentId = field.value;
                const filteredOptions = getFilteredOptions(index, currentId);

                return (
                    <>
                        <div className='col-span-2'>
                            <select
                                {...field}
                                required={isRequired}
                                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-100 dark:text-zinc-700" dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                            >
                                <option value="">Select a course</option>
                                {filteredOptions.map((c) => (
                                    <option key={c.id} value={c.id}>
                                        {c.title}
                                    </option>
                                ))}
                            </select>
                            <div>
                                {error &&
                                    <p className="text-red-500 text-sm mt-1">{error}</p>}
                            </div>
                        </div>
                    </>
                );
            }}
        />
    );
};

export default LearningPathCourseDropDown;

