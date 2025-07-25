// lib/user-service.ts
import { pool } from './db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User, CreateUserData, LoginData } from '@/types/user';

export class UserService {
  static async createUser(userData: CreateUserData): Promise<User> {
    const { name, email, password, mobile, location } = userData;
    
    // Hash password
    const passwordHash = await bcrypt.hash(password, 12);
    
    const query = `
      INSERT INTO users (name, email, password_hash, mobile, location)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, name, email, mobile, location, created_at
    `;
    
    const result = await pool.query(query, [name, email, passwordHash, mobile, location]);
    return result.rows[0];
  }

  static async loginUser(loginData: LoginData): Promise<{ user: User; token: string } | null> {
    const { email, password } = loginData;
    
    const query = `
      SELECT id, name, email, password_hash, mobile, location, created_at
      FROM users WHERE email = $1
    `;
    
    const result = await pool.query(query, [email]);
    
    if (result.rows.length === 0) {
      return null;
    }
    
    const user = result.rows[0];
    const isValidPassword = await bcrypt.compare(password, user.password_hash);
    
    if (!isValidPassword) {
      return null;
    }
    
    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: '7d' }
    );
    
    // Remove password hash from response
    const { password_hash, ...userWithoutPassword } = user;
    
    return { user: userWithoutPassword, token };
  }

  static async getUserById(id: number): Promise<User | null> {
    const query = `
      SELECT id, name, email, mobile, location, created_at
      FROM users WHERE id = $1
    `;
    
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
  }

  static async checkEmailExists(email: string): Promise<boolean> {
    const query = `SELECT id FROM users WHERE email = $1`;
    const result = await pool.query(query, [email]);
    return result.rows.length > 0;
  }
}
