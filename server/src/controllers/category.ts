import { Request, Response, NextFunction } from "express";
import prisma from "../db/prisma.js";
import { CategoryCreateSchema, CategoryEditSchema, CategoryPublishSchema } from "../schema/category.js";
import { EventType } from "@prisma/client";

// Create Category
export const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  CategoryCreateSchema.parse(req.body);
  const { name, description, image } = req.body;

  const category = await prisma.category.create({
    data: { name, description, image },
  });

  res.status(201).json(category);
};

// Publish Categories and create notification
export const publishCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  CategoryPublishSchema.parse(req.body);
  const { categoryIds } = req.body;
  const userId = req.user!.id;
  const userName = req.user?.username || req.user?.fullName;

  const updatedCategories = await prisma.product.updateMany({
    where: { id: { in: categoryIds }, published: false },
    data: { published: true },
  });

  const publishedCount = updatedCategories.count;

  // Create a notification only if categories were published
  if (publishedCount > 0) {
    await prisma.notification.create({
      data: {
        message: `${publishedCount} categories published by ${userName}`,
        eventType: EventType.PRODUCT_PUBLISHED,
        userId: userId,
      },
    });
  }

  res
    .status(200)
    .json({
      message: `${publishedCount} categories published`,
      publishedCount,
    });
};

// List all Categories
export const listCategoryProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { categoryId } = req.params; 
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10; 

  // Fetch products that belong to the specified category
  const products = await prisma.product.findMany({
    where: {
      categories: {
        some: {
          id: Number(categoryId), // Filter products by the specified category
        },
      },
    },
    skip: (page - 1) * limit,
    take: limit,
  });

  const totalProducts = await prisma.product.count({
    where: {
      categories: {
        some: {
          id: Number(categoryId), // Count products in the specified category
        },
      },
    },
  });

  res.status(200).json({
    products,
    totalPages: Math.ceil(totalProducts / limit),
    currentPage: page,
  });
};


// Edit Category
export const editCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  CategoryEditSchema.parse(req.body);
  const { categoryId } = req.params;
  const { name } = req.body;

  const updatedCategory = await prisma.category.update({
    where: { id: Number(categoryId) },
    data: { name },
  });

  res.status(200).json(updatedCategory);
};


// Delete Category
export const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { categoryId } = req.params;

  await prisma.category.delete({
    where: { id: Number(categoryId) },
  });

  res.status(204).send(); // No content response
};
