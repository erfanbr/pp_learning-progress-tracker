import {z} from 'zod';
import {prisma} from "@/prisma/client";
import {Status} from "@/app/components/enums/Status";
import {Difficulty} from "@/app/components/enums/Difficulty";
import {Priority} from "@/app/components/enums/Priority";


export const createCategorySchema = z.object({
    title: z.string().min(3, 'Title has to be at least 3 characters').max(150)
})

export const createPlatformSchema = z.object({
    title: z.string().min(3, 'Title has to be at least 3 characters').max(150)
})


export const createTechnologySchema = z.object({
    title: z.string().min(1, 'Title has to be at least 1 characters').max(150)
})

export const createCourseSchema = z.object({
    title: z.string().min(3, 'Title has to be at least 3 characters').max(150),
    link: z.string().max(2048),
    platformId: z.number({invalid_type_error: 'Please select a valid platform'}),
    status: z.nativeEnum(Status, {
        errorMap: (issue, ctx) => {
            return {message: 'Please select a valid status'};
        },
    }),
    difficulty: z.nativeEnum(Difficulty, {
        errorMap: (issue, ctx) => {
            return {message: 'Please select a valid difficulty'};
        },
    }),
    categoryId: z.number({invalid_type_error: 'Please select a valid category'}),
    priority: z.nativeEnum(Priority, {
        errorMap: (issue, ctx) => {
            return {message: 'Please select a valid priority'};
        },
    }),
    duration: z.number({invalid_type_error: 'Please enter a valid duration'}).max(2048).nullable(),
    lastSeen: z.string().max(150),
    technology: z.array(z.coerce.string()).nonempty("Please select at least one technology"),
    note: z.string().max(32688).nullable(),
    description: z.string().max(32688).nullable()
})

export const createLearningPathSchema = z.object({
    title: z.string().min(3, 'Title has to be at least 3 characters').max(150),
    description: z.string().min(3, 'Description has to be at least 3 characters').max(1024, 'description can be max 1024 characters'),
    // courses: z.array(z.coerce.number()).nonempty("Please select at least one course"),
})
