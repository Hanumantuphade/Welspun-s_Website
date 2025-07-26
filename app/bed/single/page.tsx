import PageLayout from "@/components/PageLayout";
import PremiumProductGrid from "@/components/PremiumProductGrid";

const singleBlankets = [
  {
    id: 1,
    name: "Warm Single Blanket",
    image: "/topSeller/Blankets/Single/s1.jpg",
    price: "₹1299",
    description: "Stay cosy with this warm single blanket.",
  },
  {
    id: 2,
    name: "Floral Single Blanket",
    image: "/topSeller/Blankets/Single/s2.jpg",
    price: "₹1399",
    description: "Beautiful floral print for a stylish bedroom.",
  },
  {
    id: 3,
    name: "Soft Touch Blanket",
    image: "/topSeller/Blankets/Single/s3.jpg",
    price: "₹1499",
    description: "Experience the ultra-soft touch of this blanket.",
  },
  {
    id: 4,
    name: "Luxury Single Blanket",
    image: "/topSeller/Blankets/Single/s4.jpg",
    price: "₹1599",
    description: "Add luxury to your sleep with this premium blanket.",
  },
  {
    id: 5,
    name: "Elegant Single Blanket",
    image: "/topSeller/Blankets/Single/s5.jpg",
    price: "₹1499",
    description: "Elegant design for a classy bedroom look.",
  },
  {
    id: 6,
    name: "Printed Single Blanket",
    image: "/topSeller/Blankets/Single/s6.jpg",
    price: "₹1399",
    description: "Attractive printed blanket for daily use.",
  },
  {
    id: 7,
    name: "Classic Single Blanket",
    image: "/topSeller/Blankets/Single/s7.jpg",
    price: "₹1299",
    description: "Classic design with unmatched comfort.",
  },
  {
    id: 8,
    name: "Comfort Single Blanket",
    image: "/topSeller/Blankets/Single/s8.jpg",
    price: "₹1599",
    description: "Enjoy ultimate comfort with this soft blanket.",
  },
  {
    id: 9,
    name: "Premium Fleece Blanket",
    image: "/topSeller/Blankets/Single/s9.jpg",
    price: "₹1699",
    description: "Premium fleece blanket for maximum warmth.",
  },
];

export default function BedsheetPage() {
  return (
    <PageLayout
      breadcrumbItems={[
        { label: "Home", link: "/" },
        { label: "Bed" },
        { label: "Single-Blankets" },
      ]}
      heroImage="/topSeller/hero5.png" 
      heroTitle="Single Blankets Collection"
      heroSubtitle1="Stay warm and comfortable with our premium single blankets."
      heroSubtitle2="Perfect for everyday use with soft fabrics and elegant designs."
      heroSubtitle3="Make your nights cosy and your bedroom stylish effortlessly."
    >
      <PremiumProductGrid products={singleBlankets} />
    </PageLayout>
  );
}
