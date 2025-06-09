import React from "react";
import Link from "next/link";
import FormInputFieldElement from "@/app/components/formInputs/FormInputFieldElement";
import FormInputDropDownElement from "@/app/components/formInputs/FormInputsDropdownElement";
import FormInputDropDownElementEnums from "@/app/components/formInputs/FormInputsDropdownElementEnums";
import {CourseStatusBadge, difficultyMap, priorityMap, statusMap} from "@/app/components";
import FormCheckBoxElement from "@/app/components/formInputs/FormCheckBoxElement";
import CustomButton from "../../components/buttons/CustomButton";
import {FaMagnifyingGlass, FaTrashCan} from "react-icons/fa6";
import Spinner from "@/app/components/Spinner";
import {FaSave} from "react-icons/fa";
import ConfirmModal from "@/app/components/Modal/ConfirmModal";
import {z} from "zod";
import {createLearningPathSchema} from "@/app/validationSchema";
import {CourseStatusLearningPathBadge} from "@/app/components/CourseStatusBadge";

// type LearningPaths = z.infer<typeof createLearningPathSchema>;

type LearningPaths = {
    id: number;
    title: string;
    description: string;
    // courses: Course[];
};

type LearningPathsCourses = {
    id: number,
    title: string,
    description: string,
    courses: Course[],
    learningPaths: LearningPath[];
};
type Course = {
    id: number,
    title: string,
    order: number,
}

interface Props {
    id: string,
    // platformsData: { id: number; title: string }[],
    // categoriesData: { id: number; title: string }[],
    // technologiesData: { id: number; title: string }[],
    // currentTechnologiesId: number[],
    learningPathsCoursesData: LearningPathsCourses,
}

export default function LearningPathsEditPageForm({learningPathsCoursesData}: Props) {
    return (
        <>
            <div>

                {/*<div>{learningPathsCoursesData[0]?.learningPath?.title}</div>*/}
                {/*<div>{learningPathsCoursesData[0]?.learningPath?.description}</div>*/}


                {/*<div className={"text-amber-500"}>****************************************</div>*/}

                {/*<h2>Courses:</h2>*/}
                {/*<div className={"text-amber-500"}>****************************************</div>*/}

                {/*TODO: Style add drag option to change order for each elements*/}


                <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    {/*// <!-- Modal header -->*/}
                    <div
                        className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Learning Path - {learningPathsCoursesData[0]?.learningPath?.title}
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
                    <form>
                        <div className="grid gap-4 mb-4 sm:grid-cols-4">


                            <FormInputFieldElement
                                title={"Title"}
                                id={"title"}
                                columnSize={"2"}
                                placeholder={`Course Title`}
                                defaultValue={learningPathsCoursesData[0]?.learningPath?.title}
                                isDisabled={true}
                                isReadonly={true}
                            />

                            {/*Note Area*/}
                            <div className={"col-span-4"}>
                                <label htmlFor="description"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea id="description"
                                          defaultValue={learningPathsCoursesData[0]?.learningPath?.description}
                                          rows={4}
                                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-zinc-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                          placeholder="Write your thoughts here...">

                                </textarea>
                            </div>

                            <div className={"col-span-4 ml-2.5 mt-2.5"}>

                                <ol className="relative border-s border-gray-200 dark:border-gray-700">
                                    {learningPathsCoursesData.map((c) => (
                                        <li className="mb-10 ms-6" key={c.id}>
                                        <span
                                            className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-2 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                            </svg>
                                        </span>
                                            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                                {c.course.title}
                                                <CourseStatusLearningPathBadge status={c.course.status} />

                                            </h3>
                                            <time
                                                className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                                {"Learning Order: " + c.order}
                                            </time>
                                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                                {c.course.description}
                                            </p>


                                                    <div className='text-right mt-2.5'>
                                                        <CustomButton icon={FaMagnifyingGlass}
                                                                      buttonStyleType={"discard"}
                                                                      type={"button"}
                                                                      href={`/courses/${c.course.id}`}>Course Details
                                                        </CustomButton>
                                                    </div>
                                        </li>
                                    ))}
                                </ol>


                            </div>


                            {/*{learningPathsCoursesData.map((c) => (*/}
                            {/*    <div key={c.id} className={"col-span-4"}>*/}
                            {/*        <FormInputFieldElement*/}
                            {/*            title={"Learning Order: " + c.order}*/}
                            {/*            id={c.id}*/}
                            {/*            columnSize={"4"}*/}
                            {/*            placeholder={`Course Title`}*/}
                            {/*            defaultValue={c.course.title}*/}
                            {/*            isDisabled={true}*/}
                            {/*            isReadonly={true}*/}
                            {/*        />*/}
                            {/*        <div className='text-right mt-2.5'>*/}
                            {/*            <CustomButton icon={FaMagnifyingGlass}*/}
                            {/*                          buttonStyleType={"outline_primary"}*/}
                            {/*                          type={"button"}*/}
                            {/*                          href={`/courses/${c.course.id}`}>Course Details*/}
                            {/*            </CustomButton>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*))}*/}


                            {/*<FormInputDropDownElement title={'Platform'}*/}
                            {/*                          id={'platform'}*/}
                            {/*                          dataSource={platforms}*/}
                            {/*                          defaultValue={learningPathsCoursesData.platformId}*/}
                            {/*                          columnSize={'1'}*/}
                            {/*                          register={register('platformId', {valueAsNumber: true})}*/}
                            {/*                          error={errors.platformId?.message}*/}
                            {/*/>*/}


                            {/*Multiple select area*/}
                            {/*<div className={"col-span-4"}>*/}
                            {/*    <label htmlFor="technologies"*/}
                            {/*           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Technologies*/}
                            {/*    </label>*/}

                            {/*    <div className="grid grid-cols-2 gap-2 px-4 md:px-2 md:grid-cols-4 col-span-4">*/}
                            {/*        {technologies.map(technology => (*/}
                            {/*            <FormCheckBoxElement*/}
                            {/*                title={technology.title}*/}
                            {/*                key={technology.id}*/}
                            {/*                id={technology.id}*/}
                            {/*                value={technology.id.toString()}*/}
                            {/*                isCheck={currentTechnologiesId.includes(technology.id)}*/}
                            {/*                register={register('technology')}/>*/}
                            {/*        ))}*/}
                            {/*    </div>*/}

                            {/*    {errors.technology?.message && (*/}
                            {/*        <p className="text-red-500 text-sm mt-1">{errors.technology.message}</p>*/}
                            {/*    )}*/}
                            {/*</div>*/}


                        </div>

                        {/*<div className="text-right">*/}
                        {/*    <CustomButton icon={FaTrashCan}*/}
                        {/*                  type={'button'}*/}
                        {/*                  buttonStyleType={'danger'}*/}
                        {/*                  onClick={handleDelete}*/}
                        {/*                  isDisabled={isDeleted}>*/}
                        {/*        Delete {isDeleted && <Spinner/>}*/}
                        {/*    </CustomButton>*/}

                        {/*    <CustomButton*/}
                        {/*        icon={FaSave}*/}
                        {/*        buttonStyleType={'primary'}*/}
                        {/*        isDisabled={isSubmitted}>*/}
                        {/*        Save Changes {isSubmitted && <Spinner/>}*/}
                        {/*    </CustomButton>*/}
                        {/*</div>*/}
                    </form>


                </div>

            </div>
        </>
    );
}
