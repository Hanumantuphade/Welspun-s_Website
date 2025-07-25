// lib/products.ts

import { pool } from './db';
import { Product, CreateProductData, UpdateProductData } from '@/types/product';

export class ProductService {
  static async getAllProducts(): Promise<Product[]> {
    const client = await pool.connect();
    try {
      const result = await client.query(`
        SELECT 
          id, name, price, original_price as "originalPrice", 
          rating, reviews, image, images, colors, sizes,
          description, return_policy as "returnPolicy", 
          care_instructions as "careInstructions", 
          manufacture_detail as "manufactureDetail",
          category, created_at as "createdAt", updated_at as "updatedAt"
        FROM products 
        ORDER BY created_at DESC
      `);
      return result.rows;
    } finally {
      client.release();
    }
  }

  static async getProductsByCategory(category: string): Promise<Product[]> {
    const client = await pool.connect();
    try {
      const result = await client.query(`
        SELECT 
          id, name, price, original_price as "originalPrice", 
          rating, reviews, image, images, colors, sizes,
          description, return_policy as "returnPolicy", 
          care_instructions as "careInstructions", 
          manufacture_detail as "manufactureDetail",
          category, created_at as "createdAt", updated_at as "updatedAt"
        FROM products 
        WHERE category = $1
        ORDER BY created_at DESC
      `, [category]);
      return result.rows;
    } finally {
      client.release();
    }
  }

  static async getProductById(id: number): Promise<Product | null> {
    const client = await pool.connect();
    try {
      const result = await client.query(`
        SELECT 
          id, name, price, original_price as "originalPrice", 
          rating, reviews, image, images, colors, sizes,
          description, return_policy as "returnPolicy", 
          care_instructions as "careInstructions", 
          manufacture_detail as "manufactureDetail",
          category, created_at as "createdAt", updated_at as "updatedAt"
        FROM products 
        WHERE id = $1
      `, [id]);
      return result.rows[0] || null;
    } finally {
      client.release();
    }
  }

  static async createProduct(data: CreateProductData): Promise<Product> {
    const client = await pool.connect();
    try {
      const result = await client.query(`
        INSERT INTO products (
          name, price, original_price, rating, reviews, image, images, 
          colors, sizes, description, return_policy, care_instructions, 
          manufacture_detail, category
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
        RETURNING 
          id, name, price, original_price as "originalPrice", 
          rating, reviews, image, images, colors, sizes,
          description, return_policy as "returnPolicy", 
          care_instructions as "careInstructions", 
          manufacture_detail as "manufactureDetail",
          category, created_at as "createdAt", updated_at as "updatedAt"
      `, [
        data.name, data.price, data.originalPrice, data.rating, data.reviews,
        data.image, data.images, data.colors, data.sizes, data.description,
        data.returnPolicy, data.careInstructions, data.manufactureDetail, data.category
      ]);
      return result.rows[0];
    } finally {
      client.release();
    }
  }

  static async updateProduct(data: UpdateProductData): Promise<Product | null> {
    const client = await pool.connect();
    try {
      const fields = [];
      const values = [];
      let paramCount = 1;

      Object.entries(data).forEach(([key, value]) => {
        if (key !== 'id' && value !== undefined) {
          const dbKey = key === 'originalPrice' ? 'original_price' :
                       key === 'returnPolicy' ? 'return_policy' :
                       key === 'careInstructions' ? 'care_instructions' :
                       key === 'manufactureDetail' ? 'manufacture_detail' : key;
          fields.push(`${dbKey} = $${paramCount}`);
          values.push(value);
          paramCount++;
        }
      });

      if (fields.length === 0) {
        throw new Error('No fields to update');
      }

      fields.push(`updated_at = CURRENT_TIMESTAMP`);
      values.push(data.id);

      const result = await client.query(`
        UPDATE products 
        SET ${fields.join(', ')}
        WHERE id = $${paramCount}
        RETURNING 
          id, name, price, original_price as "originalPrice", 
          rating, reviews, image, images, colors, sizes,
          description, return_policy as "returnPolicy", 
          care_instructions as "careInstructions", 
          manufacture_detail as "manufactureDetail",
          category, created_at as "createdAt", updated_at as "updatedAt"
      `, values);

      return result.rows[0] || null;
    } finally {
      client.release();
    }
  }

  static async deleteProduct(id: number): Promise<boolean> {
    const client = await pool.connect();
    try {
      const result = await client.query('DELETE FROM products WHERE id = $1', [id]);
    //   return result.rowCount > 0;
    return (result.rowCount ?? 0) > 0;
    } finally {
      client.release();
    }
  }
}