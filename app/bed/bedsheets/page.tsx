import PageLayout from "@/components/PageLayout";
import PremiumProductGrid from "@/components/PremiumProductGrid";

const premiumBedsheets = [
  {
    id: 1,
    name: "Premium Cotton Bedsheet",
    image: "/topSeller/Bedsheets/premium/s1.jpeg",
    price: "₹1499",
    description: "Soft and elegant premium cotton bedsheet.",
  },
  {
    id: 2,
    name: "Luxury Floral Bedsheet",
    image: "/topSeller/Bedsheets/premium/s2.jpeg",
    price: "₹1799",
    description: "Luxury floral print bedsheet for elegance.",
  },
  {
    id: 3,
    name: "LUXURY COLLECTION",
    image: "/topSeller/Bedsheets/premium/s3.jpeg",
    price: "₹2499",
    description: "Transform your bedroom into a luxury suite",
  },
  {
    id: 4,
    name: "PREMIUM COMFORT",
    image: "/topSeller/Bedsheets/premium/s4.jpg",
    price: "₹2999",
    description: "Experience unmatched comfort with our premium collection",
  },
  {
    id: 5,
    name: "ELEGANT DESIGNS",
    image: "/topSeller/Bedsheets/premium/s5.jpg",
    price: "₹1999",
    description: "Upgrade your decor with elegant bedsheet designs",
  },
  {
    id: 6,
    name: "SOFT TOUCH",
    image: "/topSeller/Bedsheets/premium/s6.jpg",
    price: "₹1799",
    description: "Feel the softness of our ultra-smooth fabrics",
  },
  {
    id: 7,
    name: "ROYAL COLLECTION",
    image: "/topSeller/Bedsheets/premium/s7.jpg",
    price: "₹3499",
    description: "Bring home the royalty with this luxurious collection",
  },
  {
    id: 8,
    name: "EVERYDAY ESSENTIALS",
    image: "/topSeller/Bedsheets/premium/s8.jpg",
    price: "₹1499",
    description: "Perfect essentials for everyday comfort and style",
  },
  {
    id: 9,
    name: "MODERN GEOMETRIC",
    image: "/topSeller/Bedsheets/premium/s9.jpg",
    price: "₹1899",
    description: "Modern geometric patterns to elevate your room decor.",
  },
  {
    id: 10,
    name: "FLORAL DELIGHT",
    image: "/topSeller/Bedsheets/premium/s10.jpg",
    price: "₹1599",
    description: "Bright floral prints for a refreshing bedroom look.",
  },
  {
    id: 11,
    name: "ROYAL BLUE LUXURY",
    image: "/topSeller/Bedsheets/premium/s11.jpg",
    price: "₹2799",
    description: "Experience luxury with our royal blue bedsheet collection.",
  },
  {
    id: 12,
    name: "PASTEL BLISS",
    image: "/topSeller/Bedsheets/premium/s12.jpg",
    price: "₹1699",
    description: "Calming pastel shades for soothing sleep.",
  },
  {
    id: 13,
    name: "CLASSIC WHITE",
    image: "/topSeller/Bedsheets/premium/s13.jpg",
    price: "₹1399",
    description: "Elegant white bedsheet for timeless appeal.",
  },
  {
    id: 14,
    name: "CHECKERED STYLE",
    image: "/topSeller/Bedsheets/premium/s14.jpg",
    price: "₹1499",
    description: "Stylish checkered pattern for modern homes.",
  },
  {
    id: 15,
    name: "EARTHY BROWN",
    image: "/topSeller/Bedsheets/premium/s15.jpg",
    price: "₹1599",
    description: "Warm earthy tones for cosy bedrooms.",
  },
  {
    id: 16,
    name: "Comfort Fit Bedsheet",
    image: "/topSeller/Bedsheets/fitted/f1.jpg",
    price: "₹1599",
    description: "Snug fit and soft fabric for a perfect night's sleep.",
  },
  {
    id: 17,
    name: "Luxury Fitted Bedsheet",
    image: "/topSeller/Bedsheets/fitted/f2.jpg",
    price: "₹1799",
    description: "Add a luxurious touch to your bed with this fitted sheet.",
  },
  {
    id: 18,
    name: "Printed Comfort Bedsheet",
    image: "/topSeller/Bedsheets/fitted/f3.jpg",
    price: "₹1499",
    description:
      "Beautiful printed design with deep pockets for secure fitting.",
  },
  {
    id: 19,
    name: "Elegant Fitted Bedsheet",
    image: "/topSeller/Bedsheets/fitted/f4.jpg",
    price: "₹1699",
    description: "Elegant patterns and soft texture for a classy look.",
  },
  {
    id: 20,
    name: "Soft Touch Fitted Sheet",
    image: "/topSeller/Bedsheets/fitted/f5.jpg",
    price: "₹1399",
    description: "Ultra-soft touch and wrinkle-resistant fabric.",
  },
  {
    id: 21,
    name: "Classic Fit Bedsheet",
    image: "/topSeller/Bedsheets/fitted/f6.jpg",
    price: "₹1599",
    description: "Timeless design and perfect fit for everyday use.",
  },
];

export default function BedsheetPage() {
  return (
    <PageLayout
      breadcrumbItems={[
        { label: "Home", link: "/" },
        { label: "Bed" },
        { label: "BedSheets" },
      ]}
      heroImage="/topSeller/hero3.png"
      heroTitle="Bedsheets Collection"
      heroSubtitle1="Transform your bedroom with our premium bedsheet range."
      heroSubtitle2="Crafted with soft, breathable fabrics and elegant designs for every taste."
      heroSubtitle3="Enjoy a cozy, stylish, and restful sleep experience every night."
    >
      <PremiumProductGrid products={premiumBedsheets} />
    </PageLayout>
  );
}
