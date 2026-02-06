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
          <h1 className="text-4xl font-extrabold text-indigo-600 mb-4">
            NIGHT VISION BINOCULAR
          </h1>

          {/* Orange underline */}
          <div className="w-20 h-1 bg-indigo-500 mb-6" />

          <p className="text-gray-700 text-lg leading-relaxed">
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

     
    </>
  );
}




    
