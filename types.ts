// furniture/types.ts

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  colors: string[];
  sizes: string[];
}

export interface CartItem extends Product {
  quantity: number;
  size: string;
  color: string;
}
