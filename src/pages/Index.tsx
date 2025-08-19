
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import AboutSection from "@/components/AboutSection";
import TeamStructure from "@/components/TeamStructure";
import ContactSection from "@/components/ContactSection";
import OurVision from "./OurVision";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="mt-16">
        <AboutHero />
        <TeamStructure />
        <AboutSection />
        <OurVision />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
