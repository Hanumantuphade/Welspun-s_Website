import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import CategorySection from "@/components/category-section"
// import TopSellers from "@/components/top-sellers"
// import FeaturedProducts from "@/components/featured-products"
// import MattressSection from "@/components/mattress-section"
// import ShopTheLook from "@/components/shop-the-look"
// import PromotionalBanner from "@/components/promotional-banner"
// import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"
import PromotionalTicker from "@/components/promotional-ticker"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Scrolling promotional ticker */}
      <PromotionalTicker />

      <Header />
      <HeroSection />
      <CategorySection />
      {/* <TopSellers /> */}
      {/* <FeaturedProducts /> */}
      {/* <MattressSection /> */}
      {/* <ShopTheLook /> */}
      {/* <PromotionalBanner /> */}
      {/* <Newsletter /> */}
      <Footer />
    </div>
  )
}
