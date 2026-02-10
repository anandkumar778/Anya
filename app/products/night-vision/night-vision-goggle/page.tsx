"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ProductFloatingCarousel from "@/components/products/ProductHeroFloatingCarousel";

const images = [
  "/products/night/goggle-1.png",
  "/products/night/goggle-2.png",
  "/products/night/goggle-3.png",
  "/products/night/goggle-4.png",
];

export default function NightVisionGogglePage() {
  const router = useRouter();

  return (
    
    <>
     <ProductFloatingCarousel/>
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
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center">
                  <Image
                    src={src}
                    alt="Night Vision Goggle"
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

        {/* RIGHT : Content */}
        <div>
          <h1 className="text-4xl font-extrabold text-[var(--primary-blue)] mb-4">
            NIGHT VISION GOGGLE
          </h1>

          <div className="w-20 h-1 bg-[var(--primary-blue)] mb-6" />

          <p className="text-gray-700 text-lg leading-relaxed">
            DarVi Night Vision Goggle is ruggedly designed binocular night vision
            goggle system which features military grade{" "}
            <strong>Gen 2+/Gen 3 IIT tube</strong> with{" "}
            <strong>Automatic Gain Control (AGC)</strong> &{" "}
            <strong>Brightness Source Protection (BSP)</strong>.
            <br /><br />
            Designed for military observations, frontier reconnaissance,
            surveillance, smuggling and anti-theft operations under night or
            extreme low light conditions.
            <br /><br />
            Compact and ergonomic design allows complete freedom of movement
            while maintaining balance in hands-free operation.
          </p>
        </div>
      </div>
    </section>

      <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--primary-blue)]">
            Technical Parameters
          </h2>
          <div className="w-20 h-1 bg-[var(--primary-blue)] mx-auto mt-4" />
        </div>

        {/* Table */}
        <div className="border border-gray-200 rounded-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Row 1 */}
            <div className="p-5 border-b border-r border-gray-200">
              Gen 2+ II tube / Gen 3 II tube. (Optional)
            </div>
            <div className="p-5 border-b border-gray-200">
              Automatic Gain Control (AGC).
            </div>

            {/* Row 2 */}
            <div className="p-5 border-b border-r border-gray-200 bg-gray-50">
              Brightness Source Protection (BSP).
            </div>
            <div className="p-5 border-b border-gray-200 bg-gray-50">
              Integrated IR laser.
            </div>

            {/* Row 3 */}
            <div className="p-5 border-b border-r border-gray-200">
              Available with Head Mount and Helmet Mount (Optional).
            </div>
            <div className="p-5 border-b border-gray-200">
              Low Battery Indicator.
            </div>

            {/* Row 4 */}
            <div className="p-5 border-r border-gray-200 bg-gray-50">
              IP 66/67 Encapsulation.
            </div>
            <div className="p-5 bg-gray-50" />
          </div>
        </div>

      </div>
    </section>
    </>
  );
}
