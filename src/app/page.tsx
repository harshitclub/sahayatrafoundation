import AboutSection from "@/components/local/homepage/aboutSection/AboutSection";
import Hero from "@/components/local/homepage/heroSection/Hero";
import ImpactSection from "@/components/local/homepage/impact/ImpactSection";
import NewsAndStories from "@/components/local/homepage/newsAndStories/NewsAndStories";
import Partners from "@/components/local/homepage/partners/Partners";
import Testimonials from "@/components/local/homepage/testimonials/Testimonials";
import WhatWeDo from "@/components/local/homepage/whatWeDo/WhatWeDo";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ImpactSection />
      <WhatWeDo />
      <NewsAndStories />
      <Partners />
      <Testimonials />
    </>
  );
}
