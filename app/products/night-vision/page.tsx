"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const images = [
  "/products/night/1709526256.png",
  "/products/night/1709528069.png",
  "/products/night/1709528632.png",
  "/products/night/1709537376.png",
];

export default function NightVisionBinocularPage() {
  return (
  
    <>
    
       <section className="w-full bg-white py-20">
       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT : Image Carousel */}
        <div>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            slidesPerView={1}
            className="w-full"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center">
                  <Image
                    src={src}
                    alt="Night Vision Binocular"
                    width={700}
                    height={350}
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* RIGHT : Content */}
        <div>
          <h1 className="text-4xl font-extrabold text-[var(--primary-blue)] mb-4">
            NIGHT VISION BINOCULAR
          </h1>

          {/* Orange underline */}
          <div className="" />

          <p className="text-gray-700 leading-relaxed">
            Night Vision Binocular with <strong>4X/5X lens</strong> is ruggedly
            designed bi-ocular night vision system which features military grade
            <strong> Gen 2+/Gen 3 IIT tube</strong> with Automatic Gain Control
            (AGC) & Brightness Source Protection (BSP).
            <br />
            <br />
            Designed for military observations, frontier reconnaissance,
            surveillance, anti-smuggling and anti-theft operations under night
            or extreme low light conditions. With its single tube and dual eye
            configuration, the DarVi series night vision binocular delivers an
            excellent performance-to-cost ratio.
          </p>
        </div>
      </div>
    </section> 
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--primary-blue)]">
            Technical Parameters
          </h2>
          <div className="w-16 md:w-20 h-1 bg-[var(--primary-blue)] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Table Container */}
        <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">

          <div className="grid grid-cols-1 md:grid-cols-2 text-xl font-semibold sm:text-base text-gray-700">

            {/* Row 1 */}
            <div className="px-4 sm:px-6 py-4 border-b md:border-r border-gray-200 bg-gray-50">
              Gen 2+ II tube / Gen 3 II tube. (Optional)
            </div>
            <div className="px-4 sm:px-6 py-4 border-b border-gray-200 bg-gray-50">
              Magnification:- 4X / 5X / 7X
            </div>

            {/* Row 2 */}
            <div className="px-4 sm:px-6 py-4 border-b md:border-r border-gray-200">
              Automatic Gain Control (AGC)
            </div>
            <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
              Low Battery Indicator
            </div>

            {/* Row 3 */}
            <div className="px-4 sm:px-6 py-4 border-b md:border-r border-gray-200 bg-gray-50">
              Brightness Source Protection (BSP)
            </div>
            <div className="px-4 sm:px-6 py-4 border-b border-gray-200 bg-gray-50">
              IP 66 / 67 Encapsulation
            </div>

            {/* Row 4 */}
            <div className="px-4 sm:px-6 py-4 md:border-r border-gray-200">
              Integrated IR laser
            </div>
            <div className="px-4 sm:px-6 py-4"></div>

          </div>
        </div>
      </div>
    </section>
    </>
  );
}




    
