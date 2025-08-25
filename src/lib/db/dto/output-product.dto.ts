import {z} from 'zod'

export const outputProductSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    price: z.number(),
    brand: z.string().optional(),
    model: z.string().optional(),
    color: z.string().optional(),
    category: z.string(),
    popular: z.boolean().optional(),
    discount: z.number().optional(),

    // Champs à enrichir
    originalPrice: z.number().optional(),
    rating: z.number().optional(),
    reviews: z.number().optional(),
    sku: z.string().optional(),
    stock: z.number().optional(),
    sale: z.boolean().optional(),
    images: z.array(z.string()).optional(),
    features: z.array(z.string()).optional(),
})


export type ZodIOutputProduct = z.infer<typeof outputProductSchema>