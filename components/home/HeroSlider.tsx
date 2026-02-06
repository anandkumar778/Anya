"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: "/hero/hero1.png",
    title: 'BE PREPARED FOR ANY CHALLENGE WITH OUR TRUSTED "DARVI" PRODUCTS',
    desc: "We Aanya Enterprisee expertise in serving the security, surveillance, and maintenance needs of our clients and aim for 100% customer satisfaction.",
    btn: "Expand Your Horizon",
  },
  {
    id: 2,
    image: "/hero/hero2.png",
    title: "ADVANCED SURVEILLANCE FOR TOUGH ENVIRONMENTS",
    desc: "Reliable imaging and surveillance systems engineered for critical and extreme operational conditions.",
    btn: "View Products",
  },
  {
    id: 3,
    image: "/hero/hero3.png",
    title: "PRECISION OPTICS FOR MODERN DEFENSE OPERATIONS",
    desc: "High-performance night vision, thermal, and optical solutions built to deliver accuracy and reliability.",
    btn: "Explore Optics",
  },
  {
    id: 4,
    image: "/hero/hero4.png",
    title: "MISSION-READY TECHNOLOGY YOU CAN TRUST",
    desc: "Innovative defense and surveillance equipment designed to perform when it matters the most.",
    btn: "Discover Technology",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  // ✅ AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] md:h-[90vh] overflow-hidden">

      {/* Background Image */}
      <Image
        src={slides[active].image}
        alt="Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6">
        <div className="
          bg-black/40 backdrop-blur-md
          p-5 sm:p-6 md:p-8
          max-w-full sm:max-w-lg
          text-white rounded-lg
        ">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-3 sm:mb-4">
            {slides[active].title}
          </h1>

          <div className="w-12 sm:w-16 h-[2px] bg-white mb-3 sm:mb-4" />

          <p className="text-xs sm:text-sm md:text-base mb-4 sm:mb-6 text-gray-200">
            {slides[active].desc}
          </p>

          <button className="bg-white text-black px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-md font-semibold hover:bg-orange-500 hover:text-white transition">
            {slides[active].btn}
          </button>
        </div>
      </div>

      {/* SLIDER DOTS */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1 rounded-full transition-all ${
              active === i
                ? "w-8 sm:w-10 bg-orange-500"
                : "w-6 sm:w-8 bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
