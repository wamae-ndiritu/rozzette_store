import express, { Application, Request, Response } from 'express';
import { errorMiddleware } from './middlewares/errors.js';
import { productRoutes, userRoutes } from "./routes/index.js"
import dontenv from "dotenv";

dontenv.config();

const app: Application = express();
const port: number = 5000;

app.use(express.json())

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/products", productRoutes);

app.use(errorMiddleware); // Error middleware


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});