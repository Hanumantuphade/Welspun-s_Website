import PageLayout from "@/components/PageLayout";
import PremiumProductGrid from "@/components/PremiumProductGrid";

const orthopedicMattresses = [
  {
    id: 1,
    name: "Ortho Comfort Mattress",
    image: "/topSeller/Orthopedic/m1.jpg",
    price: "₹8499",
    description: "Provides excellent back support with high-density foam.",
  },
  {
    id: 2,
    name: "Spine Care Orthopedic Mattress",
    image: "/topSeller/Orthopedic/m2.jpg",
    price: "₹9499",
    description: "Designed to align your spine for restful sleep and health.",
  },
  {
    id: 3,
    name: "Premium Ortho Support Mattress",
    image: "/topSeller/Orthopedic/m3.jpg",
    price: "₹10499",
    description: "Premium orthopedic mattress for superior body support.",
  },
  {
    id: 4,
    name: "Back Relief Ortho Mattress",
    image: "/topSeller/Orthopedic/m4.jpg",
    price: "₹9999",
    description: "Relieves pressure points and reduces back pain effectively.",
  },
  {
    id: 5,
    name: "Advanced OrthoCare Mattress",
    image: "/topSeller/Orthopedic/m5.jpg",
    price: "₹10999",
    description: "Engineered with advanced support layers for enhanced comfort.",
  },
  {
    id: 6,
    name: "Ultimate Orthopedic Mattress",
    image: "/topSeller/Orthopedic/m6.jpg",
    price: "₹11999",
    description: "Provides ultimate support and durability for long-lasting relief.",
  },
];


export default function OrthopedicMattresses() {
  return (
    <PageLayout
      breadcrumbItems={[
        { label: "Home", link: "/" },
        { label: "Mattresses" },
        { label: "Orthopedic-Mattresses" },
      ]}
      heroImage="/images/MattressSection/mat3/m1.png"
      heroTitle="Orthopedic Mattresses Collection"
      heroSubtitle1="Experience unmatched back support with our orthopedic mattresses."
      heroSubtitle2="Engineered for spinal alignment and restful sleep."
      heroSubtitle3="Wake up refreshed and pain-free every morning."
    >
      <PremiumProductGrid products={orthopedicMattresses} />
    </PageLayout>
  );
}
