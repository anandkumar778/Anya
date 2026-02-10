"use client";

import Image from "next/image";

const locations = [
  { name: "Jammu", top: "38%", left: "55%" },
  { name: "Delhi & NCR", top: "42%", left: "54%" },
  { name: "Agra", top: "45%", left: "55%" },
  { name: "Lucknow", top: "48%", left: "57%" },
  { name: "Assam", top: "45%", left: "63%" },
  { name: "Chhattisgarh", top: "50%", left: "61%" },
  { name: "Tamil Nadu", top: "60%", left: "58%" },
  { name: "Bangalore", top: "62%", left: "54%" },
];

export default function MapSection() {
  return (
    <section className="w-full bg-white py-10 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-[var(--primary-blue)] tracking-widest mb-6 sm:mb-8 md:mb-10">
          SERVING THE LANDMARK LOCATIONS
        </h2>

        {/* Map */}
        <div className="relative w-full max-w-6xl mx-auto aspect-[2/1]">
          <Image
            src="/hero/map.png"
            alt="India Map"
            fill
            priority
            className="object-contain opacity-90"
          />

          {/* Location Tags */}
          {locations.map((loc, index) => (
            <span
              key={index}
              style={{ top: loc.top, left: loc.left }}
              className="
                absolute
                -translate-x-1/2 -translate-y-1/2
                bg-primaryBlue text-white
                text-[9px] sm:text-[10px] md:text-sm
                px-2 sm:px-2.5 md:px-3
                py-0.5
                rounded-full shadow-md
                whitespace-nowrap
              "
            >
              {loc.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
