import {config} from "dotenv";
config()

export const JWT_SECRET: string = process.env.JWT_SECRET!;


