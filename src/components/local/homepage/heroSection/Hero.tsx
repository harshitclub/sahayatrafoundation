"use client";
import { useState, useEffect } from "react";
import "./style.css";
import hero1 from "@/media/hero/hero.jpg";
import hero2 from "@/media/hero/hero1.jpg";
import hero3 from "@/media/hero/hero2.jpg";
import hero4 from "@/media/hero/hero3.jpg";
import Image from "next/image";
import DonateBtn from "../../buttons/donateBtn/DonateBtn";
import GetInvolvedBtn from "../../buttons/getInvolvedBtn/GetInvolvedBtn";

const images = [hero1, hero2, hero3, hero4];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero w-full relative">
      <div className="heroSlider">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`slider ${index}`}
            fill
            className={`sliderImage ${index === currentIndex ? "active" : ""}`}
            priority
          />
        ))}

        <div className="overlay"></div>

        <div className="heroContent flex flex-col items-center width90 maxWidth">
          <h1>
            Together for Change, Together for
            <br /> Tomorrow
          </h1>
          <p>
            Empowering communities, uplifting lives, and creating
            <br /> a brighter future for all. Join us in making a real
            difference today.
          </p>
          <div className="heroBtns flex gap-7">
            <DonateBtn />
            <GetInvolvedBtn />
          </div>
        </div>
      </div>
    </section>
  );
}
