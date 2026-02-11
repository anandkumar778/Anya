"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function CertificationSection() {
  const certificates = [
    {
      image: "/images/iso-14001.png",
      title: "ISO 14001",
    },
    {
      image: "/images/iso-45001.png",
      title: "ISO 45001",
    },
    {
      image: "/images/nabl.png",
      title: "NABL Accredited",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F2E8C] mb-4">
            CERTIFICATION
          </h2>
          <div className="w-24 h-1 bg-[#1F2E8C] mx-auto rounded-full"></div>
        </div>

        {/* Slider */}
       <Swiper
  modules={[Autoplay, Pagination, Navigation]}
  spaceBetween={30}
  slidesPerView={1}
  loop={true}
  navigation
  pagination={{ clickable: true }}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}
  observer={true}
  observeParents={true}
  breakpoints={{
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 2 }, // MUST BE LESS THAN TOTAL SLIDES
  }}
>

          {certificates.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group bg-white border border-gray-100 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 p-10 text-center">

                <div className="relative h-32 w-full mb-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain group-hover:scale-110 transition duration-500"
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-700 group-hover:text-[#1F2E8C] transition duration-300">
                  {item.title}
                </h3>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
