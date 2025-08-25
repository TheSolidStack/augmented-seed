import {pgTable,numeric, varchar,boolean,serial, text,integer,uuid} from "drizzle-orm/pg-core";

export const productSchema = pgTable("product", {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    description: text("description").notNull(),
    image: varchar("image", { length: 500 }).notNull(),
    price: numeric("price", { precision: 10, scale: 2 }).notNull(),

    brand: varchar("brand", { length: 255 }),
    model: varchar("model", { length: 255 }),
    color: varchar("color", { length: 100 }),
    category: varchar("category", { length: 100 }).notNull(),
    popular: boolean("popular"),

    discount: numeric("discount", { precision: 5, scale: 2 }),

    // Champs enrichis
    originalPrice: numeric("original_price", { precision: 10, scale: 2 }),
    rating: numeric("rating", { precision: 3, scale: 2 }), // ex: 4.5
    reviews: integer("reviews"),
    sku: varchar("sku", { length: 100 }),
    stock: integer("stock"),
    sale: boolean("sale"),

    // Pour arrays -> en Postgres tu peux utiliser text[]. Drizzle supporte `varchar("col").array()`
    images: text("images").array(),
    features: text("features").array(),
})