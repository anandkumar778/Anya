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
                Featuring a quick and straightforward installation mechanism, the Picatinny Rail Mount significantly improves weapon modularity and operational flexibility. 
                Its rugged construction and precision fit make it ideal for military, law enforcement, and tactical applications, where durability, stability, and performance are critical.
              </span>

            </p>
          </div>

        </div>
      </section>

      {/* ================= TECHNICAL PARAMETERS ================= */}
    <section className="w-full bg-white py-12 sm:py-16 md:py-20">
  <div className="max-w-7xl mx-auto px-4">

    {/* Heading */}
    <div className="text-center mb-10 sm:mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--primary-blue)]">
        Technical Parameters
      </h2>
      <div className="w-16 sm:w-20 h-1 bg-[var(--primary-blue)] mx-auto mt-3 sm:mt-4" />
    </div>

    {/* Table */}
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* Row 1 */}
        <div className="p-4 sm:p-5 border-b md:border-r">
          <span className="font-medium">Extremely secure platform for holographic sights, reflex sights and lasers attachment</span>
        </div>
        <div className="p-4 sm:p-5 border-b">
          <span className="font-medium">Manually adjustable retention mechanism to always retain sighting zero</span>
        </div>

        {/* Row 2 */}
        <div className="p-4 sm:p-5 border-b md:border-r bg-gray-50">
          <span className="font-medium">Quick and easy installation. No gunsmith required</span>
        </div>
        <div className="p-4 sm:p-5 border-b bg-gray-50">
          <span className="font-medium">Material of construction: Aluminum alloy 6061</span> 
        </div>
          {/* Row 3 */}
        <div className="p-4 sm:p-5 border-b md:border-r bg-gray-50">
          <span className="font-medium">Durable, hardwearing and light weight construction</span>
        </div>
        <div className="p-4 sm:p-5 border-b bg-gray-50">
          <span className="font-medium">Matt black hard coat anodized</span> 
        </div>
          <div className="p-4 sm:p-5 border-b md:border-r bg-gray-50">
          <span className="font-medium">MIL-STD-1913 based Picatinny rail</span>
        </div>

      </div>
    </div>

  </div>
</section>
    </>
  );
}
