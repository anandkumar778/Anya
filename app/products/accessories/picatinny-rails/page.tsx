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

export default function PicatinnyRailsPage() {
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
                      alt=" Picatinny Rails"
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
               Picatinny Rails
            </h1>

            <div className="w-14 sm:w-20 h-1 bg-[var(--primary-blue)] mb-4 sm:mb-6" />

            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-3">
              <span className="block">
               The Picatinny Rail Mount serves as a manually adjustable retention mechanism engineered to maintain precise sighting zero under operational conditions. 
               Designed for reliability and repeatability, it ensures consistent alignment of mounted optics during firing and maneuvering.
              </span>

              <span className="block">
                This versatile mounting solution supports a wide range of optical and targeting devices, including holographic sights, reflex sights, night vision sights, thermal imaging sights, and laser designators.
                 It provides a secure and stable platform, minimizing movement and enhancing overall accuracy and target acquisition.
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
   <section className="w-full bg-white py-8 sm:py-16 md:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">


    <div className="text-center mb-8 sm:mb-12">
      <h2 className="text-lg sm:text-3xl md:text-4xl font-semibold text-[var(--primary-blue)] leading-snug">
        Technical Parameters
      </h2>
      <div className="w-12 sm:w-20 h-1 bg-[var(--primary-blue)] mx-auto mt-3 sm:mt-4 rounded-full" />
    </div>

   
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm text-sm sm:text-base">
      <div className="grid grid-cols-1 md:grid-cols-2 text-gray-700 font-semibold">

        {[
          "Extremely secure platform for holographic sights, reflex sights and lasers attachment",
          "Manually adjustable retention mechanism to always retain sighting zero",
          "Quick and easy installation. No gunsmith required",
          "Material of construction: Aluminum alloy 6061",
          "Durable, hardwearing and light weight construction",
          "Matt black hard coat anodized",
          "MIL-STD-1913 based Picatinny rail",
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
