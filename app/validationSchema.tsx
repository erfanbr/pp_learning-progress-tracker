import {z} from 'zod';

export const createCategorySchema = z.object({
    title: z.string().min(3, 'Title has to be at least 3 characters').max(150)
})

export const createPlatformSchema = z.object({
    title: z.string().min(3, 'Title has to be at least 3 characters').max(150)
})

export const createTechnologySchema = z.object({
    title: z.string().min(1, 'Title has to be at least 1 characters').max(150)
})

