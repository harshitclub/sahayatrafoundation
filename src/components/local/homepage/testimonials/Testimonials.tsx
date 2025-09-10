import React from "react";
import Image from "next/image";
import test from "@/media/testimonials/test.jpg";

const testimonials = [
  {
    id: 1,
    name: "Anita Sharma",
    role: "Beneficiary",
    text: "The NGO's women empowerment program gave me confidence and financial independence. I’m truly grateful.",
    img: test,
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Volunteer",
    text: "Volunteering here has been a life-changing experience. The dedication of the team is inspiring!",
    img: test,
  },
  {
    id: 3,
    name: "Priya Singh",
    role: "Donor",
    text: "I trust this NGO completely. They are transparent and ensure that every donation makes an impact.",
    img: test,
  },
];

const Testimonials = () => {
  return (
    <section className="w-full flex items-center justify-center py-20 bg-white">
      <div className="maxWidth width90">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Testimonials
            <span className="block w-16 h-1 bg-[#7c122e] mx-auto mt-4 rounded-full"></span>
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Hear from our beneficiaries, volunteers, and supporters about their
            experiences with us.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition"
            >
              <Image
                src={t.img}
                alt={t.name}
                width={80}
                height={80}
                className="rounded-full mb-4"
              />
              <p className="text-gray-700 italic">“{t.text}”</p>
              <h4 className="mt-4 font-semibold text-gray-900">{t.name}</h4>
              <span className="text-sm text-gray-500">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
