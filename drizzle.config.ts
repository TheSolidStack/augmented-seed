import { defineConfig } from 'drizzle-kit'
import * as process from "node:process";
import * as dotenv from "dotenv";

dotenv.config();
export default defineConfig({
    out: './src/lib/db/migrations',
    schema: './src/lib/db/schema/index.ts', // 👈 ici c'est l'index !
    dialect: 'postgresql', // ou 'turso', 'sqlite', etc. selon ton driver
    dbCredentials: {
        url: process.env.DATABASE_URL
    },
})