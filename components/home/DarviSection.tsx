import Image from "next/image";

export default function DarviSection() {
  return (
    <section className="bg-[#f2f2f2] py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Big Heading / Logo */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-600 mb-4 sm:mb-6">
            Dar<span className="text-black">V</span>
            <span className="text-gray-500">i</span>
          </h2>

          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-4">
            Aanya Enterprise Technologies proudly unveiled the “DarVi” brand in the year
            2012, marking a significant milestone in their commitment to
            excellence in the field of Opto-electronics. The company has
            established its own state-of-the-art manufacturing facility
            exclusively devoted to Opto-electronics in order to ensure the
            highest standards of quality and precision.
          </p>

          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
            Our facility is equipped with cutting-edge amenities including
            Clean Room environments, meticulously controlled laminar airflow
            stations, electronic testing capabilities, dedicated dark room
            testing facilities, and specialized NABL accredited environmental
            testing facility. These resources reflect Aanya Enterprise Technologies’
            dedication to delivering superior products and pioneering
            advancements in the industry.
          </p>

          <button className="border border-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-md text-sm sm:text-base hover:bg-black hover:text-white transition">
            Learn More
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px]">
          <Image
            src="/hero/fix-img.png"
            alt="DarVi Device"
            fill
            className="object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}
