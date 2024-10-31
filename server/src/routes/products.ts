import { Router } from "express";
import { errorHandler } from "../error-handler.js";
import { authMiddleware } from "../middlewares/auth.js";
import { createProduct, publishProducts } from "../controllers/products.js";

export const productRoutes: Router = Router();

productRoutes.get("/create", [authMiddleware], errorHandler(createProduct));
productRoutes.get("/publish", [authMiddleware], errorHandler(publishProducts));

