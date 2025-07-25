// app/context/CartContext.tsx
'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { CartItem } from '@/types'
import { useUser } from './UserContext'

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (product: Omit<CartItem, 'quantity'>) => Promise<void>
  removeFromCart: (id: number, size?: string, color?: string) => Promise<void>
  updateQuantity: (id: number, delta: number, size?: string, color?: string) => Promise<void>
  clearCart: () => Promise<void>
  getTotalPrice: () => number
  getTotalItems: () => number
  loading: boolean
  fetchCart: () => Promise<void>
}

const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(false)
  const { user, isAuthenticated } = useUser()

  // Fetch cart from server when user logs in
  useEffect(() => {
    if (isAuthenticated && user) {
      fetchCart()
    } else {
      setCartItems([])
    }
  }, [isAuthenticated, user])

  const fetchCart = async () => {
    if (!isAuthenticated) return
    
    try {
      setLoading(true)
      const response = await fetch('/api/cart')
      
      if (response.ok) {
        const items = await response.json()
        setCartItems(items)
      }
    } catch (error) {
      console.error('Error fetching cart:', error)
    } finally {
      setLoading(false)
    }
  }

  const addToCart = async (product: Omit<CartItem, 'quantity'>) => {
    if (!isAuthenticated) {
      alert('Please login to add items to cart')
      return
    }

    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: product.id,
          size: product.size,
          color: product.color,
          quantity: 1
        })
      })

      if (response.ok) {
        await fetchCart() // Refresh cart
      } else {
        throw new Error('Failed to add to cart')
      }
    } catch (error) {
      console.error('Error adding to cart:', error)
      alert('Failed to add item to cart')
    }
  }

  const removeFromCart = async (id: number, size?: string, color?: string) => {
    if (!isAuthenticated) return

    try {
      const params = new URLSearchParams()
      if (size) params.append('size', size)
      if (color) params.append('color', color)
      
      const response = await fetch(`/api/cart/${id}?${params.toString()}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        await fetchCart() // Refresh cart
      } else {
        throw new Error('Failed to remove from cart')
      }
    } catch (error) {
      console.error('Error removing from cart:', error)
      alert('Failed to remove item from cart')
    }
  }

  const updateQuantity = async (id: number, delta: number, size?: string, color?: string) => {
    if (!isAuthenticated) return

    try {
      const response = await fetch(`/api/cart/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ delta, size, color })
      })

      if (response.ok) {
        await fetchCart() // Refresh cart
      } else {
        throw new Error('Failed to update cart')
      }
    } catch (error) {
      console.error('Error updating cart:', error)
      alert('Failed to update cart')
    }
  }

  const clearCart = async () => {
    if (!isAuthenticated) return

    try {
      const response = await fetch('/api/cart', {
        method: 'DELETE'
      })

      if (response.ok) {
        setCartItems([])
      } else {
        throw new Error('Failed to clear cart')
      }
    } catch (error) {
      console.error('Error clearing cart:', error)
      alert('Failed to clear cart')
    }
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
      getTotalItems,
      loading,
      fetchCart
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
