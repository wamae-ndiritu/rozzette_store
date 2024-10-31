import { Request, Response } from "express";
import prisma from "../db/prisma.js";

export const createProduct = async (req: Request, res: Response) => {
    const product = await prisma.product.create({
        data: {
            ...req.body,
            tags: req.body.tags.join(","),
        }
    });
    res.json(product);
}