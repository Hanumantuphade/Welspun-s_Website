// components/cart-dropdown.tsx
'use client'

import { ShoppingCart, X, Plus, Minus } from 'lucide-react'
import Image from 'next/image'
import { useCart } from '@/app/context/CartContext'
import { CartItem } from '@/types'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function CartDropdown({ isOpen, onClose }: Props) {
  const { cartItems, updateQuantity, removeFromCart } = useCart()
  if (!isOpen) return null

  const total = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <div className="absolute right-0 top-full mt-2 w-96 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <ShoppingCart className="h-5 w-5 mr-2" />
            Shopping Cart ({cartItems.length})
          </h3>
          <button onClick={onClose} aria-label="Close cart">
            <X className="h-5 w-5 text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <ShoppingCart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Your cart is empty</p>
            <button onClick={onClose} className="mt-4 text-amber-900 hover:underline font-medium">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-4 max-h-64 overflow-y-auto">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.size}-${item.color}`} className="flex items-center space-x-3 p-3 border border-gray-100 rounded-lg">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image || '/placeholder.svg'}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 text-sm truncate">{item.name}</h4>
                    {item.size && <p className="text-xs text-gray-500">Size: {item.size}</p>}
                    {item.color && <p className="text-xs text-gray-500">Color: {item.color}</p>}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center space-x-2">
                        <button onClick={() => updateQuantity(item.id, -1, item.size, item.color)} className="..."><Minus /></button>
                        <span className="text-sm font-medium">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, +1, item.size, item.color)} className="..."><Plus /></button>
                      </div>
                      <span className="font-semibold text-amber-900">₹{item.price * item.quantity}</span>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id, item.size, item.color)} className="text-red-500 hover:text-red-700">Remove</button>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg">Total:</span>
                <span className="text-xl font-bold text-amber-900">₹{total.toLocaleString()}</span>
              </div>
              <button className="w-full bg-amber-900 text-white py-3 rounded-md hover:bg-amber-800 font-medium mb-2">
                View Cart
              </button>
              <button className="w-full border border-amber-900 text-amber-900 py-3 rounded-md hover:bg-amber-50 font-medium">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
