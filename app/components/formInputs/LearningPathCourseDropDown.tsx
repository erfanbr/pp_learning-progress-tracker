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


}


const LearningPathCourseDropDown: React.FC<Props> = ({ index, control, getFilteredOptions,  }) => {
    return (
        <Controller
            name={`courses.${index}` as const}
            control={control}
            render={({ field }) => {
                const currentId = field.value;
                const filteredOptions = getFilteredOptions(index, currentId);

                return (
                    <select
                        {...field}

                        className="col-span-2 form-select bg-gray-700 text-white mb-2 p-2 rounded w-full"
                    >
                        <option value="">Select a course</option>
                        {filteredOptions.map((c) => (
                            <option key={c.id} value={c.id}>
                                {c.title}
                            </option>
                        ))}
                    </select>

                );
            }}
        />
    );
};

export default LearningPathCourseDropDown;

