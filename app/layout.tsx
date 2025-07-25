// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'

export const metadata: Metadata = {
  title: 'Swarattan - Premium Home Collection',
  description: 'Discover premium home textiles, bath products, curtains, flooring, mattresses, and rugs',
  generator: 'Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <WishlistProvider>
            {children}
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  )
}
