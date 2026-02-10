"use client";

import Image from "next/image";
import Link from "next/link";

const othersProducts = [
  {
    title: "Dual Sensor PTZ Camera",
    image: "/products/others/dual-sensor-ptz.png",
    slug: "dual-sensor-ptz-camera",
  },
  {
    title: "Electric Power Fence",
    image: "/products/others/electric-power-fence.png",
    slug: "electric-power-fence",
  },
];

export default function OthersPage() {
  return (
    <section className="w-full bg-white py-14">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <h2 className="text-4xl font-extrabold text-[var(--primary-blue)]">
          OTHERS
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {othersProducts.map((item) => (
          <Link
            key={item.slug}
            href={`/products/others/${item.slug}`}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white"
          >
            {/* Image */}
            <div className="flex items-center justify-center h-[280px] p-6">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="object-contain"
              />
            </div>

            {/* Bottom Grey Strip */}
            <div className="bg-gray-200 text-center py-4 text-base font-medium text-black">
              {item.title}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
