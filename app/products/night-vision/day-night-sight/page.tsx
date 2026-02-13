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

export default function DayNightSightPage() {
  return (
    <>
      {/* ================= HERO FLOATING CAROUSEL ================= */}
      <ProductFloatingCarousel />

      {/* ================= PRODUCT DETAILS ================= */}
     <section className="w-full bg-white py-12 md:py-20">
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
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[420px]">
              <Image
                src={src}
                alt="Day Night Sight"
                fill
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
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--primary-blue)] mb-4">
        Day Night Sight
      </h1>

      <div className="w-16 sm:w-20 h-1 bg-primaryBlue mb-6" />

      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        A universal Day Night Weapon Sight with dual parallel optical
        channels, equipped with <strong>Gen 3 GaAs IIT technology</strong>{" "}
        along with <strong>Brightness Source Protection (BSP)</strong> and{" "}
        <strong>Automatic Brightness Control (ABC)</strong>.
        <br /><br />
        The sight is compatible with a wide range of small arms including
        AK-47, AK-103, INSAS rifles, INSAS LMG, carbines, and other similar
        weapon platforms, offering enhanced flexibility for varied
        tactical requirements.
      </p>
    </div>

  </div>
</section>


      {/* ================= TECHNICAL PARAMETERS ================= */}
     <section className="w-full bg-white py-20">
  <div className="max-w-7xl mx-auto px-4">

    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-semibold text-[var(--primary-blue)]">
        Technical Parameters
      </h2>
      <div className="w-20 h-1 bg-primaryBlue mx-auto mt-4" />
    </div>

    {/* Table */}
    <div className="border border-gray-200 rounded-md overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 text-xl font-semibold sm:text-base text-gray-700">

        {/* Row 1 */}
        <div className="p-5 border-b border-r">
          Superior low light illumination performance with Gen 3 tube
        </div>
        <div className="p-5 border-b">
          Quick switching between day & night mode
        </div>

        {/* Row 2 */}
        <div className="p-5 border-b border-r bg-gray-50">
          Precise adjustment mechanism
        </div>
        <div className="p-5 border-b bg-gray-50">
          Adjustable reticule brightness
        </div>

        {/* Row 3 */}
        <div className="p-5 border-b border-r">
          Range estimation available
        </div>
        <div className="p-5 border-b">
          IR illuminator with adjustable brightness
        </div>

        {/* Row 4 */}
        <div className="p-5 border-r bg-gray-50">
          Low battery indicator
        </div>
        <div className="p-5 bg-gray-50">
          IP 66 Encapsulation
        </div>

      </div>
    </div>

  </div>
</section>

    </>
  );
}
