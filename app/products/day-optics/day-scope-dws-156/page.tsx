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

export default function DarViDWSDayPage() {
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
                      alt="day-scope-dws-156"
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
             Dar ViDWS Day
            </h1>

            <div className="w-20 h-1 bg-[var(--primary-blue)] mb-6" />

            <p className="text-gray-700 text-lg leading-relaxed">
           DarVi DWS-156 Day Weapon Sight is a precision-engineered optical 
           day scope designed for mounting on sniper and designated marksman rifles
            such as the Dragunov Sniper Rifle and similar weapon platforms.
             The sight delivers high optical clarity and reliable performance, 
             ensuring accurate target engagement in varied operational environments.
              <br /><br />
             Built for robustness and ease of use,
              the DarVi DWS-156 ensures 
             consistent accuracy, quick adjustment, and dependable performance,
              making it an ideal solution for military, law enforcement,
               and tactical shooting applications.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TECHNICAL PARAMETERS ================= */}
<section className="w-full bg-white py-10 sm:py-16 md:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    {/* Heading */}
    <div className="text-center mb-8 sm:mb-12">
      <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold text-[var(--primary-blue)]">
        Technical Parameters
      </h2>
      <div className="w-14 sm:w-20 h-1 bg-[var(--primary-blue)] mx-auto mt-3 sm:mt-4 rounded-full" />
    </div>

    {/* Table */}
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 text-sm sm:text-base">

        {/* Row 1 */}
        <div className="p-4 sm:p-5 border-b md:border-r border-gray-200">
          <span className="font-medium">Magnification:</span> 1.5-6x
        </div>
        <div className="p-4 sm:p-5 border-b border-gray-200">
          <span className="font-medium">Eye Relief</span>
        </div>

        {/* Row 2 */}
        <div className="p-4 sm:p-5 border-b md:border-r border-gray-200 bg-gray-50">
          <span className="font-medium">Reticule</span>
        </div>
        <div className="p-4 sm:p-5 border-b border-gray-200 bg-gray-50">
          <span className="font-medium">Reticule adjustment</span>
        </div>

      </div>
    </div>

  </div>
</section>


    </>
  );
}
