"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/* ================= DATA ================= */

const products = [
  {
    id: 1,
    title: "Night Vision Binocular",
    images: ["/hero/fix-img.png"],
  },
  {
    id: 2,
    title: "Night Vision Goggle",
    images: ["/hero/fix-img.png"],
  },
  {
    id: 3,
    title: "Night Vision Monocular",
    images: ["/hero/fix-img.png"],
  },
];

const tabs = [
  "Night Vision Device",
  "Thermal Devices",
  "Day Optics Devices",
  "Accessories",
  "Others",
];

/* ================= COMPONENT ================= */

export default function DarviProducts() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [imgIndex, setImgIndex] = useState(0);

  /* 🔁 Auto product change */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  /* 🔁 Auto image change */
  useEffect(() => {
    setImgIndex(0);
    const imgTimer = setInterval(() => {
      setImgIndex((i) =>
        i === products[activeIndex].images.length - 1 ? 0 : i + 1
      );
    }, 2200);

    return () => clearInterval(imgTimer);
  }, [activeIndex]);

  return (
    <section className="bg-[#f4f4f4] py-14 sm:py-18 md:py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* ================= HEADER ================= */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--primary-blue)]">
            DARVI PRODUCTS
          </h2>
        </div>

        {/* ================= TABS ================= */}
        <div className="flex flex-wrap gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-4 py-2 rounded-md text-sm sm:text-base font-medium
                border transition-all duration-300
                ${
                  activeTab === tab
                    ? "bg-[var(--primary-blue)] text-white border-[var(--primary-blue)]"
                    : "bg-white border-gray-400 text-gray-800 hover:bg-[var(--primary-blue)] hover:text-white hover:border-[var(--primary-blue)]"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ================= PRODUCTS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center">

          {products.map((item, i) => {
            const isActive = i === activeIndex;

            return (
              <div
                key={item.id}
                className={`
                  relative rounded-2xl flex flex-col items-center justify-center
                  w-full max-w-[380px]
                  transition-all duration-700 ease-in-out
                  ${
                    isActive
                      ? "bg-white h-[340px] shadow-2xl scale-105"
                      : "bg-gray-200 h-[260px] opacity-60"
                  }
                `}
              >
                {/* IMAGE */}
                <div
                  className={`
                    relative w-[220px] sm:w-[250px] h-[150px] sm:h-[170px]
                    transition-all duration-700
                    ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-70"}
                  `}
                >
                  <Image
                    key={imgIndex}
                    src={item.images[imgIndex]}
                    alt={item.title}
                    fill
                    className={`
                      object-contain
                      transition-all duration-700
                      ${isActive ? "animate-fadeZoom" : ""}
                    `}
                  />
                </div>

                {/* TITLE */}
                <h3 className="mt-6 text-base sm:text-lg md:text-xl font-bold text-gray-900 text-center px-4">
                  {item.title}
                </h3>

                {/* DOTS */}
                {isActive && (
                  <div className="flex gap-2 mt-4">
                    {item.images.map((_, idx) => (
                      <span
                        key={idx}
                        className={`
                          w-2.5 h-2.5 rounded-full transition
                          ${
                            idx === imgIndex
                              ? "bg-[var(--primary-blue)]"
                              : "bg-gray-400"
                          }
                        `}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}

        </div>
      </div>

      {/* ================= ANIMATION ================= */}
      <style jsx>{`
        @keyframes fadeZoom {
          0% {
            opacity: 0;
            transform: scale(0.92);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeZoom {
          animation: fadeZoom 0.7s ease-in-out;
        }
      `}</style>
    </section>
  );
}
