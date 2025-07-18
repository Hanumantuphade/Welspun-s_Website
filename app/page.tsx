import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import CategorySection from "@/components/category-section"
import TopSellers from "@/components/top-sellers"
// import FeaturedProducts from "@/components/featured-products"
// import MattressSection from "@/components/mattress-section"
// import ShopTheLook from "@/components/shop-the-look"
// import PromotionalBanner from "@/components/promotional-banner"
// import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"
import PromotionalTicker from "@/components/promotional-ticker"
// import Testimonials from "@/components/Testimonials"
import SocialSidebar from "@/components/SocialSidebar"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Scrolling promotional ticker */}
      <PromotionalTicker />
      <SocialSidebar/>

      <Header />
      <HeroSection />
      <CategorySection />
      <TopSellers />
      {/* <Testimonials/> */}
      {/* <FeaturedProducts /> */}
      {/* <MattressSection /> */}
      {/* <ShopTheLook /> */}
      {/* <PromotionalBanner /> */}
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </div>
  )
}
