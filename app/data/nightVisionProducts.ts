export interface Product {
  id: number;
  slug: string;
  title: string;
  image: string;
  description: string;
}

export const nightVisionProducts: Product[] = [
  {
    id: 1,
    slug: "night-vision-binocular",
    title: "Night Vision Binocular",
    image: "/products/night/binocular.png",
    description:
      "High-performance night vision binocular designed for long-range surveillance and tactical operations.",
  },
  {
    id: 2,
    slug: "night-vision-goggle",
    title: "Night Vision Goggle",
    image: "/products/night/goggle.png",
    description:
      "Lightweight and rugged night vision goggle suitable for hands-free operations.",
  },
  {
    id: 3,
    slug: "night-vision-monocular",
    title: "Night Vision Monocular",
    image: "/products/night/monocular.png",
    description:
      "Compact night vision monocular offering superior clarity in low-light environments.",
  },
];
