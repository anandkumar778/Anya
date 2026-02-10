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

export default function NightWeaponSightPage() {
  return (
    <>
      {/* ================= HERO FLOATING CAROUSEL ================= */}
      <ProductFloatingCarousel />

      {/* ================= PRODUCT DETAILS ================= */}
      <section className="w-full bg-white py-20">
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
                      alt="Night Weapon Sight"
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
              Night Weapon Sight
            </h1>

            <div className="w-20 h-1 bg-primaryBlue mb-6" />

            <p className="text-gray-700 text-lg leading-relaxed">
              A rugged, military-grade lightweight Night Weapon Sight featuring
               <strong>Gen 2+/Gen 3 IIT technology</strong> with{" "}
               <strong>Brightness Source Protection (BSP)</strong> and{" "}
               <strong>Automatic Brightness Control (ABC)</strong>
              <br /><br />
            To meet diverse operational requirements,
             the reticle design can be customized according to the intended weapon system and mission profile, 
             enabling enhanced accuracy, reliability, and user adaptability during tactical operations.
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
            <div className="w-20 h-1 bg-primaryBlue mx-auto mt-4" />
          </div>

          <div className="border border-gray-200 rounded-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">

              <div className="p-5 border-b border-r">
                Gen 2+ II tube/ Gen 3 II Tube (Optional)
              </div>
              <div className="p-5 border-b">
                Automatic Gain Control (AGC)
              </div>

              <div className="p-5 border-b border-r bg-gray-50">
                Brightness Source Protection (BSP)
              </div>
              <div className="p-5 border-b bg-gray-50">
                Integrated IR  LED/Laser
              </div>

              <div className="p-5 border-b border-r">
               Magnification:-5x
              </div>
              <div className="p-5 border-b">
                Low Battery Indicator
              </div>

              <div className="p-5 border-r bg-gray-50">
                IP 66/67 Encapsulation
              </div>
              <div className="p-5 border-b border-r" />
              Tactical Reticle
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
