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

export default function ThermalWeaponSightPage() {
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
                      alt="Thermal Weapon Sight"
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
              Thermal Weapon Sight
            </h1>

            <div className="w-20 h-1 bg-[var(--primary-blue)] mb-6" />

            <p className="text-gray-700 text-lg leading-relaxed">
            Compact, lightweight thermal weapon sight with 12µm uncooled TI sensor and OLED display,
             offering shutter-less operation for extended mission endurance. 
             Ideal for INSAS, AK-47, LMGs, and defence-grade day/night surveillance and reconnaissance.
              <br /><br />
             The sight incorporates shutter-less technology, 
             enabling extended continuous operation with reduced 
             power consumption and enhanced reliability in demanding field conditions.
              Its robust construction and ergonomic design ensure consistent performance during prolonged missions.
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
      <div className="grid grid-cols-1 md:grid-cols-2 text-xl font-semibold">

        {/* Row 1 */}
        <div className="p-4 sm:p-5 border-b md:border-r">
          <span className="font-medium">Pixel Pitch:</span> 12µm
        </div>
        <div className="p-4 sm:p-5 border-b">
          <span className="font-medium">NETD:</span> ≤ 40mK
        </div>

        {/* Row 2 */}
        <div className="p-4 sm:p-5 border-b md:border-r bg-gray-50">
          <span className="font-medium">Display Resolution:</span> 1024 × 768 pixels
        </div>
        <div className="p-4 sm:p-5 border-b bg-gray-50">
          <span className="font-medium">Multiple Color Palettes</span> 
        </div>

        {/* Row 3 */}
        <div className="p-4 sm:p-5 border-b md:border-r">
          <span className="font-medium">Storage:</span> In-built memory
        </div>
        <div className="p-4 sm:p-5 border-b">
          <span className="font-medium">Connectivity:</span> Live video Transmission- Wired, Wi-Fi.(Optional)
        </div>

        {/* Row 4 */}
        <div className="p-4 sm:p-5 md:border-r bg-gray-50 md:col-span-2">
          <span className="font-medium">Environmental Protection:</span> IP67 Encapsulation
        </div>

      </div>
    </div>

  </div>
</section>

    </>
  );
}
