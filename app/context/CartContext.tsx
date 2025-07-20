// app/context/CartContext.tsx
'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { CartItem } from '@/types'

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (product: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (id: number, size?: string, color?: string) => void
  updateQuantity: (id: number, delta: number, size?: string, color?: string) => void
  clearCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
}

const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart))
      } catch (error) {
        console.error('Error loading cart from localStorage:', error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    setCartItems(prev => {
      const idx = prev.findIndex(
        i => i.id === product.id && i.size === product.size && i.color === product.color
      )
      if (idx > -1) {
        const updated = [...prev]
        updated[idx].quantity += 1
        return updated
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (id: number, size?: string, color?: string) => {
    setCartItems(prev =>
      prev.filter(i => !(i.id === id && i.size === size && i.color === color))
    )
  }

  const updateQuantity = (id: number, delta: number, size?: string, color?: string) => {
    setCartItems(prev =>
      prev.flatMap(i => {
        if (i.id === id && i.size === size && i.color === color) {
          const qty = i.quantity + delta
          if (qty <= 0) return []
          return [{ ...i, quantity: qty }]
        }
        return [i]
      })
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart,
      getTotalPrice,
      getTotalItems
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
