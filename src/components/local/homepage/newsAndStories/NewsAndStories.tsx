import "./style.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import women from "@/media/aboutSec/aboutSecImage.jpg";

// Dummy data (baad me tu API ya DB se replace kar sakta hai)
const stories = [
  {
    id: 1,
    title: "Empowering Women in Rural Areas",
    date: "Aug 25, 2025",
    desc: "Our recent workshop helped 50+ women gain financial literacy and digital skills.",
    img: women,
  },
  {
    id: 2,
    title: "Tree Plantation Drive",
    date: "Aug 10, 2025",
    desc: "With the help of our volunteers, we planted over 1,000 trees in 3 villages.",
    img: women,
  },
  {
    id: 3,
    title: "Education Support for Children",
    date: "July 28, 2025",
    desc: "We distributed books and stationery to 200+ underprivileged students.",
    img: women,
  },
];

const NewsAndStories = () => {
  return (
    <section className="newsAndStoriesSec w-full flex items-center justify-center py-20 bg-gray-50">
      <div className="nAndSSContainer maxWidth width90">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
            News & Stories
            <span className="block w-16 h-1 bg-[#7c122e] mx-auto mt-4 rounded-full"></span>
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest initiatives, inspiring stories, and
            impact-driven work.
          </p>
        </div>

        {/* Grid of stories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-sm shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={story.img}
                  alt={story.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col">
                <span className="text-sm text-gray-500">{story.date}</span>
                <h3 className="mt-2 text-lg font-semibold text-gray-800">
                  {story.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm flex-grow">
                  {story.desc}
                </p>

                <Link
                  href="#"
                  className="mt-4 text-[#7c122e] font-medium hover:underline"
                >
                  Read More ➝
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Link
            href="/news"
            className="px-6 py-5 bg-[#7c122e] text-white font-semibold rounded-4xl hover:bg-[#5a0e22] transition-colors"
          >
            View All Stories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsAndStories;
