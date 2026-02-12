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

export default function DayVisionBinocularPage() {
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
                      alt="Day Vision Binocular"
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
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--primary-blue)] mb-3 sm:mb-4">
              Day Vision Binocular
            </h1>

            <div className="w-14 sm:w-20 h-1 bg-[var(--primary-blue)] mb-4 sm:mb-6" />

            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-3">
              <span className="block">
                The Day Vision Binocular features a robust construction with a
                premium finish, engineered for reliable performance in demanding
                operational environments.
              </span>

              <span className="block">
                Available in <strong>8× and 10× magnification</strong>, it
                incorporates fully multi-coated <strong>BAK-4 prisms</strong> and
                advanced anti-reflection coatings to deliver sharp, high-contrast
                and bright images.
              </span>

              <span className="block">
                The binocular is equipped with a <strong>stadia metric reticle</strong>
                for accurate target range estimation and an
                <strong> integrated Laser Range Finder</strong> for precise
                distance measurement.
              </span>

              <span className="block">
                High-quality spherical optics ensure distortion-free viewing,
                while the wide-angle lens design enhances tracking of fast-moving
                targets. Ideal for surveillance, reconnaissance, border security
                and tactical observation.
              </span>
            </p>
          </div>

        </div>
      </section>

      {/* ================= TECHNICAL PARAMETERS ================= */}
     <section className="w-full bg-white py-10 sm:py-14 md:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    {/* Heading */}
    <div className="text-center mb-8 sm:mb-12">
      <h2 className="text-lg sm:text-3xl md:text-4xl font-semibold text-[var(--primary-blue)] leading-snug">
        Technical Parameters
      </h2>
      <div className="w-12 sm:w-20 h-1 bg-[var(--primary-blue)] mx-auto mt-3 sm:mt-4 rounded-full" />
    </div>

    {/* Table */}
    <div className="border border-gray-200 rounded-lg overflow-hidden text-sm sm:text-base shadow-sm">
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
        ].map((item, index, arr) => {
          const isLastRow =
            index >= arr.length - (arr.length % 2 === 0 ? 2 : 1);

          return (
            <div
              key={index}
              className={`
                p-4 sm:p-5
                ${!isLastRow ? "border-b" : ""}
                ${index % 2 === 0 ? "md:border-r" : ""}
                ${index % 4 >= 2 ? "bg-gray-50" : ""}
                border-gray-200
                break-words
              `}
            >
              <span className="font-medium">{item}</span>
            </div>
          );
        })}

      </div>
    </div>

  </div>
</section>

    </>
  );
}
