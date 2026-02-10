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
    slug: "thermal-weapon-sight",
  },
];

export default function ThermalDevicesPage() {
  return (
    <section className="w-full bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <h2 className="text-4xl font-extrabold text-[var(--primary-blue)]">
          THERMAL DEVICES
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {thermalProducts.map((item) => (
          <Link
            key={item.slug}
            href={`/products/thermal-divices/${item.slug}`}
            className="
              border border-gray-200 rounded-lg overflow-hidden bg-white
              hover:shadow-xl hover:scale-[1.02] transition
            "
          >
            <div className="flex items-center justify-center h-[280px] p-6">
              <Image
                src={item.image}
                alt={item.title}
                width={420}
                height={280}
                className="object-contain"
              />
            </div>

            <div className="bg-gray-200 text-center py-4 text-base font-medium text-black">
              {item.title}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
