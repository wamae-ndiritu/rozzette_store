import { Router } from "express";
import { createUser, getProfile, login } from "../controllers/userControllers.js";
import { errorHandler } from "../error-handler.js";
import { authMiddleware } from "../middlewares/auth.js";

export const userRoutes: Router = Router();

userRoutes.post('/signup',  errorHandler(createUser));
userRoutes.post('/login', errorHandler(login));
userRoutes.get("/profile", [authMiddleware], errorHandler(getProfile));