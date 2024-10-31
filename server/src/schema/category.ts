import { z } from "zod";

export const CategoryCreateSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  image: z.string(), 
});

export const CategoryEditSchema = z.object({
  name: z.string(),
  categoryId: z.number(),
});

export const CategoryPublishSchema = z.object({
  categoryId: z.array(z.number()),
});
