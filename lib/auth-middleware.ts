// lib/auth-middleware.ts
import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';

export function verifyUserToken(request: NextRequest): number | null {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return null;
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: number };
    return decoded.userId;
  } catch (error) {
    return null;
  }
}

export function getUserIdFromCookie(request: NextRequest): number | null {
  try {
    const token = request.cookies.get('auth-token')?.value;
    
    if (!token) {
      return null;
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: number };
    return decoded.userId;
  } catch (error) {
    return null;
  }
}
