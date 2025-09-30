import Link from "next/link";
import "./style.css";
import health from "@/media/whatWeDo/health.jpg";
import legal from "@/media/whatWeDo/legal.jpg";
import livelihood from "@/media/whatWeDo/livelihood.jpg";
import womenEmpowerment from "@/media/whatWeDo/womenEmpowerment.jpg";
import education from "@/media/whatWeDo/education.jpg";
import Image from "next/image";

export default function WhatWeDo() {
  const data = [
    {
      id: 1,
      title: "Education & Skill Development",
      desc: "We help children and youth unlock their potential through learning support, digital literacy, career guidance, and vocational training—bridging the gap between education and employability.",
      img: education,
    },
    {
      id: 2,
      title: "Women Empowerment",
      desc: "We empower women with skills in tailoring, handicrafts, food processing, and digital tools—supporting them to build small businesses, self-help groups, and independent livelihoods.",
      img: womenEmpowerment,
    },
    {
      id: 3,
      title: "Legal Awareness & Protection",
      desc: "Through awareness drives on POSH & POCSO, workplace rights, and women’s safety, we educate communities on their legal rights and connect them with experts for guidance and protection.",
      img: legal,
    },
    {
      id: 4,
      title: "Health & Well-Being",
      desc: "We promote healthier communities with programs on nutrition, hygiene, mental wellness, and preventive care, while also providing access to medical camps and consultations.",
      img: health,
    },
    {
      id: 5,
      title: "Entrepreneurship & Livelihoods",
      desc: "We nurture grassroots entrepreneurship with training, mentoring, and market access—helping individuals turn skills into sustainable businesses and secure livelihoods",
      img: livelihood,
    },
  ];

  return (
    <section
      className="whatWeDo w-full flex items-center justify-center py-20"
      aria-labelledby="what-we-do-heading"
    >
      <div className="whatWeDoContainer width90 maxWidth">
        <h2
          id="what-we-do-heading"
          className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12 relative"
        >
          What We <span className="fontCaveat text-[#7c122e]">Do</span>
          <span className="block w-16 h-1 bg-[#7c122e] mx-auto mt-4 rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.map((item) => (
            <article
              key={item.id}
              className="relative w-full h-64 group overflow-hidden rounded-sm shadow-sm"
            >
              {/* Image */}
              <Image
                src={item.img}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/80 to-transparent translate-y-3/4 group-hover:translate-y-0 transition-transform duration-500"
                aria-hidden="true"
              ></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-4 text-white z-10">
                <h3 className="text-2xl font-bold">{item.title}</h3>

                {/* Hidden visually but available to SR */}
                <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 overflow-hidden">
                  <p className="mt-2 mb-2 text-sm">{item.desc}</p>
                  <Link
                    href="#"
                    className="mt-auto inline-block text-[#ffc107] font-medium hover:underline"
                    aria-label={`Learn more about ${item.title}`}
                  >
                    Learn More ➝
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
