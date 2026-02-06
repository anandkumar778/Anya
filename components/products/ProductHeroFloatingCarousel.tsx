"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";

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
    <section className="relative w-full min-h-[100svh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        slidesPerView={1}
        className="w-full h-[100svh]"
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id}>
            {/* Full Screen Image */}
            <div className="relative w-full h-[100svh] flex items-center justify-center">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                priority
                className="
                  object-contain
                  sm:object-contain
                  md:object-cover
                  object-center
                "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Bar – Responsive */}
      <div
        className="
          fixed bottom-0 left-0 right-0 z-20
          bg-white/95 backdrop-blur
          border-t
          px-4 py-2
          flex flex-col gap-1
          sm:flex-row sm:justify-between sm:items-center
          text-[11px] sm:text-sm
        "
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <Link
          href="/about/company/about-us"
          className="font-medium text-indigo-900 hover:underline"
        >
          ‹ Back
        </Link>

        <span className="text-gray-700">
          <span className="hidden sm:inline">Home</span>
          <span className="mx-1">›</span>
          <span className="text-indigo-900 font-medium">Products</span>
        </span>
      </div>
    </section>
  );
}
