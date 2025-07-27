// lib/products.ts
import { pool } from './db';
import { Product, CreateProductData, UpdateProductData } from '@/types/product';

export class ProductService {
  // Valid categories based on your new structure
  private static readonly VALID_CATEGORIES = [
    // Bath categories
    'bath', 'hand-towels', 'towels',
    // Bed categories  
    'bed', 'bedsheets', 'blankets', 'embrace', 'fitted', 'premium', 'single',
    // Other categories
    'curtains', 'deals', 'flooring', 'mattress', 'otherapedic-mattress', 'rugs'
  ];

  // Parent-child category relationships
  private static readonly CATEGORY_HIERARCHY = {
    'bath': ['bath', 'hand-towels', 'towels'],
    'bed': ['bed', 'bedsheets', 'blankets', 'embrace', 'fitted', 'premium', 'single'],
    'mattress': ['mattress', 'otherapedic-mattress']
  };

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
    if (!this.VALID_CATEGORIES.includes(category)) {
      throw new Error(`Invalid category: ${category}. Valid categories are: ${this.VALID_CATEGORIES.join(', ')}`);
    }

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

  static async getProductsByParentCategory(parentCategory: string): Promise<Product[]> {
    const childCategories = this.CATEGORY_HIERARCHY[parentCategory as keyof typeof this.CATEGORY_HIERARCHY];
    
    if (!childCategories) {
      throw new Error(`Invalid parent category: ${parentCategory}. Valid parent categories are: ${Object.keys(this.CATEGORY_HIERARCHY).join(', ')}`);
    }

    const client = await pool.connect();
    try {
      const placeholders = childCategories.map((_, index) => `$${index + 1}`).join(',');
      const result = await client.query(`
        SELECT 
          id, name, price, original_price as "originalPrice", 
          rating, reviews, image, images, colors, sizes,
          description, return_policy as "returnPolicy", 
          care_instructions as "careInstructions", 
          manufacture_detail as "manufactureDetail",
          category, created_at as "createdAt", updated_at as "updatedAt"
        FROM products 
        WHERE category IN (${placeholders})
        ORDER BY created_at DESC
      `, childCategories);
      return result.rows;
    } finally {
      client.release();
    }
  }

  static async getProductById(id: number): Promise<Product | null> {
    if (!id || id <= 0) {
      throw new Error('Invalid product ID');
    }

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
    // Validate category
    if (!this.VALID_CATEGORIES.includes(data.category)) {
      throw new Error(`Invalid category: ${data.category}. Valid categories are: ${this.VALID_CATEGORIES.join(', ')}`);
    }

    // Validate required fields
    if (!data.name?.trim()) {
      throw new Error('Product name is required');
    }
    if (!data.image?.trim()) {
      throw new Error('Product image is required');
    }
    if (data.price <= 0) {
      throw new Error('Product price must be greater than 0');
    }
    if (data.originalPrice <= 0) {
      throw new Error('Original price must be greater than 0');
    }
    if (data.rating < 0 || data.rating > 5) {
      throw new Error('Rating must be between 0 and 5');
    }
    if (data.reviews < 0) {
      throw new Error('Reviews count cannot be negative');
    }

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
        data.name.trim(), data.price, data.originalPrice, data.rating, data.reviews,
        data.image.trim(), data.images || [], data.colors || [], data.sizes || [], 
        data.description?.trim() || '', data.returnPolicy?.trim() || '', 
        data.careInstructions?.trim() || '', data.manufactureDetail?.trim() || '', 
        data.category
      ]);
      return result.rows[0];
    } finally {
      client.release();
    }
  }

  static async updateProduct(data: UpdateProductData): Promise<Product | null> {
    if (!data.id || data.id <= 0) {
      throw new Error('Invalid product ID');
    }

    // Validate category if provided
    if (data.category && !this.VALID_CATEGORIES.includes(data.category)) {
      throw new Error(`Invalid category: ${data.category}. Valid categories are: ${this.VALID_CATEGORIES.join(', ')}`);
    }

    // Validate other fields if provided
    if (data.price !== undefined && data.price <= 0) {
      throw new Error('Product price must be greater than 0');
    }
    if (data.originalPrice !== undefined && data.originalPrice <= 0) {
      throw new Error('Original price must be greater than 0');
    }
    if (data.rating !== undefined && (data.rating < 0 || data.rating > 5)) {
      throw new Error('Rating must be between 0 and 5');
    }
    if (data.reviews !== undefined && data.reviews < 0) {
      throw new Error('Reviews count cannot be negative');
    }
    if (data.name !== undefined && !data.name.trim()) {
      throw new Error('Product name cannot be empty');
    }
    if (data.image !== undefined && !data.image.trim()) {
      throw new Error('Product image cannot be empty');
    }

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
          
          // Trim string values
          const processedValue = typeof value === 'string' ? value.trim() : value;
          
          fields.push(`${dbKey} = $${paramCount}`);
          values.push(processedValue);
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
    if (!id || id <= 0) {
      throw new Error('Invalid product ID');
    }

    const client = await pool.connect();
    try {
      const result = await client.query('DELETE FROM products WHERE id = $1', [id]);
      return (result.rowCount ?? 0) > 0;
    } finally {
      client.release();
    }
  }

  // Additional utility methods
  static async getProductCount(): Promise<number> {
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT COUNT(*) as count FROM products');
      return parseInt(result.rows[0].count);
    } finally {
      client.release();
    }
  }

  static async getProductCountByCategory(category: string): Promise<number> {
    if (!this.VALID_CATEGORIES.includes(category)) {
      throw new Error(`Invalid category: ${category}`);
    }

    const client = await pool.connect();
    try {
      const result = await client.query('SELECT COUNT(*) as count FROM products WHERE category = $1', [category]);
      return parseInt(result.rows[0].count);
    } finally {
      client.release();
    }
  }

  static async searchProducts(searchTerm: string): Promise<Product[]> {
    if (!searchTerm?.trim()) {
      return [];
    }

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
        WHERE 
          name ILIKE $1 OR 
          description ILIKE $1 OR 
          category ILIKE $1
        ORDER BY 
          CASE 
            WHEN name ILIKE $1 THEN 1
            WHEN description ILIKE $1 THEN 2
            ELSE 3
          END,
          created_at DESC
      `, [`%${searchTerm.trim()}%`]);
      return result.rows;
    } finally {
      client.release();
    }
  }

  static async getDiscountedProducts(): Promise<Product[]> {
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
        WHERE original_price > price
        ORDER BY ((original_price - price) * 100.0 / original_price) DESC
      `);
      return result.rows;
    } finally {
      client.release();
    }
  }

  static getValidCategories(): string[] {
    return [...this.VALID_CATEGORIES];
  }

  static getCategoryHierarchy(): Record<string, string[]> {
    return { ...this.CATEGORY_HIERARCHY };
  }
}
