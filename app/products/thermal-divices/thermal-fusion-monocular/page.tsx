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

export default function ThermalFusionMonocularPage() {
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
                      alt="Thermal Fusion Monocular"
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
              Thermal Fusion Monocular
            </h1>

            <div className="w-20 h-1 bg-[var(--primary-blue)] mb-6" />

            <p className="text-gray-700 leading-relaxed">
             The Thermal Fusion Monocular is an advanced multi-sensor
              imaging device that seamlessly integrates thermal imaging with 
              visible-light fusion technology, delivering superior situational 
              awareness in all operational environments. 
              By combining heat-signature detection with detailed visual imagery,
               it enables rapid target identification even in complete darkness, smoke, fog, and adverse weather conditions.
              <br /><br />
             Designed with a compact, lightweight, and ergonomic form factor, the 
             Thermal Fusion Monocular supports handheld,
              head-mounted, and helmet-mounted operations, 
              ensuring maximum flexibility for dynamic missions. 
              The fusion capability enhances depth perception, object recognition, and environmental clarity, 
              significantly improving operational efficiency during surveillance, reconnaissance,
               border security, and tactical operations.
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
                NETD ≤ 50mK
              </div>

              <div className="p-5 border-b border-r bg-gray-50">
                Display Resolution: 1024 × 768 pixels
              </div>
              <div className="p-5 border-b bg-gray-50">
                Polarity: - Black Hot, White Hot and more
              </div>

              <div className="p-5 border-b border-r">
                Inbuilt Compass
              </div>
             
              <div className="p-5 bg-gray-50" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
