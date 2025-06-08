import React from "react";
import Link from "next/link";
import FormInputFieldElement from "@/app/components/formInputs/FormInputFieldElement";
import FormInputDropDownElement from "@/app/components/formInputs/FormInputsDropdownElement";
import FormInputDropDownElementEnums from "@/app/components/formInputs/FormInputsDropdownElementEnums";
import {difficultyMap, priorityMap, statusMap} from "@/app/components";
import FormCheckBoxElement from "@/app/components/formInputs/FormCheckBoxElement";
import CustomButton from "../../components/buttons/CustomButton";
import {FaTrashCan} from "react-icons/fa6";
import Spinner from "@/app/components/Spinner";
import {FaSave} from "react-icons/fa";
import ConfirmModal from "@/app/components/Modal/ConfirmModal";
import {z} from "zod";
import {createLearningPathSchema} from "@/app/validationSchema";

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

                <div>{learningPathsCoursesData[0]?.learningPath?.title}</div>
                <div>{learningPathsCoursesData[0]?.learningPath?.description}</div>
                {/*<div>{learningPathsCoursesData!.description}</div>*/}

                <div className={"text-amber-500"}>****************************************</div>

                <h2>Courses:</h2>
                <div className={"text-amber-500"}>****************************************</div>

                {/*TODO: Style this page nicer*/}
                {/*TODO: Style add drag option to change order for each elements*/}

                <ul>
                    {learningPathsCoursesData.map((c) => (
                        <li key={c.id}>{c.course.title} - Order is: {c.order}</li>
                    ))}
                </ul>


                {/*<div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">*/}
                {/*// <!-- Modal header -->*/}
                {/*    <div*/}
                {/*        className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">*/}
                {/*        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">*/}
                {/*            Edit a Course*/}
                {/*        </h3>*/}
                {/*        <Link*/}
                {/*            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"*/}
                {/*            href="/courses/">*/}
                {/*            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"*/}
                {/*                 xmlns="http://www.w3.org/2000/svg">*/}
                {/*                <path fillRule="evenodd"*/}
                {/*                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"*/}
                {/*                      clipRule="evenodd"></path>*/}
                {/*            </svg>*/}
                {/*        </Link>*/}
                {/*    </div>*/}
                {/*// <!-- Modal body -->*/}
                {/*    <form onSubmit={onFormSubmit}>*/}
                {/*        <div className="grid gap-4 mb-4 sm:grid-cols-4">*/}


                {/*            <FormInputFieldElement*/}
                {/*                title={"Title"}*/}
                {/*                id={"title"}*/}
                {/*                columnSize={"2"}*/}
                {/*                placeholder={`Course Title`}*/}
                {/*                defaultValue={courseData.title}*/}
                {/*                register={register('title')}*/}
                {/*                error={errors.title?.message}*/}
                {/*            />*/}

                {/*            <FormInputFieldElement*/}
                {/*                title={"Link"}*/}
                {/*                id={"link"}*/}
                {/*                columnSize={"2"}*/}
                {/*                placeholder={'URL to course content'}*/}
                {/*                defaultValue={courseData.link}*/}
                {/*                register={register('link')}*/}
                {/*                error={errors.link?.message}*/}
                {/*            />*/}


                {/*            <FormInputDropDownElement title={'Platform'}*/}
                {/*                                      id={'platform'}*/}
                {/*                                      dataSource={platforms}*/}
                {/*                                      defaultValue={courseData.platformId}*/}
                {/*                                      columnSize={'1'}*/}
                {/*                                      register={register('platformId', {valueAsNumber: true})}*/}
                {/*                                      error={errors.platformId?.message}*/}
                {/*            />*/}


                {/*            <FormInputDropDownElementEnums title={'Status'}*/}
                {/*                                           id={'status'}*/}
                {/*                                           dataSource={statusMap}*/}
                {/*                                           defaultValue={courseData.status}*/}
                {/*                                           columnSize={'1'}*/}
                {/*                                           register={register('status')}*/}
                {/*                                           error={errors.status?.message}*/}
                {/*            />*/}

                {/*            <FormInputDropDownElementEnums title={'Difficulty'}*/}
                {/*                                           id={'difficulty'}*/}
                {/*                                           dataSource={difficultyMap}*/}
                {/*                                           defaultValue={courseData.difficulty}*/}
                {/*                                           columnSize={'1'}*/}
                {/*                                           register={register('difficulty')}*/}
                {/*                                           error={errors.difficulty?.message}*/}
                {/*            />*/}


                {/*            <FormInputDropDownElement title={'Category'}*/}
                {/*                                      id={'category'}*/}
                {/*                                      dataSource={categories}*/}
                {/*                                      defaultValue={courseData.categoryId}*/}
                {/*                                      columnSize={'1'}*/}
                {/*                                      register={register('categoryId', {valueAsNumber: true})}*/}
                {/*                                      error={errors.categoryId?.message}*/}
                {/*            />*/}

                {/*            <FormInputDropDownElementEnums title={'Priority'}*/}
                {/*                                           id={'priority'}*/}
                {/*                                           dataSource={priorityMap}*/}
                {/*                                           defaultValue={courseData.priority}*/}
                {/*                                           columnSize={'1'}*/}
                {/*                                           register={register('priority')}*/}
                {/*                                           error={errors.priority?.message}*/}
                {/*            />*/}


                {/*            /!*TODO: format time nicer => based on timepicker from flowbite*!/*/}
                {/*            /!*<div>*!/*/}
                {/*            /!*    <label htmlFor="duration"*!/*/}
                {/*            /!*           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Duration</label>*!/*/}
                {/*            /!*    <input type="number" value="399"  id="duration" {...register('duration')}*!/*/}
                {/*            /!*           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-zinc-700 dark:focus:ring-primary-500 dark:focus:border-primary-500"*!/*/}
                {/*            /!*           placeholder="$299"/>*!/*/}
                {/*            /!*</div>*!/*/}
                {/*            <FormInputFieldElement*/}
                {/*                title={"Duration (Hours)"}*/}
                {/*                id={"duration"}*/}
                {/*                type={'number'}*/}
                {/*                columnSize={"1"}*/}
                {/*                placeholder={'Total hours'}*/}
                {/*                defaultValue={courseData.duration}*/}
                {/*                register={register('duration', {valueAsNumber: true})}*/}
                {/*                error={errors.duration?.message}*/}
                {/*            />*/}

                {/*            <FormInputFieldElement*/}
                {/*                title={"Last Seen"}*/}
                {/*                id={"lastSeen"}*/}
                {/*                columnSize={"2"}*/}
                {/*                placeholder={'Last seen video / episode'}*/}
                {/*                defaultValue={courseData.lastSeen}*/}
                {/*                register={register('lastSeen')}*/}
                {/*                error={errors.lastSeen?.message}*/}
                {/*            />*/}


                {/*            /!*Multiple select area*!/*/}
                {/*            <div className={"col-span-4"}>*/}
                {/*                <label htmlFor="technologies"*/}
                {/*                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Technologies*/}
                {/*                </label>*/}

                {/*                <div className="grid grid-cols-2 gap-2 px-4 md:px-2 md:grid-cols-4 col-span-4">*/}
                {/*                    {technologies.map(technology => (*/}
                {/*                        <FormCheckBoxElement*/}
                {/*                            title={technology.title}*/}
                {/*                            key={technology.id}*/}
                {/*                            id={technology.id}*/}
                {/*                            value={technology.id.toString()}*/}
                {/*                            isCheck={currentTechnologiesId.includes(technology.id)}*/}
                {/*                            register={register('technology')}/>*/}
                {/*                    ))}*/}
                {/*                </div>*/}

                {/*                {errors.technology?.message && (*/}
                {/*                    <p className="text-red-500 text-sm mt-1">{errors.technology.message}</p>*/}
                {/*                )}*/}
                {/*            </div>*/}


                {/*            /!*Note Area*!/*/}
                {/*            <div className={"col-span-4"}>*/}
                {/*                <label htmlFor="note"*/}
                {/*                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Notes</label>*/}
                {/*                <textarea id="note" rows={4} {...register('note')}*/}
                {/*                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-zinc-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"*/}
                {/*                          placeholder="Write your thoughts here..."></textarea>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div className="text-right">*/}
                {/*            <CustomButton icon={FaTrashCan}*/}
                {/*                          type={'button'}*/}
                {/*                          buttonStyleType={'danger'}*/}
                {/*                          onClick={handleDelete}*/}
                {/*                          isDisabled={isDeleted}>*/}
                {/*                Delete {isDeleted && <Spinner/>}*/}
                {/*            </CustomButton>*/}

                {/*            <CustomButton*/}
                {/*                icon={FaSave}*/}
                {/*                buttonStyleType={'primary'}*/}
                {/*                isDisabled={isSubmitted}>*/}
                {/*                Save Changes {isSubmitted && <Spinner/>}*/}
                {/*            </CustomButton>*/}
                {/*        </div>*/}
                {/*    </form>*/}

                {/*    <ConfirmModal*/}
                {/*        isOpen={showModal}*/}
                {/*        title="Confirm Deletion"*/}
                {/*        message={`Are you sure you want to delete --> ID: ${id}, Title: ${courseData.title}? `}*/}
                {/*        onConfirm={confirmDelete}*/}
                {/*        onCancel={() => setShowModal(false)}*/}
                {/*    />*/}
                {/*</div>*/}

            </div>
        </>
    );
}
