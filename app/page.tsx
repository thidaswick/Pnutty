import HeroSection from "@/components/sections/HeroSection";
import OurStorySection from "@/components/sections/OurStorySection";
import ProductsSection from "@/components/sections/ProductsSection";
import FlavourHighlightSection from "@/components/sections/FlavourHighlightSection";
import HowToEnjoySection from "@/components/sections/HowToEnjoySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <OurStorySection />
      <FlavourHighlightSection />
      <HowToEnjoySection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}
