import PageLayout from "@/components/PageLayout";
import PremiumProductGrid from "@/components/PremiumProductGrid";

const towels = [
  {
    id: 1,
    name: "Jacaqua Towels",
    image: "/topSeller/Towels/t1.jpg",
    price: "₹944",
    description: "Experience ultimate softness with these premium Jacaqua towels.",
  },
  {
    id: 2,
    name: "Jacaqua Towels",
    image: "/topSeller/Towels/t2.jpg",
    price: "₹944",
    description: "Experience ultimate softness with these premium Jacaqua towels.",
  },
  {
    id: 3,
    name: "Jacaqua Towels",
    image: "/topSeller/Towels/t3.jpg",
    price: "₹944",
    description: "Experience ultimate softness with these premium Jacaqua towels.",
  },
  {
    id: 4,
    name: "Jacaqua Towels",
    image: "/topSeller/Towels/t4.jpg",
    price: "₹944",
    description: "Experience ultimate softness with these premium Jacaqua towels.",
  },
  {
    id: 5,
    name: "Jacaqua Towels",
    image: "/topSeller/Towels/t5.jpg",
    price: "₹944",
    description: "Experience ultimate softness with these premium Jacaqua towels.",
  },
  {
    id: 6,
    name: "Jacaqua Towels",
    image: "/topSeller/Towels/t6.jpg",
    price: "₹944",
    description: "Experience ultimate softness with these premium Jacaqua towels.",
  },
   {
    id: 7,
    name: "Egyptian Cotton Towels",
    image: "/topSeller/Towels/t7.jpg",
    price: "₹1799",
    description: "Luxurious Egyptian cotton towels for unmatched softness and absorbency.",
  },
  {
    id: 8,
    name: "Egyptian Cotton Towels",
    image: "/topSeller/Towels/t8.jpg",
    price: "₹1799",
    description: "Luxurious Egyptian cotton towels for unmatched softness and absorbency.",
  },
  {
    id: 9,
    name: "Hygrocotton Towels",
    image: "/topSeller/Towels/t9.jpg",
    price: "₹1529",
    description: "Soft and ultra-absorbent Hygrocotton towels for luxurious comfort.",
  },
  {
    id: 10,
    name: "Hygrocotton Towels",
    image: "/topSeller/Towels/t10.jpg",
    price: "₹1529",
    description: "Soft and ultra-absorbent Hygrocotton towels for luxurious comfort.",
  },
  {
    id: 11,
    name: "Hygrocotton Towels",
    image: "/topSeller/Towels/t11.jpg",
    price: "₹1529",
    description: "Soft and ultra-absorbent Hygrocotton towels for luxurious comfort.",
  },
  {
    id: 12,
    name: "Hygrocotton Towels",
    image: "/topSeller/Towels/t12.jpg",
    price: "₹1529",
    description: "Soft and ultra-absorbent Hygrocotton towels for luxurious comfort.",
  },
  {
    id: 13,
    name: "Hygrocotton Towels",
    image: "/topSeller/Towels/t13.jpg",
    price: "₹1529",
    description: "Soft and ultra-absorbent Hygrocotton towels for luxurious comfort.",
  },
  {
    id: 14,
    name: "Hygrocotton Towels",
    image: "/topSeller/Towels/t14.jpg",
    price: "₹1529",
    description: "Soft and ultra-absorbent Hygrocotton towels for luxurious comfort.",
  },
  
  {
    id: 15,
    name: "Exotica Towels",
    image: "/topSeller/Towels/t15.jpg",
    price: "₹1439",
    description: "Elegant and premium Exotica towels for a luxurious bath experience.",
  },
  {
    id: 16,
    name: "Exotica Towels",
    image: "/topSeller/Towels/t16.jpg",
    price: "₹1439",
    description: "Elegant and premium Exotica towels for a luxurious bath experience.",
  },
  {
    id: 17,
    name: "Exotica Towels",
    image: "/topSeller/Towels/t17.jpg",
    price: "₹1439",
    description: "Elegant and premium Exotica towels for a luxurious bath experience.",
  },
  {
    id: 18,
    name: "Exotica Towels",
    image: "/topSeller/Towels/t18.jpg",
    price: "₹1439",
    description: "Elegant and premium Exotica towels for a luxurious bath experience.",
  },
  {
    id: 19,
    name: "Exotica Towels",
    image: "/topSeller/Towels/t19.jpg",
    price: "₹1439",
    description: "Elegant and premium Exotica towels for a luxurious bath experience.",
  },
  {
    id: 20,
    name: "Exotica Towels",
    image: "/topSeller/Towels/t20.jpg",
    price: "₹1439",
    description: "Elegant and premium Exotica towels for a luxurious bath experience.",
  },
  {
    id: 21,
    name: "Opulent Towels",
    image: "/topSeller/Towels/t21.jpg",
    price: "₹1169",
    description: "Indulge in luxury with these ultra-soft Opulent towels.",
  },
  {
    id: 22,
    name: "Opulent Towels",
    image: "/topSeller/Towels/t22.jpg",
    price: "₹1169",
    description: "Indulge in luxury with these ultra-soft Opulent towels.",
  },
  {
    id: 23,
    name: "Opulent Towels",
    image: "/topSeller/Towels/t23.jpg",
    price: "₹1169",
    description: "Indulge in luxury with these ultra-soft Opulent towels.",
  },
  {
    id: 24,
    name: "Opulent Towels",
    image: "/topSeller/Towels/t24.jpg",
    price: "₹1169",
    description: "Indulge in luxury with these ultra-soft Opulent towels.",
  },
  {
    id: 25,
    name: "Opulent Towels",
    image: "/topSeller/Towels/t25.jpg",
    price: "₹1169",
    description: "Indulge in luxury with these ultra-soft Opulent towels.",
  },
  {
    id: 26,
    name: "Airsoft Towels",
    image: "/topSeller/Towels/t26.jpg",
    price: "₹719",
    description: "Lightweight and ultra-soft Airsoft towels for quick drying.",
  },
  {
    id: 27,
    name: "Airsoft Towels",
    image: "/topSeller/Towels/t27.jpg",
    price: "₹719",
    description: "Lightweight and ultra-soft Airsoft towels for quick drying.",
  },
  {
    id: 28,
    name: "Airsoft Towels",
    image: "/topSeller/Towels/t28.jpg",
    price: "₹719",
    description: "Lightweight and ultra-soft Airsoft towels for quick drying.",
  },

];


export default function Towels() {
  return (
    <PageLayout
      breadcrumbItems={[
        { label: "Home", link: "/" },
        { label: "Bath" },
        { label: "Towels" },
      ]}
      heroImage="/images/bathSection/bath4/b1.png"
      heroTitle="Premium Towels Collection"
      heroSubtitle1="Wrap yourself in softness with our premium towels."
      heroSubtitle2="Highly absorbent, quick-drying, and gentle on your skin."
      heroSubtitle3="Upgrade your bath experience with luxury and comfort every day."
    >
      <PremiumProductGrid products={towels} />
    </PageLayout>
  );
}
