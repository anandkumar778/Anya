"use client";

import Image from "next/image";
import Link from "next/link";

export default function TestingLab() {
  return (
    <div className="w-full bg-white text-gray-800">

      {/* HERO SECTION */}
      <section className="relative w-full h-[65vh] md:h-[85vh]">

        <Image
          src="/images/testing-lab.jpg"
          alt="Testing Lab"
          fill
          priority
          className="object-cover"
        />

        {/* Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F3D91]/80 via-[#0F3D91]/60 to-transparent" />

        {/* Text Content */}
        <div className="absolute bottom-16 left-6 md:left-20">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-wide">
            TESTING LAB
          </h1>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          <div className="w-10 h-1 bg-[#1E60D4] rounded-full"></div>
          <div className="w-10 h-1 bg-white/60 rounded-full"></div>
        </div>

      </section>

      {/* BREADCRUMB SECTION */}
      <div className="bg-blue-50 py-4 border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">

          <Link href="/" className="text-blue-700 hover:text-blue-900 font-medium">
            ← Back
          </Link>

          <div className="text-gray-600">
            <Link href="/" className="hover:text-blue-700">
              Home
            </Link>
            <span className="mx-2 text-blue-400">›</span>
            <span className="text-blue-800 font-semibold">
              Testing Lab
            </span>
          </div>

        </div>
      </div>

      {/* CONTENT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0F3D91]">
            Advanced Testing Infrastructure
          </h2>

          <div className="w-20 h-1 bg-[#1E60D4] mx-auto mb-6 rounded-full"></div>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our state-of-the-art testing laboratory is equipped with advanced 
            environmental chambers, calibration systems and performance 
            evaluation setups to ensure reliability, durability and quality 
            compliance for mission-critical products.
          </p>

        </div>
      </section>

    </div>
  );
}
