import AboutSection from "@/components/local/homepage/aboutSection/AboutSection";
import Hero from "@/components/local/homepage/heroSection/Hero";
import ImpactSection from "@/components/local/homepage/impact/ImpactSection";
import WhatWeDo from "@/components/local/homepage/whatWeDo/WhatWeDo";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ImpactSection />
      <WhatWeDo />
    </>
  );
}
