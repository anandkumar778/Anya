"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface Product {
  id: number;
  src: string;
  alt: string;
}

const slides: Product[] = [
  { id: 1, src: "/products/1715847608.png", alt: "Optical Sight" },
  { id: 2, src: "/products/1715847668.png", alt: "Rifle Scope" },
  { id: 3, src: "/products/1715847759.png", alt: "Red Dot Sight" },
];

export default function ProductFloatingCarousel() {
  return (
    <>
      {/* ================= FULL SCREEN CAROUSEL ================= */}
      <section className="relative w-full min-h-screen overflow-hidden">
  <Swiper
    modules={[Autoplay, Pagination]}
    autoplay={{ delay: 3500, disableOnInteraction: false }}
    loop
    pagination={{ clickable: true }}
    slidesPerView={1}
    className="w-full h-screen"
  >
    {slides.map((item) => (
      <SwiperSlide key={item.id}>
        <div className="relative w-full h-screen">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>


      {/* ================= BOTTOM NAV / BREADCRUMB ================= */}
      <div>
        {/* className="
          w-full
          bg-white/95 backdrop-blur
          border-t
          px-4 py-3
          flex flex-col gap-1
          sm:flex-row sm:justify-between sm:items-center
          text-[11px] sm:text-sm
        "
      > */}
        {/* <Link
          href="/about/company/about-us"
          className="font-medium text-indigo-900 hover:underline"
        >
          ‹ Back
        </Link> */}

        {/* <span className="text-gray-700">
          <span className="hidden sm:inline">Home</span>
          <span className="mx-1">›</span>
          <span className="text-indigo-900 font-medium">Products</span>
        </span> */}
      </div>
    </>
  );
}
