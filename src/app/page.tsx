import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { CapabilitiesSection } from "../components/CapabilitiesSection";
import { IndustriesSection } from "../components/IndustriesSection";
import { MetalsSection } from "../components/MetalsSection";
import { ExcellenceSection } from "../components/ExcellenceSection";
import { ContactSection } from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <CapabilitiesSection />
      <IndustriesSection />
      <MetalsSection />
      <ExcellenceSection />
      <ContactSection />
    </>
  );
}
