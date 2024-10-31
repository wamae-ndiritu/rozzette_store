import { NextFunction, Request, Response } from "express";
import { ErrorCode, HttpException } from "./exceptions/root.js";
import { InternalException } from "./exceptions/InternalException.js";
import { BadRequestsException } from "./exceptions/BadRequest.js";
import { ZodError } from "zod";

export const errorHandler = (method: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await method(req, res, next);
    } catch (error: any) {
      let exception: HttpException;
      if (error instanceof HttpException) {
        exception = error;
      } else {
        if (error instanceof ZodError) {
          exception = new BadRequestsException(
            "Unprocessable entity.",
            ErrorCode.UPROCESSABLE_ENTITY
          );
        } else {
          exception = new InternalException(
            "Something went wrong!",
            error,
            ErrorCode.INTERNAL_EXCEPTION
          );
        }
      }
      next(exception);
    }
  };
};
