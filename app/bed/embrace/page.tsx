import PageLayout from "@/components/PageLayout";
import PremiumProductGrid from "@/components/PremiumProductGrid";

const embraceBlankets = [
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
    name: "Classic Embrace Blanket",
    image: "/topSeller/Blankets/Embrace/e7.jpg",
    price: "₹1299",
    description: "Classic design with unmatched comfort.",
  },
  {
    id: 8,
    name: "Comfort Embrace Blanket",
    image: "/topSeller/Blankets/Embrace/e8.jpg",
    price: "₹1599",
    description: "Enjoy ultimate comfort with this soft blanket.",
  },
];




export default function BedsheetPage() {
  return (
    <PageLayout
      breadcrumbItems={[
        { label: "Home", link: "/" },
        { label: "Bed" },
        { label: "Embrace-Blankets" },
      ]}
      heroImage="/topSeller/hero6.png"
      heroTitle="Embrace Blankets Collection"
      heroSubtitle1="Wrap yourself in warmth and comfort with our Embrace blankets."
      heroSubtitle2="Designed for softness, durability, and stylish elegance."
      heroSubtitle3="Stay cosy and sleep peacefully every night."
    >
      <PremiumProductGrid products={embraceBlankets} />
    </PageLayout>
  );
}
