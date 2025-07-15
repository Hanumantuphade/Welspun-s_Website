import PageLayout from "@/components/PageLayout";
import PremiumProductGrid from "@/components/PremiumProductGrid";

const premiumBedsheets = [
  {
    id: 1,
    name: "Premium Cotton Bedsheet",
    image: "/topSeller/s1.jpeg",
    price: "₹1499",
    description: "Soft and elegant premium cotton bedsheet.",
  },
  {
    id: 2,
    name: "Luxury Floral Bedsheet",
    image: "/topSeller/s2.jpeg",
    price: "₹1799",
    description: "Luxury floral print bedsheet for elegance.",
  },
  {
    id: 3,
    name: "LUXURY COLLECTION",
    image: "/topSeller/s3.jpeg",
    price: "₹2499",
    description: "Transform your bedroom into a luxury suite",
  },
  {
    id: 4,
    name: "PREMIUM COMFORT",
    image: "/topSeller/s4.jpg",
    price: "₹2999",
    description: "Experience unmatched comfort with our premium collection",
  },
  {
    id: 5,
    name: "ELEGANT DESIGNS",
    image: "/topSeller/s5.jpg",
    price: "₹1999",
    description: "Upgrade your decor with elegant bedsheet designs",
  },
  {
    id: 6,
    name: "SOFT TOUCH",
    image: "/topSeller/s6.jpg",
    price: "₹1799",
    description: "Feel the softness of our ultra-smooth fabrics",
  },
  {
    id: 7,
    name: "ROYAL COLLECTION",
    image: "/topSeller/s7.jpg",
    price: "₹3499",
    description: "Bring home the royalty with this luxurious collection",
  },
  {
    id: 8,
    name: "EVERYDAY ESSENTIALS",
    image: "/topSeller/s8.jpg",
    price: "₹1499",
    description:
      "Perfect for everyday use, combining comfort and style effortlessly.",
  },
];

export default function BedsheetPage() {
  return (
    <PageLayout
      breadcrumbItems={[
        { label: "Home", link: "/" },
        { label: "Bed" },
        { label: "Premium" },
      ]}
      heroImage="/topSeller/hero1.png"
      heroTitle="Premium Bedsheet Collection"
      heroSubtitle1="Transform your bedroom with our luxurious bedsheet range."
      heroSubtitle2="Discover ultra-soft fabrics and elegant designs for ultimate comfort."
      heroSubtitle3="Drift into a peaceful sleep and wake up feeling refreshed."
    >
      <PremiumProductGrid products={premiumBedsheets} />
    </PageLayout>
  );
}
