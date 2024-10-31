import { NextFunction, Request, Response } from "express";
import prisma from "../db/prisma.js";
import { EventType } from "@prisma/client";

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, description, price, quantity, tags, images, categories } =
    req.body;
  const userId = req.user?.id; // Get user id from request

  // Create product as unpublished
  const newProduct = await prisma.product.create({
    data: {
      name,
      description,
      price,
      quantity,
      tags: tags.join(","),
      images,
      published: false,
      categories: {
        connect: categories.map((categoryId: number) => ({ id: categoryId })),
      },
    },
  });

  res.status(201).json({ product: newProduct });
};

// Publish products and create notification
export const publishProducts = async (req: Request, res: Response, next: NextFunction) => {
  const { productIds } = req.body;
  const userId = req.user!.id; // user will always have a value because of authMiddleware
  const userName = req.user?.username || req.user?.fullName;

  // Update products to set them as published
  const updatedProducts = await prisma.product.updateMany({
    where: { id: { in: productIds }, published: false },
    data: { published: true },
  });

  const publishedCount = updatedProducts.count;

  // Create a notification only if products were published
  if (publishedCount > 0) {
    await prisma.notification.create({
      data: {
        message: `${publishedCount} products published by ${userName}`,
        eventType: EventType.PRODUCT_PUBLISHED,
        userId: userId,
      },
    });
  }

  res
    .status(200)
    .json({ message: `${publishedCount} products published`, publishedCount });
};