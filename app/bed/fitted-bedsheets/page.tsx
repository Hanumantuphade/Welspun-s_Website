

import PageLayout from "@/components/PageLayout";
import PremiumProductGrid from "@/components/PremiumProductGrid";

const fittedBedsheets = [
  {
    id: 1,
    name: "Comfort Fit Bedsheet",
    image: "/topSeller/Bedsheets/fitted/f1.jpg",
    price: "₹1599",
    description: "Snug fit and soft fabric for a perfect night's sleep.",
  },
  {
    id: 2,
    name: "Luxury Fitted Bedsheet",
    image: "/topSeller/Bedsheets/fitted/f2.jpg",
    price: "₹1799",
    description: "Add a luxurious touch to your bed with this fitted sheet.",
  },
  {
    id: 3,
    name: "Printed Comfort Bedsheet",
    image: "/topSeller/Bedsheets/fitted/f3.jpg",
    price: "₹1499",
    description: "Beautiful printed design with deep pockets for secure fitting.",
  },
  {
    id: 4,
    name: "Elegant Fitted Bedsheet",
    image: "/topSeller/Bedsheets/fitted/f4.jpg",
    price: "₹1699",
    description: "Elegant patterns and soft texture for a classy look.",
  },
  {
    id: 5,
    name: "Soft Touch Fitted Sheet",
    image: "/topSeller/Bedsheets/fitted/f5.jpg",
    price: "₹1399",
    description: "Ultra-soft touch and wrinkle-resistant fabric.",
  },
  {
    id: 6,
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
        { label: "Fitted-Bedsheets" },
      ]}
      heroImage="/topSeller/hero.png"
      heroTitle="Fitted Bedsheet Collection"
      heroSubtitle1="Experience the perfect fit for your mattress with our fitted bedsheets."
      heroSubtitle2="Enjoy wrinkle-free bedding with ultra-soft fabrics and secure elastic corners."
      heroSubtitle3="Wake up to a neat, elegant, and comfortable bed every morning."
    >
      <PremiumProductGrid products={fittedBedsheets} />
    </PageLayout>
  );
}
