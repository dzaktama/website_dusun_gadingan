import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VillageProfile from "@/components/VillageProfile";
import CatalogSection from "@/components/CatalogSection";
import TestimonialSection from "@/components/TestimonialSection";
import SocialMediaSection from "@/components/SocialMediaSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <VillageProfile />
        <CatalogSection />
        <TestimonialSection />
        <SocialMediaSection />
        <LocationSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
