import AboutSection from '@/components/sections/about-section';
import ContactSection from '@/components/sections/contact-section';
import HeroSection from '@/components/sections/hero-section';
import ProjectsSection from '@/components/sections/projects-section';
import SkillsSection from '@/components/sections/skills-section';
import FadeInOnScroll from '@/components/fade-in-on-scroll';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FadeInOnScroll>
        <AboutSection />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <SkillsSection />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <ProjectsSection limit={3} />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <ContactSection />
      </FadeInOnScroll>
    </>
  );
}
