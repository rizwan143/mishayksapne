import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import LoadingScreen from "./components/ui/LoadingScreen";
import HeroSection from "./components/sections/HeroSection";
import DestinationsSection from "./components/sections/DestinationsSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import ProgressSection from "./components/sections/ProgressSection";
import ContributeSection from "./components/sections/ContributeSection";
import CountdownSection from "./components/sections/CountdownSection";
import TeamSection from "./components/sections/TeamSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import GallerySection from "./components/sections/GallerySection";
import FAQSection from "./components/sections/FAQSection";
import ContactSection from "./components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <HeroSection />
        <DestinationsSection />
        <FeaturesSection />
        <ProgressSection />
        <ContributeSection />
        <CountdownSection />
        <TeamSection />
        <TestimonialsSection />
        <GallerySection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
