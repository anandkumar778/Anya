"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { FC } from "react";

import "swiper/css";

interface ProductionImage {
  id: number;
  src: string;
  alt: string;
}

const productionImages: ProductionImage[] = [
  { id: 1, src: "/production/2001.jpg", alt: "Production Facility 1" },
  { id: 2, src: "/production/2002.jpg", alt: "Production Facility 2" },
  { id: 3, src: "/production/2003.jpg", alt: "Assembly Line" },
  { id: 4, src: "/production/2004.jpg", alt: "Testing Lab" },
  { id: 5, src: "/production/2005.jpg", alt: "Assembly Line" },
  { id: 6, src: "/production/2006.jpg", alt: "Testing Lab" },
];

const ProductionCapacitySection: FC = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--primary-blue)] mb-8 sm:mb-12 tracking-wide">
        PRODUCTION CAPACITY
      </h2>

      {/* Carousel */}
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={16}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          {productionImages.map((img) => (
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

export default ProductionCapacitySection;
