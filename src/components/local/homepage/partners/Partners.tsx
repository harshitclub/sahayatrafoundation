import React from "react";
import Image from "next/image";
import unichef from "@/media/partners/UNICEF_Logo.png";
import "./style.css";

const partners = [
  { id: 1, name: "UNICEF", logo: unichef },
  { id: 2, name: "WHO", logo: unichef },
  { id: 3, name: "Red Cross", logo: unichef },
  { id: 4, name: "Save the Children", logo: unichef },
  { id: 5, name: "UNDP", logo: unichef },
];

const Partners = () => {
  return (
    <section
      className="w-full flex items-center justify-center py-20 bg-gray-50"
      aria-labelledby="partners-heading"
    >
      <div className="maxWidth width90">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            id="partners-heading"
            className="text-3xl md:text-4xl font-bold text-gray-800"
          >
            Our Partners
            <span className="block w-16 h-1 bg-[#7c122e] mx-auto mt-4 rounded-full"></span>
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We are proud to collaborate with national and international
            organizations that share our vision for a better future.
          </p>
        </div>

        {/* Logos */}
        <ul className="flex flex-wrap items-center justify-center gap-10">
          {partners.map((p) => (
            <li
              key={p.id}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition"
            >
              <Image
                src={p.logo}
                alt={`${p.name} logo`}
                width={140}
                height={60}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Partners;
