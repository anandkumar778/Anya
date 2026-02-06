"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const images = [
  "/hero/bilding.png",
  "/hero/building.jpg",
];

export default function AboutUsPage() {
  const [active, setActive] = useState(0);
  const isChanging = useRef(false); // 🔥 KEY FIX

  useEffect(() => {
    const onScroll = () => {
      if (isChanging.current) return; // ignore extra scroll

      isChanging.current = true;

      setTimeout(() => {
        setActive((prev) =>
          prev === images.length - 1 ? 0 : prev + 1
        );
        isChanging.current = false; // allow next change
      }, 600); // 👈 closure feel time
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section className="relative h-[300vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <Image
            src={images[active]}
            alt="Company"
            fill
            priority
            className="object-cover transition-opacity duration-700"
          />

          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          <h1 className="absolute bottom-24 left-6 md:left-10 text-4xl md:text-7xl font-extrabold tracking-widest text-white/80 bg-white/10 backdrop-blur-md px-4 py-2 rounded">
            COMPANY
          </h1>

          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <span
                key={i}
                className={`w-8 h-[3px] ${
                  i === active ? "bg-orange-500" : "bg-white/50"
                }`}
              />
            ))}
          </div>

          <div className="absolute bottom-0 w-full bg-gray-100">
            <div className="flex justify-between items-center px-4 md:px-10 py-3 text-sm">
              <Link href="/about">← Back</Link>
              <span className="text-orange-500 font-semibold">
                Home › About Us
              </span>
            </div>
          </div>
        </div>
      </section>

   <section className="w-full bg-white py-16">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

    {/* LEFT IMAGE */}
    <div className="relative w-full h-[420px] md:h-[520px]">
      <Image
        src="/hero/about_img.jpg"
        alt="About Us"
        fill
        className="object-cover"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="relative">

      {/* ORANGE LINE (NOW DOES NOT BLOCK SCROLL) */}
      <span className="absolute right-0 top-0 bg-orange-500 pr-1 h-[520px] pointer-events-none" />

      {/* SCROLLABLE TEXT */}
      <div className="pr-3 h-[520px] overflow-y-auto">
        <h2 className="text-green-600 text-3xl font-extrabold mb-6">
          ABOUT US
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Welcome to Aanya Enterprise, where innovation meets
          reliability in the realm of cutting-edge technology solutions.
          Since our inception in 2001, we've been dedicated to
          revolutionizing the landscape of Indian Defense through top-notch
          solutions and unwavering support services.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          As a recognized DPIIT, MSME, NSIC & ISO9001 certified entity, we are
          proud to be a leading national-level original equipment
          manufacturer (OEM), equipped with our own specialized assembly
          line for opto-electronic equipment.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          At Aanya Enterprise, we've consistently supported Local, State, and Central
          Government agencies in maintaining intricate systems and
          achieving robust security measures. Our commitment extends to
          being registered suppliers to numerous defense and Government
          Establishments across India.
        </p>

        <p className="text-gray-700 leading-relaxed">
          At Aanya Enterprise, quality is our top priority. We adhere to the highest
          standards of manufacturing excellence and quality control to
          ensure that every product that bears our name meets the highest
          standards of performance and reliability.
        </p>

         <p className="text-gray-700 leading-relaxed">
          At Aanya Enterprise, quality is our top priority. We adhere to the highest
          standards of manufacturing excellence and quality control to
          ensure that every product that bears our name meets the highest
          standards of performance and reliability.
        </p>

         <p className="text-gray-700 leading-relaxed">
          At Aanya Enterprise, quality is our top priority. We adhere to the highest
          standards of manufacturing excellence and quality control to
          ensure that every product that bears our name meets the highest
          standards of performance and reliability.
        </p>
      </div>

    </div>

  </div>
</section>



    </>
  );
}
