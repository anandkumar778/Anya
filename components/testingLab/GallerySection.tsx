"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("photos");

  const photos = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("photos")}
            className={`px-6 py-2 rounded-xl font-semibold transition ${
              activeTab === "photos"
                ? "bg-[#1F2E8C] text-white shadow-lg"
                : "bg-white border border-[#1F2E8C] text-[#1F2E8C]"
            }`}
          >
            Photos
          </button>

          <button
            onClick={() => setActiveTab("videos")}
            className={`px-6 py-2 rounded-xl font-semibold transition ${
              activeTab === "videos"
                ? "bg-[#1F2E8C] text-white shadow-lg"
                : "bg-white border border-[#1F2E8C] text-[#1F2E8C]"
            }`}
          >
            Videos
          </button>
        </div>

        {/* Carousel */}
        {activeTab === "photos" && (
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 2 }, // better for 3 images
            }}
          >
            {photos.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-lg group border border-gray-100">
                  <Image
                    src={src}
                    alt={`Gallery ${index}`}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Videos */}
        {activeTab === "videos" && (
          <div className="text-center text-[#1F2E8C]">
            <p className="text-lg font-medium">
              Videos will be available soon.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
