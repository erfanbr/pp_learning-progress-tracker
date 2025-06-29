import {z} from "zod";


const schema = z.object({
    title: z.string().min(3).max(150)
})

export default schema;