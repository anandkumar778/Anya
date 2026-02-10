"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductCard {
  id: number;
  title: string;
  image: string;
  slug: string;
}

const nightVisionProducts: ProductCard[] = [
  {
    id: 1,
    title: "Night Vision Binocular",
    image: "/products/night/1709526256.png",
    slug: "night-vision-binocular",
  },
  {
    id: 2,
    title: "Night Vision Goggle",
    image: "/products/night/1709528069.png",
    slug: "night-vision-goggle",
  },
  {
    id: 3,
    title: "Night Vision Monocular",
    image: "/products/night/1709528632.png",
    slug: "night-vision-monocular",
  },
  {
    id: 4,
    title: "Night Weapon Sight",
    image: "/products/night/1709529337.png",
    slug: "night-weapon-sight",
  },
  {
    id: 5,
    title: "Day Night Sight",
    image: "/products/night/1709537376.png",
    slug: "day-night-sight",
  },
];

export default function NightVisionSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      {/* About Text */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--primary-blue)] mb-4 sm:mb-6">
          ABOUT DARVI PRODUCTS
        </h2>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
          The <strong>DarVi</strong> brand offers a comprehensive range of
          cutting-edge opto-electronic products designed to meet diverse
          operational requirements.
        </p>
      </div>

      {/* Section Title */}
      <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--primary-blue)] mb-8 sm:mb-10 px-4 max-w-7xl mx-auto">
        NIGHT VISION DEVICE
      </h3>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {nightVisionProducts.map((item) => (
            <Link
              key={item.id}
              href={`/products/night-vision/${item.slug}`}
              className="
                border rounded-xl overflow-hidden bg-white
                shadow-sm hover:shadow-md transition
                cursor-pointer
              "
            >
              {/* Image */}
              <div className="flex items-center justify-center h-[200px] sm:h-[230px] md:h-[260px] p-4 sm:p-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={420}
                  height={260}
                  className="object-contain"
                />
              </div>

              {/* Bottom Label */}
              <div className="bg-gray-200 text-center py-3 sm:py-4 font-semibold text-sm sm:text-base text-gray-900">
                {item.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
