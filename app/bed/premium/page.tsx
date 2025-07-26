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
    name: "ELEGANT GREY",
    image: "/topSeller/Bedsheets/premium/s16.jpg",
    price: "₹1799",
    description: "Minimalistic grey bedsheet for urban decor.",
  },
  {
    id: 17,
    name: "SUNSHINE YELLOW",
    image: "/topSeller/Bedsheets/premium/s17.jpg",
    price: "₹1699",
    description: "Bright yellow bedsheet for cheerful mornings.",
  },
  {
    id: 18,
    name: "ROYAL MAROON",
    image: "/topSeller/Bedsheets/premium/s18.jpg",
    price: "₹2299",
    description: "Deep maroon shades for a royal bedroom feel.",
  },
  {
    id: 19,
    name: "TEAL TOUCH",
    image: "/topSeller/Bedsheets/premium/s19.jpg",
    price: "₹1599",
    description: "Teal coloured bedsheet for a vibrant look.",
  },
  {
    id: 20,
    name: "BLACK ELEGANCE",
    image: "/topSeller/Bedsheets/premium/s20.jpg",
    price: "₹1999",
    description: "Elegant black bedsheet for a bold statement.",
  },
  {
    id: 21,
    name: "RUSTIC CHARM",
    image: "/topSeller/Bedsheets/premium/s21.jpg",
    price: "₹1899",
    description: "Rustic prints for a vintage-inspired bedroom.",
  },
  {
    id: 22,
    name: "PEACH BLOSSOM",
    image: "/topSeller/Bedsheets/premium/s22.jpg",
    price: "₹1799",
    description: "Peach blossom prints for a delicate touch.",
  },
  {
    id: 23,
    name: "LUXURY SATIN",
    image: "/topSeller/Bedsheets/premium/s23.jpg",
    price: "₹2999",
    description: "Smooth satin bedsheet for ultimate luxury.",
  },
  {
    id: 24,
    name: "GOLDEN GRACE",
    image: "/topSeller/Bedsheets/premium/s24.jpg",
    price: "₹2499",
    description: "Add grace with this golden printed bedsheet.",
  },
  {
    id: 25,
    name: "NAVY PREMIUM",
    image: "/topSeller/Bedsheets/premium/s25.jpg",
    price: "₹1899",
    description: "Premium navy bedsheet for elegant interiors.",
  },
  {
    id: 26,
    name: "FOREST GREEN",
    image: "/topSeller/Bedsheets/premium/s26.jpg",
    price: "₹1599",
    description: "Forest green bedsheet for a refreshing vibe.",
  },
  {
    id: 27,
    name: "PURPLE ROYALTY",
    image: "/topSeller/Bedsheets/premium/s27.jpg",
    price: "₹1999",
    description: "Royal purple bedsheet for luxurious bedrooms.",
  },
  {
    id: 28,
    name: "SILVER SHINE",
    image: "/topSeller/Bedsheets/premium/s28.jpg",
    price: "₹2799",
    description: "Shimmering silver bedsheet for modern luxury.",
  },
  {
    id: 29,
    name: "COFFEE BROWN",
    image: "/topSeller/Bedsheets/premium/s29.jpg",
    price: "₹1699",
    description: "Rich coffee brown bedsheet for warm interiors.",
  },
  {
    id: 30,
    name: "CRIMSON RED",
    image: "/topSeller/Bedsheets/premium/s30.jpg",
    price: "₹2199",
    description: "Crimson red bedsheet for festive elegance.",
  },
  {
    id: 31,
    name: "IVORY CLASSIC",
    image: "/topSeller/Bedsheets/premium/s31.jpg",
    price: "₹1499",
    description: "Classic ivory bedsheet for timeless beauty.",
  },
  {
    id: 32,
    name: "OMBRE STYLE",
    image: "/topSeller/Bedsheets/premium/s32.jpg",
    price: "₹1899",
    description: "Ombre shaded bedsheet for a trendy look.",
  },
  // Add more products as needed
];

export default function BedsheetPage() {
  return (
    <PageLayout
      breadcrumbItems={[
        { label: "Home", link: "/" },
        { label: "Bed" },
        { label: "Premium-Bedsheets" },
      ]}
      heroImage="/topSeller/hero1.png"
      heroTitle="Premium Bedsheet Collection"
      heroSubtitle1="Indulge in luxurious sleep with our premium bedsheets crafted from the finest fabrics."
      heroSubtitle2="Enjoy unmatched softness, elegant designs, and lasting durability for a five-star sleep experience."
      heroSubtitle3="Transform your bedroom into a haven of comfort and style with every sheet you lay."
    >
      <PremiumProductGrid products={premiumBedsheets} />
    </PageLayout>
  );
}
