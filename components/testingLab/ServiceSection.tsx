"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  Droplets,
  ShieldCheck,
  SearchCheck,
  Thermometer,
  Gauge,
  Wrench,
} from "lucide-react";

import "swiper/css";

type ServiceItem = {
  title: string;
  icon: React.ReactNode;
};

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<"testing" | "calibration">(
    "testing"
  );

  const services: Record<"testing" | "calibration", ServiceItem[]> = {
    testing: [
      { title: "IP65/IP66/IP67/IP68", icon: <Droplets size={50} /> },
      { title: "Sealing (Leak) Test", icon: <Gauge size={50} /> },
      { title: "Tropical Exposure", icon: <SearchCheck size={50} /> },
    ],
    calibration: [
      { title: "Thermal Calibration", icon: <Thermometer size={50} /> },
      { title: "Equipment Validation", icon: <ShieldCheck size={50} /> },
      { title: "Precision Adjustment", icon: <Wrench size={50} /> },
    ],
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F2E8C] mb-6">
            OUR SERVICES
          </h2>

          {/* Toggle */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab("testing")}
              className={`px-6 py-2 rounded-xl font-semibold transition ${
                activeTab === "testing"
                  ? "bg-[#1F2E8C] text-white"
                  : "border border-[#1F2E8C] text-[#1F2E8C]"
              }`}
            >
              Testing
            </button>

            <button
              onClick={() => setActiveTab("calibration")}
              className={`px-6 py-2 rounded-xl font-semibold transition ${
                activeTab === "calibration"
                  ? "bg-[#1F2E8C] text-white"
                  : "border border-[#1F2E8C] text-[#1F2E8C]"
              }`}
            >
              Calibration
            </button>
          </div>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          observer={true}
          observeParents={true}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 2 }, // IMPORTANT (not 3)
          }}
        >
          {services[activeTab].map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group bg-white border border-gray-100 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 p-12 text-center">

                <div className="text-[#1F2E8C] mb-6 group-hover:scale-110 transition duration-500">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-700 group-hover:text-[#1F2E8C] transition">
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
