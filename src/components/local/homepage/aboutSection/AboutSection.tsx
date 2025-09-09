// AboutSection.tsx
import Image from "next/image";
import aboutImg from "@/media/aboutSec/aboutSecImage.jpg"; // replace with your image
import DonateBtn from "../../buttons/donateBtn/DonateBtn";
import GetInvolvedBtn from "../../buttons/getInvolvedBtn/GetInvolvedBtn";

export default function AboutSection() {
  return (
    <section className="aboutSection w-full py-12 md:py-20 flex items-center justify-center">
      <div className="aboutSectionContainer maxWidth width90 px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT: Text */}
          <div className="aboutText">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              About{" "}
              <span className="fontCaveat text-[#7c122e] text-4xl">
                Saha Yatra Foundation
              </span>
            </h2>

            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed max-w-prose">
              “Together for Change, Together for Tomorrow” — Saha Yatra
              Foundation is a Section-8 organisation committed to empowering
              women, supporting education, promoting health awareness, and
              protecting rights so communities can live with dignity and
              self-reliance.
            </p>

            {/* Quick mission + vision */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="text-sm font-semibold text-gray-800">
                  Our Mission
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Quality education & skill development, women’s
                  entrepreneurship, legal awareness, and preventive health
                  programs that create sustainable livelihoods.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="text-sm font-semibold text-gray-800">
                  Our Vision
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  An inclusive society where education, equality, health and
                  justice are accessible to all — enabling dignity and
                  independence.
                </p>
              </div>
            </div>

            {/* Values chips */}
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Empathy",
                "Integrity",
                "Inclusivity",
                "Collaboration",
                "Sustainability",
              ].map((v) => (
                <span
                  key={v}
                  className="inline-block px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-full"
                >
                  {v}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <GetInvolvedBtn />

              <DonateBtn />
            </div>
          </div>

          {/* RIGHT: Image / Illustration */}
          <div className="aboutImage flex items-center justify-center">
            <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={aboutImg}
                alt="Saha Yatra Foundation - community, education and empowerment"
                width={900}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
