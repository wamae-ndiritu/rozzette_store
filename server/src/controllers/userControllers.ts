import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/jwtUtils.js';
import prisma from '../db/prisma.js';
import { BadRequestsException } from '../exceptions/BadRequest.js';
import { ErrorCode } from '../exceptions/root.js';
import { RoleName } from '@prisma/client';
import { SignUpSchema } from '../schema/users.js';
import { NotFoundException } from '../exceptions/NotFoundException.js';


export const createUser = async (req: Request, res: Response) => {
    SignUpSchema.parse(req.body); // perfom zod validation
    const { email, username, fullName, phoneNumber, password } = req.body;
    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      throw new BadRequestsException("User already exists!", ErrorCode.USER_ALREADY_EXISTS);
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        fullName,
        phoneNumber,
        password: hashedPassword,
        roles: {
          create: {
            roleName: RoleName.CUSTOMER
          }
        },
      },
    });

    // Generate JWT token
    const token = generateToken(newUser.id);

    res.status(201).json({ user: newUser, token });
};


// Login user
export const login = async (req: Request, res: Response) => {
  const {email, password} = req.body;

  const existingUser = await prisma.user.findUnique({where: {email}});

  if (!existingUser){
    throw new NotFoundException('User not found!', ErrorCode.USER_NOT_FOUND)
  }

  const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

  if (!isPasswordCorrect){
    throw new BadRequestsException("Wrong credentials!", ErrorCode.INCORRECT_PASSWORD);
  }
  const token = generateToken(existingUser.id);

    res.status(201).json({ user: existingUser, token });
}