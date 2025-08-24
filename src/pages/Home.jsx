import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import Particles from "../components/Particles";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* theme toggle */}
      <ThemeToggle />
      {/* Background effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles
          autoCount
          autoDensity={1500} // denser (smaller number = more)
          particleSpread={20}
          speed={0.1}
          moveParticlesOnHover
          particleBaseSize={90}
          className="w-full h-full "
        />
      </div>
      {/* Navbar */}
      <Navbar />
      {/* Main content */}
      <main className="relative z-10   ">
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};
