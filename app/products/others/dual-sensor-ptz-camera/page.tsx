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

export default function DualSensorPtzCameraPage() {
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
                      alt=" Dual Sensor Ptz Camera"
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
               Dual Sensor Ptz Camera
            </h1>

            <div className="w-14 sm:w-20 h-1 bg-[var(--primary-blue)] mb-4 sm:mb-6" />

            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-3">
              <span className="block">
              DarVi’s Dual-Sensor Thermal Pan-Tilt-Zoom (PTZ) Security Cameras deliver a highly versatile and customizable surveillance solution designed for continuous 24×7 monitoring. By combining thermal and visible sensors, the system enables reliable detection and identification of people and objects across diverse lighting conditions—from complete darkness to bright daylight.
              </span>

              <span className="block">
                Engineered for outdoor and critical security applications, the camera is built to withstand harsh environmental conditions, ensuring consistent performance in demanding operational scenarios. Advanced optical design, high-resolution imaging, and small pixel pitch technology allow the thermal sensor to detect heat signatures with exceptional clarity and accuracy.
              </span>

              <span className="block">
                DarVi’s dual-sensor PTZ cameras seamlessly integrate with existing CCTV and IP surveillance networks, significantly enhancing situational awareness. By effectively transforming night into day, the system empowers security operators to detect and respond to threats that remain invisible to the naked eye, making it an ideal solution for border security, perimeter protection, critical infrastructure, industrial facilities, and smart city surveillance.
              </span>

            </p>
          </div>

        </div>
      </section>

      {/* ================= TECHNICAL PARAMETERS ================= */}
   <section className="w-full bg-white py-8 sm:py-16 md:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    {/* Heading */}
    <div className="text-center mb-8 sm:mb-12">
      <h2 className="text-lg sm:text-3xl md:text-4xl font-semibold text-[var(--primary-blue)] leading-snug">
        Technical Parameters
      </h2>
      <div className="w-12 sm:w-20 h-1 bg-[var(--primary-blue)] mx-auto mt-3 sm:mt-4 rounded-full" />
    </div>

    {/* Table */}
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm text-sm sm:text-base">
      <div className="grid grid-cols-1 md:grid-cols-2 text-gray-700 font-semibold">

        {[
          "Pixel pitch: 17µm",
          "NETD ≤ 50mK.",
          "Optical Zoom",
          "Display resolution: 1024×768.",
          "Communication: RS485.",
          "Composite Video Type: PAL/NTSC.",
          "Power Interface:-30VDC via 110-240VAC power interface control box.",
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
