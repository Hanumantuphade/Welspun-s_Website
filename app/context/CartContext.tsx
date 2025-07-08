'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { CartItem } from '@/types'

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (product: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (id: number, size?: string, color?: string) => void
  updateQuantity: (id: number, delta: number, size?: string, color?: string) => void
}

const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

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

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
