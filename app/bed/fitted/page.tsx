import PageLayout from "@/components/PageLayout";
import PremiumProductGrid from "@/components/PremiumProductGrid";

const premiumBedsheets = [
  {
    id: 1,
    name: "Fitted Cotton Bedsheet",
    image: "/topSeller/Bedsheets/fitted/f1.jpg",
    price: "₹1599",
    description: "Perfectly fitted cotton bedsheet for a smooth look.",
  },
  {
    id: 2,
    name: "Luxury Fitted Floral Bedsheet",
    image: "/topSeller/Bedsheets/fitted/f2.jpg",
    price: "₹1899",
    description: "Luxury floral fitted bedsheet for elegant bedrooms.",
  },
  {
    id: 3,
    name: "Elastic Fitted Bedsheet",
    image: "/topSeller/Bedsheets/fitted/f3.jpg",
    price: "₹1799",
    description: "Elasticated fitted bedsheet for perfect mattress grip.",
  },
  {
    id: 4,
    name: "Premium Fitted Comfort",
    image: "/topSeller/Bedsheets/fitted/f4.jpg",
    price: "₹2099",
    description: "Premium comfort with a fitted design for neat bedding.",
  },
  {
    id: 5,
    name: "Elegant Fitted Design",
    image: "/topSeller/Bedsheets/fitted/f5.jpg",
    price: "₹1999",
    description: "Add elegance with beautifully designed fitted bedsheets.",
  },
  {
    id: 6,
    name: "Soft Touch Fitted Bedsheet",
    image: "/topSeller/Bedsheets/fitted/f6.jpg",
    price: "₹1699",
    description: "Enjoy softness with our ultra-smooth fitted bedsheets.",
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
      heroImage="/topSeller/hero.png"
      heroTitle="Fitted Bedsheet Collection"
      heroSubtitle1="Experience the perfect fit for your mattress with our fitted bedsheets."
      heroSubtitle2="Enjoy wrinkle-free bedding with ultra-soft fabrics and secure elastic corners."
      heroSubtitle3="Wake up to a neat, elegant, and comfortable bed every morning."
    >
      <PremiumProductGrid products={premiumBedsheets} />
    </PageLayout>
  );
}
