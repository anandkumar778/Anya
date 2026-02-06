"use client";

import Image from "next/image";
import Link from "next/link";

const thermalProducts = [
  {
    title: "Thermal Binocular",
    image: "/products/thermal/thermal1.png",
    slug: "thermal-binocular",
  },
  {
    title: "Thermal Fusion Monocular",
    image: "/products/thermal/thermal2.png",
    slug: "thermal-fusion-monocular",
  },
  {
    title: "Thermal Monocular",
    image: "/products/thermal/thermal3.png",
    slug: "thermal-monocular",
  },
   {
    title: "Thermal Weapon Sight",
    image: "/products/thermal/thermal4.png",
    slug: "thermal-monocular",
  },
];

export default function ThermalDevicesPage() {
  return (
    <section className="w-full bg-white py-14">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <h2 className="text-4xl font-extrabold text-green-600">
          THERMAL DEVICES
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {thermalProducts.map((item) => (
          <Link
            key={item.slug}
            href={`/products/thermal-devices/${item.slug}`}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white"
          >
            {/* Image area */}
            <div className="flex items-center justify-center h-[280px] p-6">
              <Image
                src={item.image}
                alt={item.title}
                width={420}
                height={280}
                className="object-contain"
              />
            </div>

            {/* Grey title bar */}
            <div className="bg-gray-200 text-center py-4 text-base font-medium text-black">
              {item.title}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
