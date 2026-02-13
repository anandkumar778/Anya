"use client";

import Image from "next/image";
import Link from "next/link";
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

export default function ThermalBinocularPage() {
  return (
    <>
      {/* ================= HERO FLOATING CAROUSEL ================= */}
      <ProductFloatingCarousel />
      {/* ================= PRODUCT DETAILS ================= */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT : IMAGE SLIDER */}
          <div>
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
                      alt="Thermal Binocular"
                      width={650}
                      height={420}
                      className="object-contain"
                      priority={index === 0}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* RIGHT : CONTENT */}
          <div>
            <h1 className="text-4xl font-extrabold text-[var(--primary-blue)] mb-4">
              Thermal Binocular
            </h1>

            <div className="w-20 h-1 bg-[var(--primary-blue)] mb-6" />

            <p className="text-gray-700  leading-relaxed">
              High-resolution Thermal Binocular designed for all-weather,
              day-and-night surveillance. It enables accurate detection and
              identification of targets based on heat signatures even in
              complete darkness, fog, smoke, and harsh environmental conditions.
              <br /><br />
              The ergonomic binocular design ensures reduced operator fatigue
              and enhanced situational awareness, making it ideal for
              surveillance, reconnaissance, border security, and tactical
              operations.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TECHNICAL PARAMETERS ================= */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--primary-blue)]">
              Technical Parameters
            </h2>
            <div className="w-20 h-1 bg-[var(--primary-blue)] mx-auto mt-4" />
          </div>

          <div className="border border-gray-200 rounded-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 text-gray-700">

              <div className="p-5 border-b border-r">
                Pixel Pitch: 12µm
              </div>
              <div className="p-5 border-b">
                NETD ≤ 40mK
              </div>

              <div className="p-5 border-b border-r bg-gray-50">
                Display Resolution: 1024 × 768
              </div>
              <div className="p-5 border-b bg-gray-50">
                Multiple Color Palettes
              </div>

              <div className="p-5 border-b border-r">
                In-built Memory
              </div>
              <div className="p-5 border-b">
                Electronic Compass, GPS, Wi-Fi (Optional)
              </div>

              <div className="p-5 border-r bg-gray-50">
                IP67 Encapsulation
              </div>
              <div className="p-5 bg-gray-50" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
