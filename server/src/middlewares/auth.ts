import { NextFunction, Request, Response } from "express";
import { UnauthorizedException } from "../exceptions/UnauthorizedException.js";
import { ErrorCode } from "../exceptions/root.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../secrets.js";
import prisma from "../db/prisma.js";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token: string = req.headers.authorization
    ? req.headers.authorization.split(" ")[1]
    : "";

  if (!token) {
    next(new UnauthorizedException("Unauthorized", ErrorCode.UNAUTHORIZED));
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET) as any;
    const user = await prisma.user.findFirst({ where: { id: payload.userId } });
    if (user) {
      req.user = user;
    }
    next();
  } catch (error) {
    next(new UnauthorizedException("Unauthorized", ErrorCode.UNAUTHORIZED));
  }
};
