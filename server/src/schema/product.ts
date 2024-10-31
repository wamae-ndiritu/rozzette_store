import { z } from "zod";

export const ProductCreateSchema = z.object({
  name: z.string(),
  description: z.string(),
  images: z.array(z.string()),
  price: z.number().positive(),
  tags: z.array(z.string()),
  categories: z.array(z.number()),
  countInStock: z.number().int().positive(),
});

