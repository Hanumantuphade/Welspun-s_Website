'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { CartItem } from '@/types'

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find(item => item.id === product.id && item.size === product.size && item.color === product.color);
      if (existing) {
        return prevItems.map(item =>
          item.id === product.id && item.size === product.size && item.color === product.color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
