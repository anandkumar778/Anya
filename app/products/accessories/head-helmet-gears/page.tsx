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

export default function HeadHelmetGearsPage() {
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
                      alt="Head Helmet Gears"
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
              Head Helmet Gears
            </h1>

            <div className="w-14 sm:w-20 h-1 bg-[var(--primary-blue)] mb-4 sm:mb-6" />

            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-3">
              <span className="block">
                The Head and Helmet Gears are precision-engineered from high-strength aviation-grade aluminium alloy, ensuring exceptional durability while maintaining a lightweight profile.
                 Designed as universal mounting solutions, these gears deliver comprehensive functionality with superior flexibility and ease of operation in demanding operational environments.
              </span>

              <span className="block">
                Featuring two-axis adjustability, the system provides full freedom of movement and precise positioning. 
                Key functional capabilities include front and rear adjustment, height adjustment, and flip-up automatic shutdown, 
                enabling seamless transitions between operational and standby modes.
              </span>

              <span className="block">
                The binocular is equipped with a <strong>stadia metric reticle</strong>
                for accurate target range estimation and an
                <strong> integrated Laser Range Finder</strong> for precise
                distance measurement.
              </span>

              <span className="block">
             With standardized interfaces and universal compatibility, the head and helmet gears can be seamlessly 
             integrated with bulletproof and tactical helmets, ensuring interchangeability across platforms. Their rugged construction and ergonomic design make them particularly well-suited for the specialized headgear requirements of special operations forces, 
             law enforcement units, and defence personnel engaged in night operations and tactical missions.
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
      <div className="grid grid-cols-1 md:grid-cols-2">

        {[
          "Extremely secure shroud for Night Vision Devices",
          "Manually adjustable mechanism",
          "Quick and easy installation. No gunsmith and tool required",
          "Material of construction: Aluminum alloy 6061",
          "Durable, hardwearing and light weight construction",
          "Matt black hard coat anodized",
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
