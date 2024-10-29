import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export function generateToken(userId: number) {
  return jwt.sign({ userId}, JWT_SECRET, { expiresIn: '1h' });
}
