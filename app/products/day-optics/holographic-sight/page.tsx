"use client";

import Image from "next/image";
import ProductFloatingCarousel from "@/components/products/ProductHeroFloatingCarousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

/* ================= IMAGE DATA ================= */
const images = [
  "/products/night/goggle-1.png",
  "/products/night/goggle-2.png",
  "/products/night/goggle-3.png",
  "/products/night/goggle-4.png",
];

export default function HolographicSightPage() {
  return (
    <>
      {/* ================= HERO FLOATING CAROUSEL ================= */}
      <ProductFloatingCarousel />

      {/* ================= PRODUCT DETAILS ================= */}
      <section className="w-full bg-white py-10 sm:py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* LEFT : IMAGE SLIDER */}
          <div className="w-full">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center">
                    <Image
                      src={src}
                      alt="Holographic Sight"
                      width={600}
                      height={380}
                      priority={index === 0}
                      className="
                        object-contain
                        w-full
                        max-w-[280px]
                        sm:max-w-[380px]
                        md:max-w-[480px]
                        lg:max-w-[560px]
                      "
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* RIGHT : CONTENT */}
           <div className="max-w-6xl mx-auto px-4 sm:px-6">

    {/* ===== TITLE ===== */}
    <div className="mb-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--primary-blue)]">
        HOLOGRAPHIC WEAPON SIGHT
      </h1>
      <div className="w-20 h-1 bg-[var(--primary-blue)] mt-3" />
    </div>

    {/* ===== DESCRIPTION ===== */}
    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-10">
      The holographic sight is an aiming device where a projected holographic
      reticle is used for accurate aiming. It is a <strong>1× magnification</strong>{" "}
      weapon sight with a specified field of view, enabling shooting with both
      eyes open. When mounted on a rifle or carbine, it offers a significant
      advantage of rapid target engagement and enhanced situational awareness.
    </p>

    {/* ===== DEVICE SPECIFICATIONS ===== */}
    <div className="mb-10">
      <h2 className="text-xl sm:text-2xl font-semibold text-[var(--primary-blue)] mb-4">
        Device Specifications
      </h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base">
        {[
          "Weight: < 350 grams",
          "Range: Up to 200 meters",
          "Magnification: 1×",
          "Window Size: 30 mm × 25 mm",
          "Field of View: 20° at 2-inch eye relief",
          "Front Glass: Anti-reflection coating",
          "Rear Glass: Transmission hologram",
          "Reticle Size: Circle (65 ±5 MOA)",
          "Input Power: 1.5 V (02 × AAA cells)",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2 w-2.5 h-2.5 rounded-full bg-[var(--primary-blue)] shrink-0" />
            <span className="text-gray-800">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* ===== DEVICE FEATURES ===== */}
    <div>
      <h2 className="text-xl sm:text-2xl font-semibold text-[var(--primary-blue)] mb-4">
        Device Features
      </h2>

      <ul className="space-y-3 text-sm sm:text-base">
        {[
          "Reticle pattern embedded in display window",
          "Adjustable reticle brightness control",
          "Low battery indicator",
          "Automatic power shutdown",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2 w-2.5 h-2.5 rounded-full bg-[var(--primary-blue)] shrink-0" />
            <span className="text-gray-800">{item}</span>
          </li>
        ))}
      </ul>
    </div>
    </div>
        </div>
      </section>

      {/* ================= TECHNICAL PARAMETERS ================= */}
      <section className="w-full bg-white py-10 sm:py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4">

          {/* Heading */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold text-[var(--primary-blue)]">
              Technical Parameters
            </h2>
            <div className="w-14 sm:w-20 h-1 bg-[var(--primary-blue)] mx-auto mt-3 sm:mt-4" />
          </div>

          {/* Table */}
          <div className="border border-gray-200 rounded-lg overflow-hidden text-sm sm:text-base">
            <div className="grid grid-cols-1 md:grid-cols-2">

              {[
                "8× / 10× Magnification",
                "Superior optical performance",
                "Stadia metric reticle (8× model)",
                "In-built Laser Range Finder (10× model)",
                "Built-in dioptric correction",
                "Range marking reticle",
                "Waterproof, fog-proof & shock-proof",
                "Rugged rubber-coated high-quality finish",
              ].map((item, index) => (
                <div
                  key={index}
                  className={`p-4 sm:p-5 border-b ${
                    index % 2 === 0 ? "md:border-r" : ""
                  } ${index % 4 >= 2 ? "bg-gray-50" : ""}`}
                >
                  <span className="font-medium">{item}</span>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
