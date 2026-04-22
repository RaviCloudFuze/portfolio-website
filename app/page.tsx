import Hero from "@/components/sections/hero";
import Resume from "@/components/sections/resume";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Profiles from "@/components/sections/profiles";
import Contact from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Resume />
      <Experience />
      <Projects />
      <Skills />
      <Profiles />
      <Contact />
    </>
  );
}
