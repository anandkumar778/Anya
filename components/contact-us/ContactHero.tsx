"use client";

import { Phone, Mail, AtSign } from "lucide-react";
import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative w-full h-[450px] flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/contact-bg.jpg"  // apni image path yaha daalo
        alt="Contact Background"
        fill
        className="object-cover"
        priority
      />

      {/* White Overlay */}
      <div className="absolute inset-0 bg-white/75 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Text */}
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#1F2E8C] tracking-wide">
            CONTACT US
          </h1>
          <div className="w-24 h-1 bg-[#1F2E8C] mt-4 rounded-full"></div>
        </div>

        {/* Right Contact Icons */}
        <div className="mt-8 md:mt-0 bg-white shadow-xl rounded-full px-8 py-4 flex items-center gap-8 border border-gray-200">
          
          <Phone className="text-[#1F2E8C]" size={26} />
          
          <div className="h-8 w-px bg-gray-300"></div>
          
          <Mail className="text-[#1F2E8C]" size={26} />
          
          <div className="h-8 w-px bg-gray-300"></div>
          
          <AtSign className="text-[#1F2E8C]" size={26} />
        
        </div>
      </div>
    </section>
  );
}
