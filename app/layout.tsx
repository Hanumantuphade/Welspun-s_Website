// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { UserProvider } from "./context/UserContext";

export const metadata: Metadata = {
  title: "Swarattan - Premium Home Collection",
  icons: {
    icon: "/favicon.png",
  },
  description:
    "Discover premium home textiles, bath products, curtains, flooring, mattresses, and rugs",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <CartProvider>
            <WishlistProvider>{children}</WishlistProvider>
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
