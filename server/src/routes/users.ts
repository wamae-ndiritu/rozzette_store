import { Router } from "express";
import { createUser, login } from "../controllers/userControllers.js";
import { errorHandler } from "../error-handler.js";

export const userRoutes: Router = Router();

userRoutes.post('/signup', errorHandler(createUser));
userRoutes.post('/login', errorHandler(login));