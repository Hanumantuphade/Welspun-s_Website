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
  category: string; // ✅ make sure 'category' is included here
}
