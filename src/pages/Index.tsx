import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import UnitSelector from "@/components/UnitSelector";
import StrategicHub from "@/components/StrategicHub";
import AmenitiesGrid from "@/components/AmenitiesGrid";
import GallerySection from "@/components/GallerySection";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  useEffect(() => {
    document.title = "Maya Stays — Premium BnB Suites in Busia, Kenya";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground pb-20 md:pb-0 overflow-x-hidden max-w-full">
      <Navbar />
      <main className="overflow-x-hidden">
        <HeroSection />
        <div className="section-divider" />
        <UnitSelector />
        <div className="section-divider" />
        <StrategicHub />
        <div className="section-divider" />
        <AmenitiesGrid />
        <div className="section-divider" />
        <GallerySection />
        <div className="section-divider" />
        <Testimonials />
        <div className="section-divider" />
        <FAQSection />
        <div className="section-divider" />
        <BookingSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
