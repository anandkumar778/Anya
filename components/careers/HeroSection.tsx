import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[75vh] md:h-[90vh]">

      {/* Background Image */}
      <Image
        src="/images/careers.jpg"
        alt="Careers"
        fill
        priority
        className="object-cover"
      />

      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1F2E8C]/85 via-[#1F2E8C]/70 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <div className="max-w-4xl">

          <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-6 tracking-wide">
            CAREERS
          </h1>

          <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed">
            Join our team of passionate professionals dedicated to innovation,
            precision and excellence in Testing & Calibration services.
            Build your future with TAK Laboratory.
          </p>

          <Link
            href="/careers/apply"
            className="inline-block bg-white text-[#1F2E8C] px-8 py-3 rounded-xl font-semibold hover:bg-[#1F2E8C] hover:text-white transition duration-500 shadow-lg"
          >
            Apply Now
          </Link>

        </div>
      </div>

    </section>
  );
}
