// lib/db.ts
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

export default pool;

// Database schema creation
export const createTableQuery = `
  CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price INTEGER NOT NULL,
    original_price INTEGER NOT NULL,
    rating DECIMAL(2,1) DEFAULT 0,
    reviews INTEGER DEFAULT 0,
    image TEXT NOT NULL,
    images TEXT[] DEFAULT ARRAY[]::TEXT[],
    colors TEXT[] DEFAULT ARRAY[]::TEXT[],
    sizes TEXT[] DEFAULT ARRAY[]::TEXT[],
    description TEXT DEFAULT '',
    return_policy TEXT DEFAULT '',
    care_instructions TEXT DEFAULT '',
    manufacture_detail TEXT DEFAULT '',
    category VARCHAR(50) NOT NULL CHECK (category IN ('bath', 'bed', 'fitted', 'premium-bedsheets', 'curtains', 'deals', 'flooring', 'mattress', 'rugs')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
  CREATE INDEX IF NOT EXISTS idx_products_created_at ON products(created_at);
`;

// Initialize database
export async function initializeDatabase() {
  try {
    const client = await pool.connect();
    await client.query(createTableQuery);
    client.release();
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
}