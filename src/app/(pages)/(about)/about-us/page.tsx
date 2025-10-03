import WantToHelp from "@/components/local/wantToHelp/WantToHelp";
import "./style.css";
import Partners from "@/components/local/homepage/partners/Partners";
import ImpactSection from "@/components/local/homepage/impact/ImpactSection";
import WhatWeDo from "@/components/local/homepage/whatWeDo/WhatWeDo";
export default function AboutUs() {
  return (
    <>
      <section className="aboutUs w-full flex items-center justify-center flex-col">
        <div className="aboutUsHeader w-full flex items-center justify-center">
          <div className="aboutHContainer maxWidth width90 text-center">
            <h1 className="text-5xl font-semibold mb-5">About Us</h1>
            <p className="text-4xl fontCaveat">
              It&apos;s easier to take than to give. It&apos;s nobler to give
              than to take.
              <br />
              The thrill of taking lasts a day. The thrill of giving lasts a
              lifetime.
            </p>
          </div>
        </div>
        <div className="aboutUsPara w-full flex items-center justify-center">
          <div className="aboutUsParaContainer w-6xl">
            <p className="text-xl text-gray-600 text-center">
              At{" "}
              <span className="fontCaveat text-3xl font-semibold">
                Saha Yatra Foundation
              </span>
              , we believe real change begins with small steps taken together.
              Every day, we work hand in hand with communities to create
              opportunities that empower women, support children’s education,
              spread health awareness, and protect basic rights.
              <br />
              Our journey is about more than just programs—it’s about people,
              dignity, and hope. We stand with those who often go unheard,
              helping them learn, earn, and live with confidence. Because when
              one life transforms, it inspires many more, and together we move
              towards a better tomorrow.
            </p>
          </div>
        </div>
      </section>
      <section className="aboutMissionVision w-full flex items-center justify-center">
        <div className="aboutMVContainer width90 maxWidth flex gap-7">
          <div className="aboutMVLeft flex items-start flex-col justify-end">
            <h2 className="text-3xl font-semibold mb-3">Our Mission</h2>
            <p className="text-xl text-justify">
              We aim to empower women, support children’s education, spread
              health and legal awareness, and create sustainable
              livelihoods—turning learning into earning and awareness into
              action.
            </p>
          </div>
          <div className="aboutMVRight flex items-start flex-col justify-end">
            <h2 className="text-3xl font-semibold mb-3">Our Vision</h2>
            <p className="text-xl text-justify">
              A society where education, equality, health, and justice are
              accessible to all, enabling every individual to live with dignity,
              confidence, and self-reliance.
            </p>
          </div>
        </div>
      </section>
      <ImpactSection />
      <WhatWeDo />
      <Partners />
      <WantToHelp />
    </>
  );
}
