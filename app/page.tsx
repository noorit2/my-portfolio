import { ContactMeSection } from "@/src/features/contact-me-section";
import { MainHeroSection } from "@/src/features/main-hero-section";
import ProjectsSection from "@/src/features/projects/ui/ProjectsSection";
import { SkillsSection } from "@/src/features/skills";

export default function Home() {
  return (
    <main className="relative">
      <MainHeroSection/>
      <ProjectsSection/>
      <SkillsSection/>
      <ContactMeSection />
    </main>
  );
}
