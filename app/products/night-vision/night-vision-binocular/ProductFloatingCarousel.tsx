"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface FloatingImage {
  id: number;
  src: string;
  style: string;
}

const images: FloatingImage[] = [
  { id: 1, src: "/products/night-vision/1715847608.png", style: "w-[520px]" },
  { id: 2, src: "/products/night-vision/1715847668.png", style: "w-[560px]" },
  { id: 3, src: "/products/night-vision/1715847712.png", style: "w-[520px]" },
]

export default function ProductFloatingCarousel() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        slidesPerView={1}
        className="w-full h-full"
      >
        {images.map((item) => (
          <SwiperSlide key={item.id}>
            {/* Background */}
            <Image
              src="/products/night-vision/bg-green.png"
              alt="Background"
              fill
              priority
              className="object-cover"
            />

            {/* Center Single Image */}
           
            <div className="relative z-10 w-full h-full flex items-center justify-center">
  <Image
    src={item.src}
    alt="Product"
    fill
    priority
    className="object-contain"
  />
</div>

          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Breadcrumb */}
      

<div className="absolute bottom-0 left-0 right-0 bg-gray-200 py-4 px-8 flex justify-between text-sm z-20">
  
  {/* Back Button */}
  <Link
    href="/products"
    className="cursor-pointer hover:underline font-medium"
  >
    ‹ Back
  </Link>

  {/* Breadcrumb */}
  <span>
    <Link href="/" className="hover:underline">
      Home
    </Link>{" "}
    ›{" "}
    <Link href="/products" className="hover:underline">
      Products
    </Link>{" "}
    ›{" "}
  
    <span className="text-indigo-500 font-medium">
      Night Vision Binocular
    </span>
  </span>
</div>

    </section>
  );
}
