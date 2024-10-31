import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.js";
import { errorHandler } from "../error-handler.js";
import { createCategory, deleteCategory, editCategory, listCategoryProducts, publishCategory } from "../controllers/category.js";

export const categoryRoutes: Router = Router();

categoryRoutes.post("/create", authMiddleware, errorHandler(createCategory));
categoryRoutes.post("/publish", authMiddleware, errorHandler(publishCategory));
categoryRoutes.get(
  "/:categoryId/products",
  authMiddleware,
  errorHandler(listCategoryProducts)
); 
categoryRoutes.put("/:categoryId/edit", authMiddleware, errorHandler(editCategory)); 
categoryRoutes.delete("/:categoryId/delete", authMiddleware, errorHandler(deleteCategory)); 
