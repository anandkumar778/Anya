"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { FC } from "react";

import "swiper/css";

interface EventItem {
  id: number;
  src: string;
  title: string;
}

const eventsData: EventItem[] = [
  {
    id: 1,
    src: "/events/1715861378.jpg",
    title: "Defence Exhibition Lucknow 2020",
  },
  {
    id: 2,
    src: "/events/1715861663.jpg",
    title: "Deepawali Bash 2024",
  },
  {
    id: 3,
    src: "/events/1731556753.jpg",
    title: "Deepawali 2022",
  },
  {
    id: 4,
    src: "/events/1731496833.jpg",
    title: "Corporate Meet",
  },
];

const EventsSection: FC = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--primary-blue)] mb-8 sm:mb-12 tracking-wide">
        EVENTS
      </h2>

      {/* Carousel */}
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {eventsData.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="group">
                {/* Image */}
                <div
                  className="
                    relative overflow-hidden rounded-2xl
                    h-[220px] sm:h-[260px] md:h-[300px]
                  "
                >
                  <Image
                    src={event.src}
                    alt={event.title}
                    fill
                    className="
                      object-cover
                      transition-transform duration-500
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* Title */}
                <p className="mt-3 sm:mt-4 text-center text-base sm:text-lg font-semibold text-gray-800">
                  {event.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default EventsSection;
