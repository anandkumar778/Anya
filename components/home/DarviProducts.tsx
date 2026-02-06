"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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

export default function DarviProducts() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [imgIndex, setImgIndex] = useState(0);

  /* 🔁 Auto product change */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((p) => (p + 1) % products.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  /* 🔁 Auto image change */
  useEffect(() => {
    setImgIndex(0);
    const imgTimer = setInterval(() => {
      setImgIndex((i) =>
        i === products[activeIndex].images.length - 1 ? 0 : i + 1
      );
    }, 2000);

    return () => clearInterval(imgTimer);
  }, [activeIndex]);

  return (
    <section className="bg-[#f1f1f1] py-12 sm:py-16 md:py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-600">
            DARVI PRODUCTS
          </h2>
          <button className="bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-black transition text-sm sm:text-base">
            View All
          </button>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 sm:px-4 py-2 rounded-md border text-xs sm:text-sm md:text-base transition
                ${
                  activeTab === tab
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white border-gray-400 hover:bg-gray-100"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 place-items-center">

          {products.map((item, i) => {
            const isActive = i === activeIndex;

            return (
              <div
                key={item.id}
                className={`transition-all duration-700 rounded-2xl flex flex-col items-center justify-center
                  w-full max-w-[360px] sm:max-w-[400px]
                  ${
                    isActive
                      ? "bg-[#fdeee6] h-[300px] sm:h-[320px] md:h-[340px] shadow-2xl scale-105"
                      : "bg-gray-300 h-[220px] sm:h-[240px] md:h-[260px] opacity-60"
                  }`}
              >
                {/* IMAGE */}
                <div className="relative w-[200px] sm:w-[230px] md:w-[260px] h-[130px] sm:h-[150px] md:h-[160px]">
                  <Image
                    src={isActive ? item.images[imgIndex] : item.images[0]}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-bold text-gray-900 text-center px-3">
                  {item.title}
                </h3>

                {/* DOTS */}
                {isActive && (
                  <div className="flex gap-2 mt-3 sm:mt-4">
                    {item.images.map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-2.5 h-2.5 rounded-full ${
                          idx === imgIndex
                            ? "bg-orange-500"
                            : "bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
