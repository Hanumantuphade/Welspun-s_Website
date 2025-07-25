// types/product.ts
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
    category: 'bath' | 'bed' | 'fitted' | 'premium-bedsheets' | 'curtains' | 'deals' | 'flooring' | 'mattress' | 'rugs';
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  export interface CreateProductData {
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
    category: Product['category'];
  }
  
  export interface UpdateProductData extends Partial<CreateProductData> {
    id: number;
  }