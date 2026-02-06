import Image from "next/image";

export default function ReliabilitySection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-green-600 mb-4 sm:mb-6 leading-tight">
            WHEN RELIABILITY <br className="hidden sm:block" /> REALLY COUNTS
          </h2>

          <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            Established in 2001, TAK Technologies Pvt. Ltd. embarked on a mission
            to make a lasting impact on the Indian defense sector by delivering
            top-quality products and solutions coupled with efficient and
            responsive support services.
          </p>

          <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            With over 22 years of experience serving the Indian defense sector
            and various Government Establishments, we excel as manufacturer of
            Optical and Opto-electronics equipment’s and Security System
            Integrators, dedicated to meeting our clients' security and
            maintenance needs while ensuring utmost customer satisfaction.
          </p>

          <p className="text-gray-700 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
            In the world of precision optics, reliability is paramount. At our
            Electro Optical Manufacturing Company, we ensure our optical
            solutions perform consistently and dependably, meeting the most
            stringent standards.
          </p>

          <button className="border border-gray-300 px-5 sm:px-6 py-2.5 sm:py-3 rounded-md text-sm sm:text-base hover:bg-green-600 hover:text-white transition">
            Know More
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[260px] sm:h-[340px] md:h-[450px]">
          <Image
            src="/hero/bilding.png"
            alt="TAK Technologies Building"
            fill
            className="object-cover rounded-md"
            priority
          />
        </div>

      </div>
    </section>
  );
}
