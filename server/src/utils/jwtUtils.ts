import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../secrets.js';

export function generateToken(userId: number) {
  return jwt.sign({ userId}, JWT_SECRET, { expiresIn: '1h' });
}
