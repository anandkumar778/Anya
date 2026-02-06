"use client";

import Image from "next/image";
import Link from "next/link";

const dayOpticsProducts = [
  {
    title: "Day Scope (DWS - 156)",
    image: "/products/day-optics/dws-165.png",
    slug: "day-scope-dws-156",
  },
  {
    title: "Day Scope (DWS - 315)",
    image: "/products/day-optics/dws-315.png",
    slug: "day-scope-dws-315",
  },
  {
    title: "Day Vision Binocular",
    image: "/products/day-optics/vision.png",
    slug: "day-vision-binocular",
  },
  {
    title: "Red Dot Sight",
    image: "/products/day-optics/dot.png",
    slug: "red-dot-sight",
  },
  {
    title: "Holographic Sight",
    image: "/products/day-optics/holographic.png",
    slug: "holographic-sight",
  },
];

export default function DayOpticsPage() {
  return (
    <section className="w-full bg-white py-14">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <h2 className="text-4xl font-extrabold text-green-600">
          DAY OPTICS DEVICES
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dayOpticsProducts.map((item) => (
          <Link
            key={item.slug}
            href={`/products/day-optics/${item.slug}`}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white"
          >
            {/* Image */}
            <div className="flex items-center justify-center h-[280px] p-6">
              <Image
                src={item.image}
                alt={item.title}
                width={420}
                height={280}
                className="object-contain"
              />
            </div>

            {/* Grey strip */}
            <div className="bg-gray-200 text-center py-4 text-base font-medium text-black">
              {item.title}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
