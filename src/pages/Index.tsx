import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import TeamSection from "@/components/TeamSection";
import CareersSection from "@/components/CareersSection";
import ContactSection from "@/components/ContactSection";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <div className="road-divider" />
      <ProjectsSection />
      <div className="road-divider" />
      <TeamSection />
      <div className="road-divider" />
      <CareersSection />
      <div className="road-divider" />
      <ContactSection />
    </div>
  );
};

export default Index;
