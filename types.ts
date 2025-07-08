export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
  color?: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  colors: string[];
  sizes: string[];
  description: string;
  returnPolicy: string;
  careInstructions: string;
  manufactureDetail: string;
  collection?: string;
  category: string;
}
