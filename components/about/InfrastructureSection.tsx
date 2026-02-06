"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { FC } from "react";

import "swiper/css";

interface InfraImage {
  id: number;
  src: string;
  alt: string;
}

const infrastructureImages: InfraImage[] = [
  { id: 1, src: "/infrastructure/1001.jpg", alt: "Office Infrastructure" },
  { id: 2, src: "/infrastructure/1002.jpg", alt: "Building Infrastructure" },
  { id: 3, src: "/infrastructure/1003.jpg", alt: "Lab Infrastructure" },
  { id: 4, src: "/infrastructure/1004.jpg", alt: "Office Infrastructure" },
  { id: 5, src: "/infrastructure/1005.jpg", alt: "Building Infrastructure" },
  { id: 6, src: "/infrastructure/1006.jpg", alt: "Lab Infrastructure" },
];

const InfrastructureSection: FC = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-600 mb-8 sm:mb-12 tracking-wide">
        INFRASTRUCTURE
      </h2>

      {/* Carousel */}
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          spaceBetween={16}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          {infrastructureImages.map((img) => (
            <SwiperSlide key={img.id}>
              <div
                className="
                  relative overflow-hidden rounded-2xl group
                  h-[220px] sm:h-[260px] md:h-[320px]
                "
              >
                {/* Image */}
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="
                    object-cover
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default InfrastructureSection;
