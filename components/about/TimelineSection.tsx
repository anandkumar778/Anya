"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const timelineData = [
  {
    year: "2001–2004",
    text: "Established as Solutions & System Integrator in defence sector",
    image: "/hero/9777.jpg",
  },
  {
    year: "2005–2010",
    text: "Expanded into opto-electronic systems and indigenous solutions",
    image: "/hero/9111.jpg",
  },
  {
    year: "2011–2020",
    text: "Recognized as OEM and partnered with major government agencies",
    image: "/hero/9222.jpg",
  },
  {
    year: "2020–2022",
    text: "Established as Solutions & System Integrator in defence sector",
    image: "/hero/9333.jpg",
  },
  {
    year: "2022–2024",
    text: "Expanded into opto-electronic systems and indigenous solutions",
    image: "/hero/9444.jpg",
  },
  {
    year: "2024–2026",
    text: "Recognized as OEM and partnered with major government agencies",
    image: "/hero/9555.png",
  },
];

export default function TimelineSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let index = 0;
          const interval = setInterval(() => {
            index++;
            if (index >= timelineData.length) {
              clearInterval(interval);
            } else {
              setActive(index);
            }
          }, 1500);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-14 sm:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADING */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-600 mb-4">
          OUR TIMELINE
        </h2>

        <p className="text-center text-gray-700 text-sm sm:text-base max-w-5xl mx-auto mb-8 sm:mb-12">
          TAK Technologies Pvt. Ltd. Established with a vision to revolutionize
          the opto-electronic industry, bringing together experts with a shared
          passion for innovation and excellence.
        </p>

        {/* TIMELINE SLIDER */}
        <div className="relative h-[240px] sm:h-[300px] md:h-[380px] rounded-xl overflow-hidden">
          {timelineData.map((item, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-700 ease-in-out
                ${
                  i === active
                    ? "opacity-100 translate-x-0"
                    : i < active
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
                }`}
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.year}
                fill
                priority={i === 0}
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-8 md:px-16">
                <h3 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4">
                  {item.year}
                </h3>
                <p className="text-white text-sm sm:text-base md:text-xl max-w-3xl">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
