import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TechnologiesSection } from "@/components/TechnologiesSection";
import { BlogSection } from "@/components/BlogSection";
import { EducationSection } from "@/components/EducationSection";
import { LanguagesSection } from "@/components/LanguagesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TechnologiesSection />
        <BlogSection />
        <EducationSection />
        <LanguagesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
