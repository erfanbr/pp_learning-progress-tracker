'use client'
import React, {useEffect, useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {createCourseSchema, createLearningPathSchema} from "@/app/validationSchema";
import {useRouter} from "next/navigation";
import {prisma} from "@/prisma/client";
import Link from "next/link";
import FormInputFieldElement from "@/app/components/formInputs/FormInputFieldElement";
import {statusMap} from "@/app/components/mappings/StatusMap";
import {difficultyMap} from "@/app/components/mappings/DifficultyMap";
import {priorityMap} from "@/app/components/mappings/PriorityMap";
import CustomButton from "@/app/components/buttons/CustomButton";
import {FaInfo, FaTrashCan} from "react-icons/fa6";
import {FaMinus, FaPlus, FaSave} from "react-icons/fa";
import {z} from "zod";
import FormCheckBoxElement from "@/app/components/formInputs/FormCheckBoxElement";
import axios from "axios";
import {MdCancel} from "react-icons/md";
import FormInputDropDownElement from "@/app/components/formInputs/FormInputsDropdownElement";
import FormInputDropDownElementEnums from "@/app/components/formInputs/FormInputsDropdownElementEnums";
import FormInputDropDownElementLearningPath from "@/app/components/formInputs/FormInputDropDownElementLearningPath";

type LearningPath = z.infer<typeof createLearningPathSchema>;

interface Props {
    coursesData: { id: number; title: string }[],
    // platformsData: { id: number; title: string }[],
    // categoriesData: { id: number; title: string }[],
    // technologiesData: { id: number; title: string }[],

}

export default function NewLearningPathForm({coursesData}: Props) {
    const [numberOfCourses, setNumberOfCourses] = useState(2);

    const {
        register,
        handleSubmit,
        control,
        watch,
        getValues,
        formState: {errors},
        setValue
    } = useForm({
        defaultValues: {
            selectedCourses: Array(numberOfCourses).fill(''),
        },
    });


    // const {
    //     register,
    //     handleSubmit,
    //     formState: {errors}
    // } = useForm<LearningPath>({resolver: zodResolver(createLearningPathSchema)});

    const router = useRouter();
    const [error, setError] = useState('');
    const [isSubmitted, setSubmitted] = useState(false);
    const [coursesArray, setCoursesArray] = useState<number[]>([]);


    // const allOptions  = ['Apple', 'Banana', 'Cherry', 'Date'];
    // const courseTitle: string[] = coursesData.map(c => c.title);
    // const allOptions = courseTitle;

    const allOptions = coursesData;


    const watchedCourses = watch('selectedCourses') || [];
    const selectedCourses = watchedCourses.filter(f => f);


    useEffect(() => {
        const current = watch('selectedCourses') || [];
        const newValues = [...current];

        while (newValues.length < numberOfCourses) newValues.push('');
        while (newValues.length > numberOfCourses) newValues.pop();

        setValue('selectedCourses', newValues);
    }, [numberOfCourses]);



    // const dynamicDropDown = (value) => {
    //     // console.log( 'dropdown click');
    //     // console.log( 'value that was click: ' + value );
    //     setSelectedCourses(prevCourses => [...prevCourses, value]);
    //     // removeCourse(value);
    // }

    const getFilteredOptions = (index: number, currentValue: string) => {
        const selectedIds = watchedCourses.filter((_, i) => i !== index); // exclude current index
        return allOptions.filter(
            (opt) => !selectedIds.includes(opt.id.toString()) || opt.id.toString() === currentValue
        );
    };

    const onFormSubmit_v2 = handleSubmit(async (data) => {
        console.log('Form submitted_v2!');
        console.log('Data:', data);

        // add id to technology array so it works on Many 2 Many
        // const transformed = {
        //     ...data,
        //     technology: data.technology.map((id: string) => ({id: Number(id)}))
        // };
        // console.log(transformed);
        // const url: string = 'http://localhost:3000/api/courses';
        // try {
        //     setSubmitted(true);
        //     await axios.post(url, transformed);
        //     router.push(`/courses`);
        // } catch (error) {
        //     setSubmitted(false);
        //     setError('Unexpected error has happened');
        // }
    });

    const renderDropdown = (index: number) => (
        <Controller
            key={index}
            name={`selectedCourses.${index}` as const}
            control={control}
            render={({ field }) => {
                const currentId = field.value;
                const filteredOptions = getFilteredOptions(index, currentId);

                return (
                    <select
                        {...field}
                        className="form-select bg-gray-700 text-white mb-2 p-2 rounded w-full"
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


    return (
        <>
            <div>
                <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    {/*// <!-- Modal header -->*/}
                    <div
                        className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Add a Learning Path
                        </h3>
                        <Link
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            href="/learning_paths/">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </Link>
                    </div>
                    {/*// <!-- Modal body -->*/}
                    <form onSubmit={onFormSubmit_v2}>
                        <div className="grid gap-4 mb-4 sm:grid-cols-4">

                            {/*TODO: Add option to add Learning Path*/}

                            <FormInputFieldElement
                                title={"Title"}
                                id={"title"}
                                columnSize={"4"}
                                defaultValue={""}
                                placeholder={`Learning Path Title`}
                                register={register('title')}
                                // error={errors.title?.message}
                            />


                            {/*Note Area*/}
                            {/*<div className={"col-span-4"}>*/}
                            {/*    <label htmlFor="description"*/}
                            {/*           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>*/}
                            {/*    <textarea id="description" rows={4} {...register('description')}*/}
                            {/*              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-zinc-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"*/}
                            {/*              placeholder="Write your thoughts here..."></textarea>*/}
                            {/*    <div>*/}
                            {/*        {errors.description?.message &&*/}
                            {/*            <p className="text-red-500 text-sm mt-1">{errors.description?.message}</p>}*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            {/*{Array.from({length: numberOfCourses}, (_, index) => (*/}
                            {/*    <FormInputDropDownElementLearningPath*/}
                            {/*        key={index + 1}*/}
                            {/*        title={'Course ' + (index + 1)}*/}
                            {/*        id={'category'}*/}
                            {/*        dataSource={coursesData}*/}
                            {/*        columnSize={'2'}*/}
                            {/*        onChange={handleDropDownChange}*/}
                            {/*        register={register('courses', {valueAsNumber: true})}*/}
                            {/*        // error={errors.courses?.message}*/}
                            {/*    />*/}
                            {/*))}*/}

                            {[...Array(numberOfCourses)].map((_, i) => renderDropdown(i))}

                            <div className={"col-span-4"}>
                                <CustomButton icon={FaPlus}
                                              type={"button"}
                                              buttonStyleType={"discard"}
                                              onClick={() => setNumberOfCourses(numberOfCourses + 1)}>
                                    Add More
                                </CustomButton>


                                <CustomButton icon={FaMinus}
                                              type={"button"}
                                              buttonStyleType={"discard"}
                                              onClick={() => setNumberOfCourses(numberOfCourses - 1)}>
                                    Remove More
                                </CustomButton>
                            </div>


                            {/*/!*Multiple select area*!/*/}
                            {/*<div className={"col-span-4"}>*/}
                            {/*    <label htmlFor="technologies"*/}
                            {/*           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Technologies*/}
                            {/*    </label>*/}

                            {/*    /!*<div className="grid grid-cols-2 gap-2 px-4 md:px-2 md:grid-cols-4 col-span-4">*!/*/}
                            {/*    /!*    {technologies.map(technology => (*!/*/}
                            {/*    /!*        <FormCheckBoxElement*!/*/}
                            {/*    /!*            title={technology.title}*!/*/}
                            {/*    /!*            key={technology.id}*!/*/}
                            {/*    /!*            id={technology.id}*!/*/}
                            {/*    /!*            value={technology.id.toString()}*!/*/}
                            {/*    /!*            register={register('technology')}/>*!/*/}
                            {/*    /!*    ))}*!/*/}
                            {/*    /!*</div>*!/*/}

                            {/*    {errors.technology?.message && (*/}
                            {/*        <p className="text-red-500 text-sm mt-1">{errors.technology.message}</p>*/}
                            {/*    )}*/}
                            {/*</div>*/}


                        </div>

                        <div className="text-right">
                            <CustomButton href="/learning_paths/" icon={MdCancel}
                                          buttonStyleType={'discard'}>Cancel</CustomButton>
                            <CustomButton icon={FaSave} buttonStyleType={'primary'} type={'submit'}>Add
                                Learning Path</CustomButton>
                        </div>
                    </form>

                    <CustomButton icon={FaInfo} buttonStyleType={'danger'} type={'button'}
                                  onClick={() => console.log(selectedCourses)}>Show available courses</CustomButton>
                    <div>
                        <h2>Selected courses:</h2>
                        {selectedCourses.map(sc => (
                            <p key={sc}>{sc}</p>
                        ))}
                    </div>
                </div>

            </div>

        </>
    )
        ;
}
