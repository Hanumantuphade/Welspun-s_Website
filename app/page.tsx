import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import CategorySection from "@/components/category-section"
import TopSellers from "@/components/top-sellers"
import Footer from "@/components/footer"
import PromotionalTicker from "@/components/promotional-ticker"

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
      {/* <Footer /> */}
    </div>
  )
}
