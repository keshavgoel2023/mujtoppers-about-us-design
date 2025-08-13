
import AboutHero from "@/components/AboutHero";
import AboutSection from "@/components/AboutSection";
import TeamStructure from "@/components/TeamStructure";
import ContactSection from "@/components/ContactSection";
import OurVision from "./OurVision";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AboutHero />
      <TeamStructure />
      <AboutSection />
      <OurVision />
      <ContactSection />
    </div>
  );
};

export default Index;
