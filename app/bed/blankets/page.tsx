import PageLayout from "@/components/PageLayout";
import PremiumProductGrid from "@/components/PremiumProductGrid";

const blankets = [
  {
    id: 1,
    name: "Warm Embrace Blanket",
    image: "/topSeller/Blankets/Embrace/e1.jpg",
    price: "₹1299",
    description: "Stay cosy with this warm embrace blanket.",
  },
  {
    id: 2,
    name: "Floral Embrace Blanket",
    image: "/topSeller/Blankets/Embrace/e2.jpg",
    price: "₹1399",
    description: "Beautiful floral print for a stylish bedroom.",
  },
  {
    id: 3,
    name: "Soft Touch Embrace Blanket",
    image: "/topSeller/Blankets/Embrace/e3.jpg",
    price: "₹1499",
    description: "Experience the ultra-soft touch of this blanket.",
  },
  {
    id: 4,
    name: "Luxury Embrace Blanket",
    image: "/topSeller/Blankets/Embrace/e4.jpg",
    price: "₹1599",
    description: "Add luxury to your sleep with this premium blanket.",
  },
  {
    id: 5,
    name: "Elegant Embrace Blanket",
    image: "/topSeller/Blankets/Embrace/e5.jpg",
    price: "₹1499",
    description: "Elegant design for a classy bedroom look.",
  },
  {
    id: 6,
    name: "Printed Embrace Blanket",
    image: "/topSeller/Blankets/Embrace/e6.jpg",
    price: "₹1399",
    description: "Attractive printed blanket for daily use.",
  },
  {
    id: 7,
    name: "Warm Single Blanket",
    image: "/topSeller/Blankets/Single/s1.jpg",
    price: "₹1299",
    description: "Stay cosy with this warm single blanket.",
  },
  {
    id: 8,
    name: "Floral Single Blanket",
    image: "/topSeller/Blankets/Single/s2.jpg",
    price: "₹1399",
    description: "Beautiful floral print for a stylish bedroom.",
  },
  {
    id: 9,
    name: "Soft Touch Blanket",
    image: "/topSeller/Blankets/Single/s3.jpg",
    price: "₹1499",
    description: "Experience the ultra-soft touch of this blanket.",
  },
  {
    id: 10,
    name: "Luxury Single Blanket",
    image: "/topSeller/Blankets/Single/s4.jpg",
    price: "₹1599",
    description: "Add luxury to your sleep with this premium blanket.",
  },
  {
    id: 11,
    name: "Elegant Single Blanket",
    image: "/topSeller/Blankets/Single/s5.jpg",
    price: "₹1499",
    description: "Elegant design for a classy bedroom look.",
  },
  {
    id: 12,
    name: "Printed Single Blanket",
    image: "/topSeller/Blankets/Single/s6.jpg",
    price: "₹1399",
    description: "Attractive printed blanket for daily use.",
  },
];

export default function BedsheetPage() {
  return (
    <PageLayout
      breadcrumbItems={[
        { label: "Home", link: "/" },
        { label: "Bed" },
        { label: "Blankets" },
      ]}
      heroImage="/topSeller/hero4.png"
      heroTitle="Luxurious Blanket Collection"
      heroSubtitle1="Wrap yourself in warmth and comfort with our premium blankets crafted for all seasons."
      heroSubtitle2="Made from ultra-soft, breathable fabrics that offer the perfect blend of coziness and elegance."
      heroSubtitle3="Elevate your relaxation with timeless designs and unmatched softness, night after night."
    >
      <PremiumProductGrid products={blankets} />
    </PageLayout>
  );
}
