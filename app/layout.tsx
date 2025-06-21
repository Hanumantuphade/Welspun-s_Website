import './globals.css'
import type { Metadata } from 'next'
import { CartProvider } from './context/CartContext'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider> {/* This is mandatory! */}
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
