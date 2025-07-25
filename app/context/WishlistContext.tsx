// app/context/WishlistContext.tsx
'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { Product } from '@/types'
import { useUser } from './UserContext'

interface WishlistContextType {
  wishlistItems: Product[]
  addToWishlist: (product: Product) => Promise<void>
  removeFromWishlist: (id: number) => Promise<void>
  isInWishlist: (id: number) => boolean
  clearWishlist: () => Promise<void>
  loading: boolean
  fetchWishlist: () => Promise<void>
}

const WishlistContext = createContext<WishlistContextType | null>(null)

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const { user, isAuthenticated } = useUser()

  // Fetch wishlist from server when user logs in
  useEffect(() => {
    if (isAuthenticated && user) {
      fetchWishlist()
    } else {
      setWishlistItems([])
    }
  }, [isAuthenticated, user])

  const fetchWishlist = async () => {
    if (!isAuthenticated) return
    
    try {
      setLoading(true)
      const response = await fetch('/api/wishlist')
      
      if (response.ok) {
        const items = await response.json()
        setWishlistItems(items)
      }
    } catch (error) {
      console.error('Error fetching wishlist:', error)
    } finally {
      setLoading(false)
    }
  }

  const addToWishlist = async (product: Product) => {
    if (!isAuthenticated) {
      alert('Please login to add items to wishlist')
      return
    }

    try {
      const response = await fetch('/api/wishlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: product.id })
      })

      if (response.ok) {
        await fetchWishlist() // Refresh wishlist
      } else {
        throw new Error('Failed to add to wishlist')
      }
    } catch (error) {
      console.error('Error adding to wishlist:', error)
      alert('Failed to add item to wishlist')
    }
  }

  const removeFromWishlist = async (id: number) => {
    if (!isAuthenticated) return

    try {
      const response = await fetch(`/api/wishlist/${id}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        await fetchWishlist() // Refresh wishlist
      } else {
        throw new Error('Failed to remove from wishlist')
      }
    } catch (error) {
      console.error('Error removing from wishlist:', error)
      alert('Failed to remove item from wishlist')
    }
  }

  const isInWishlist = (id: number) => {
    return wishlistItems.some(item => item.id === id)
  }

  const clearWishlist = async () => {
    if (!isAuthenticated) return

    try {
      // You can implement this endpoint if needed
      setWishlistItems([])
    } catch (error) {
      console.error('Error clearing wishlist:', error)
    }
  }

  return (
    <WishlistContext.Provider value={{
      wishlistItems,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      clearWishlist,
      loading,
      fetchWishlist
    }}>
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => {
  const ctx = useContext(WishlistContext)
  if (!ctx) throw new Error('useWishlist must be used within WishlistProvider')
  return ctx
}
