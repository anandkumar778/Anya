"use client";

import Image from "next/image";
import Link from "next/link";

const accessories = [
  {
    title: "Head & Helmet Gears",
    image: "/products/accessories/gears.png",
    slug: "head-helmet-gears",
  },
  {
    title: "Picatinny Rails",
    image: "/products/accessories/rails.png",
    slug: "picatinny-rails",
  },
];

export default function AccessoriesPage() {
  return (
    <section className="w-full bg-white py-14">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <h2 className="text-4xl font-extrabold text-[var(--primary-blue)]">
          ACCESSORIES
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {accessories.map((item) => (
          <Link
            key={item.slug}
            href={`/products/accessories/${item.slug}`}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white"
          >
            {/* Image */}
            <div className="flex items-center justify-center h-[300px] p-6">
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
