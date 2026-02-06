"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { FC } from "react";

import "swiper/css";

interface Certification {
  id: number;
  img: string;
  alt: string;
}

const certifications: Certification[] = [
  { id: 1, img: "/certifications/iso1.jpg", alt: "ISO Certification" },
  { id: 2, img: "/certifications/ms.png", alt: "MSME Certification" },
  { id: 3, img: "/certifications/iso2.png", alt: "ISO Certification" },
  { id: 4, img: "/certifications/cc-2002.png", alt: "CC Certification" },
  { id: 5, img: "/certifications/iso3.png", alt: "ISO Certification" },
  { id: 6, img: "/certifications/dpiit.png", alt: "DPIIT Certification" },
  { id: 7, img: "/certifications/iso4.png", alt: "ISO Certification" },
  { id: 8, img: "/certifications/iso5.png", alt: "ISO Certification" },
];

const CertificationCarousel: FC = () => {
  return (
    <section className="w-full py-12 sm:py-16 bg-white">
      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-600 mb-8 sm:mb-12 tracking-wide">
        CERTIFICATION
      </h2>

      {/* Slider */}
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {certifications.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="
                  border rounded-xl
                  flex items-center justify-center
                  h-[140px] sm:h-[160px] md:h-[180px]
                  bg-white
                  shadow-sm hover:shadow-md
                  transition
                  p-4
                "
              >
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={260}
                  height={140}
                  className="object-contain max-h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CertificationCarousel;
