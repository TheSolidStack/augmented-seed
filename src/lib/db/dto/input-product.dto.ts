import {z} from "zod";


export const productSchema = z.object({
    id: z.number(),
    title: z.string().max(255),
    image: z.string().url(),
    price: z.number(),
    description: z.string(),
    brand: z.string().optional(),
    model: z.string().optional(),
    color: z.string().optional(),
    category: z.string(),
    discount: z.number().optional(),
});

export type ZodInputProduct = z.infer<typeof productSchema>