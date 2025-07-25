import PageLayout from "@/components/PageLayout";
import PremiumProductGrid from "@/components/PremiumProductGrid";

const towels = [
  {
    id: 1,
    name: "Jacaqua hand Towel",
    image: "/topSeller/Hand_Towels/t1.jpg",
    price: "₹539",
    description: "Experience ultimate softness with this cotton towel.",
  },
  {
    id: 2,
    name: "Jacaqua hand Towel",
    image: "/topSeller/Hand_Towels/t2.jpg",
    price: "₹539",
    description: "Premium quality bath towel for everyday luxury.",
  },
  {
    id: 3,
    name: "Exotica hand towel",
    image: "/topSeller/Hand_Towels/t3.jpg",
    price: "₹719",
    description: "Elegant design hand towel for your bathroom decor.",
  },
  {
    id: 4,
    name: "Colorfas hand towel ",
    image: "/topSeller/Hand_Towels/t4.jpg",
    price: "₹449",
    description: "Quick-drying towel ideal for daily use.",
  },
];


export default function Towels() {
  return (
    <PageLayout
      breadcrumbItems={[
        { label: "Home", link: "/" },
        { label: "Bath" },
        { label: "Hand-Towels" },
      ]}
      heroImage="/topSeller/hero2.png"
      heroTitle="Premium Towels Collection"
      heroSubtitle1="Wrap yourself in softness with our premium towels."
      heroSubtitle2="Highly absorbent, quick-drying, and gentle on your skin."
      heroSubtitle3="Upgrade your bath experience with luxury and comfort every day."
    >
      <PremiumProductGrid products={towels} />
    </PageLayout>
  );
}
