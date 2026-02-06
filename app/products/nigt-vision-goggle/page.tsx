"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";

const images = [
  "/products/night/goggle-1.png",
  "/products/night/goggle-2.png",
  "/products/night/goggle-3.png",
  "/products/night/goggle-4.png",
];

export default function NightVisionGogglePage() {
  return (
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
          <h1 className="text-4xl font-extrabold text-indigo-600 mb-4">
            NIGHT VISION GOGGLE
          </h1>

          {/* Indigo underline */}
          <div className="w-20 h-1 bg-indigo-600 mb-6" />

          <p className="text-gray-700 text-lg leading-relaxed space-y-4">
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
            With its compact and ergonomic design, this system allows complete
            freedom of movement while maintaining balance in hands-free
            operation. Ideal for surveillance, patrolling, vehicle driving and
            map reading during night.
          </p>
        </div>
      </div>

      {/* Bottom Breadcrumb */}
      <div className="mt-20 bg-gray-100 py-4 px-8 flex justify-between text-sm">
        <Link
          href="/products/night-vision-device"
          className="hover:underline font-medium"
        >
          ‹ Back
        </Link>

        <span>
          <Link href="/" className="hover:underline">Home</Link> ›{" "}
          <Link href="/products" className="hover:underline">Products</Link> ›{" "}
          <Link
            href="/products/night-vision-device"
            className="hover:underline"
          >
            Night Vision Device
          </Link>{" "}
          ›{" "}
          <span className="text-indigo-600 font-medium">
            Night Vision Goggle
          </span>
          
        </span>
      </div>
    </section>
  );
}
