"use client";

import Image from "next/image";
import ProductFloatingCarousel from "@/components/products/ProductHeroFloatingCarousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

/* ================= IMAGE DATA ================= */
const images = [
  "/products/night/goggle-1.png",
  "/products/night/goggle-2.png",
  "/products/night/goggle-3.png",
  "/products/night/goggle-4.png",
];

export default function ElectricPowerFencePage() {
  return (
    <>
      {/* ================= HERO FLOATING CAROUSEL ================= */}
      <ProductFloatingCarousel />

      {/* ================= PRODUCT DETAILS ================= */}
      <section className="w-full bg-white py-10 sm:py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* LEFT : IMAGE SLIDER */}
          <div className="w-full">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center">
                    <Image
                      src={src}
                      alt=" Electric Power Fence"
                      width={600}
                      height={380}
                      priority={index === 0}
                      className="
                        object-contain
                        w-full
                        max-w-[280px]
                        sm:max-w-[380px]
                        md:max-w-[480px]
                        lg:max-w-[560px]
                      "
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* RIGHT : CONTENT */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--primary-blue)] mb-3 sm:mb-4">
               Electric Power Fence
            </h1>

            <div className="w-14 sm:w-20 h-1 bg-[var(--primary-blue)] mb-4 sm:mb-6" />

              <ul className="space-y-4 text-gray-800 text-sm md:text-base leading-relaxed">

      <li className="flex gap-3">
        <span className="mt-2 w-2.5 h-2.5 rounded-full bg-white" />
        <span>
          High Voltage wire is touched / shorted to ground
        </span>
      </li>

      <li className="flex gap-3">
        <span className="mt-2 w-2.5 h-2.5 rounded-full bg-white" />
        <span>
          Low Voltage wire is touched / shorted to ground
        </span>
      </li>

      <li className="flex gap-3">
        <span className="mt-2 w-2.5 h-2.5 rounded-full bg-white" />
        <span>
          High Voltage and Low Voltage wires are touched simultaneously or shorted with each other
        </span>
      </li>

      <li className="flex gap-3">
        <span className="mt-2 w-2.5 h-2.5 rounded-full bg-white" />
        <span>
          Any wire is cut, missed pulses occur, or voltage levels change beyond the configured alarm threshold
        </span>
      </li>

      <li className="flex gap-3">
        <span className="mt-2 w-2.5 h-2.5 rounded-full bg-white" />
        <span>
          <strong>IS-60335-2-76 compliant energizer system.</strong> DarVi Electro Fence deters, detects,
          and delays intruders by acting as both a psychological and physical barrier,
          developed using adaptive digital technology.
        </span>
      </li>

      <li className="flex gap-3">
        <span className="mt-2 w-2.5 h-2.5 rounded-full bg-white" />
        <span>
          Verified alarms with a low false-alarm rate by adopting moving alarm thresholds
          based on environmental conditions
        </span>
      </li>

      <li className="flex gap-3">
        <span className="mt-2 w-2.5 h-2.5 rounded-full bg-white" />
        <span>
          User-friendly design allowing easy system integration
        </span>
      </li>

      <li className="flex gap-3">
        <span className="mt-2 w-2.5 h-2.5 rounded-full bg-white" />
        <span>
          High security delivered at cost-effective pricing
        </span>
      </li>

    </ul>
          </div>

        </div>
      </section>

      {/* ================= TECHNICAL PARAMETERS ================= */}
    <section className="w-full bg-white py-12 text-gray-800 ">
  <div className="max-w-7xl mx-auto px-4 text-gray-800 ">

    <div className="overflow-x-auto bg-white rounded-lg shadow text-gray-800 ">
      <table className="w-full border-collapse text-sm md:text-base">

        {/* ================= DETERRRENT ================= */}
        <thead>
          <tr>
            <th
              colSpan={2}
              className="text-center font-bold text-[var(--primary-blue)] bg-gray-100 py-4 border-b"
            >
              DETERRENT
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b">
            <td className="p-4 font-medium">Psychological deterrent</td>
            <td className="p-4">Non-lethal shock</td>
          </tr>
          <tr className="border-b bg-gray-50">
            <td className="p-4 font-medium">Anti-Climb installation</td>
            <td className="p-4">&nbsp;</td>
          </tr>
        </tbody>

        {/* ================= INTELLIGENT DETECTION ================= */}
        <thead>
          <tr>
            <th
              colSpan={2}
              className="text-center font-bold text-[var(--primary-blue)] bg-gray-100 py-4 border-b"
            >
              INTELLIGENT DETECTION
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b">
            <td className="p-4 font-medium">Intrusion detection accuracy</td>
            <td className="p-4">Adaptive or moving alarm threshold</td>
          </tr>
          <tr className="border-b bg-gray-50">
            <td className="p-4 font-medium">Detection capability</td>
            <td className="p-4">
              Detecting multiple simultaneous intrusions in different zones
            </td>
          </tr>
        </tbody>

        {/* ================= HYBRID ARCHITECTURE ================= */}
        <thead>
          <tr>
            <th
              colSpan={2}
              className="text-center font-bold text-[var(--primary-blue)] bg-gray-100 py-4 border-b"
            >
              HYBRID ARCHITECTURE
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b">
            <td className="p-4 font-medium">
              Single / dual zone energizer (optional)
            </td>
            <td className="p-4">User-defined zone lengths (customizable)</td>
          </tr>
          <tr className="border-b bg-gray-50">
            <td className="p-4 font-medium">
              Operable on 12 VDC battery or mains
            </td>
            <td className="p-4">Battery backup of 12 hours</td>
          </tr>
        </tbody>

        {/* ================= ANNUNCIATION ================= */}
        <thead>
          <tr>
            <th
              colSpan={2}
              className="text-center font-bold text-[var(--primary-blue)] bg-gray-100 py-4 border-b"
            >
              ANNUNCIATION
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b">
            <td className="p-4 font-medium">Response time &lt; 1 second</td>
            <td className="p-4">
              Intelligent alarm annunciation in field and CMS
            </td>
          </tr>
          <tr className="border-b bg-gray-50">
            <td className="p-4 font-medium">Unipolar energizer system</td>
            <td className="p-4">
              Capable of detecting and locating multiple simultaneous intrusion zones
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-4 font-medium">
              User-friendly & flexible “ElectroSecure” CMS
            </td>
            <td className="p-4">
              Unaffected by changing environmental conditions
            </td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-4 font-medium">
              IS-60335-2-76 compliant energizer system
            </td>
            <td className="p-4">&nbsp;</td>
          </tr>
        </tbody>

      </table>
    </div>

  </div>
</section>

    </>
  );
}
