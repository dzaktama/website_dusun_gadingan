import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VillageProfile from "@/components/VillageProfile";
import CatalogSection from "@/components/CatalogSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <VillageProfile />
        <CatalogSection />
        <LocationSection />
      </main>
      <Footer />
    </>
  );
}
