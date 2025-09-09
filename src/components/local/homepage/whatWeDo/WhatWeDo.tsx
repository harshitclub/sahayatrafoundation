import Link from "next/link";
import "./style.css";
import health from "@/media/whatWeDo/health.jpg";
import legal from "@/media/whatWeDo/legal.jpg";
import livelihood from "@/media/whatWeDo/livelihood.jpg";
import womenEmpowerment from "@/media/whatWeDo/womenEmpowerment.jpg";
import education from "@/media/whatWeDo/education.jpg";
import Image from "next/image";
export default function WhatWeDo() {
  return (
    <>
      <section className="whatWeDo w-full flex items-center justify-center py-20">
        <div className="whatWeDoContainer width90 maxWidth">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12 relative ">
            What We <span className="fontCaveat text-[#7c122e]">Do</span>
            <span className="block w-16 h-1 bg-[#7c122e] mx-auto mt-4 rounded-full"></span>
          </h2>
          <div className="whatWeDoTabs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="whatWeDoTab">
              <Image
                src={education}
                alt="Education & Skill Development Image"
                className="mb-2"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Education &amp; Skill Development
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-justify">
                  We help children and youth unlock their potential through
                  learning support, digital literacy, career guidance, and
                  vocational training—bridging the gap between education and
                  employability.
                </p>
                <Link
                  href="#"
                  className="mt-auto text-[#7c122e] font-medium hover:underline"
                >
                  Learn More ➝
                </Link>
              </div>
            </div>
            <div className="whatWeDoTab">
              <Image
                src={womenEmpowerment}
                alt="Women Empowerment Image"
                className="mb-2"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Women Empowerment
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-justify">
                  We empower women with skills in tailoring, handicrafts, food
                  processing, and digital tools—supporting them to build small
                  businesses, self-help groups, and independent livelihoods.
                </p>
                <Link
                  href="#"
                  className="mt-auto text-[#7c122e] font-medium hover:underline"
                >
                  Learn More ➝
                </Link>
              </div>
            </div>
            <div className="whatWeDoTab">
              <Image
                src={legal}
                alt="Legal Awareness &amp; Protection Image"
                className="mb-2"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Legal Awareness &amp; Protection
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-justify">
                  Through awareness drives on POSH & POCSO, workplace rights,
                  and women’s safety, we educate communities on their legal
                  rights and connect them with experts for guidance and
                  protection.
                </p>
                <Link
                  href="#"
                  className="mt-auto text-[#7c122e] font-medium hover:underline"
                >
                  Learn More ➝
                </Link>
              </div>
            </div>
            <div className="whatWeDoTab">
              <Image
                src={health}
                alt="Health &amp; Well-Being Image"
                className="mb-2"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Health &amp; Well-Being
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-justify">
                  We promote healthier communities with programs on nutrition,
                  hygiene, mental wellness, and preventive care, while also
                  providing access to medical camps and consultations.
                </p>
                <Link
                  href="#"
                  className="mt-auto text-[#7c122e] font-medium hover:underline"
                >
                  Learn More ➝
                </Link>
              </div>
            </div>
            <div className="whatWeDoTab">
              <Image
                src={livelihood}
                alt="Entrepreneurship &amp; Livelihoods Image"
                className="mb-2"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Entrepreneurship &amp; Livelihoods
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-justify">
                  We nurture grassroots entrepreneurship with training,
                  mentoring, and market access—helping individuals turn skills
                  into sustainable businesses and secure livelihoods
                </p>
                <Link
                  href="#"
                  className="mt-auto text-[#7c122e] font-medium hover:underline"
                >
                  Learn More ➝
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
