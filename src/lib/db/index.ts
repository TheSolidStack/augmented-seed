// lib/db/index.ts
import * as dotenv from 'dotenv' // ← impératif !
// maintenant process.env est rempli
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import * as productSchema from './schema/product.schema'


dotenv.config()

// 👇 on merge les schemas
export const schema = {
    ...productSchema,

}

const client = postgres(process.env.DATABASE_URL!, { prepare: false })

export const db = drizzle(client, { schema })