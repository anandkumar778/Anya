import Image from "next/image";

export default function DarviSection() {
  return (
    <section className="bg-[#f4f4f4] py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Brand Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
            <span className="text-gray-800">Dar</span>
            <span className="text-[var(--primary-blue)]">V</span>
            <span className="text-gray-500">i</span>
          </h2>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
            <strong>Aanya Enterprise Technologies</strong> proudly unveiled the
            <strong> “DarVi”</strong> brand in 2012, marking a significant
            milestone in its commitment to excellence in the field of
            <strong> Opto-electronics</strong>. The company has established a
            state-of-the-art manufacturing facility dedicated exclusively to
            opto-electronic systems, ensuring uncompromised quality, precision,
            and reliability.
          </p>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-8">
            The facility is equipped with advanced infrastructure including
            <strong> Clean Room environments</strong>, controlled laminar airflow
            stations, electronic testing labs, dedicated dark-room testing
            areas, and a <strong>NABL-accredited environmental testing
            facility</strong>. These capabilities reflect Aanya Enterprise
            Technologies’ focus on innovation, compliance, and superior product
            performance.
          </p>

          {/* CTA */}
          <button
            className="
              inline-flex items-center justify-center
              px-6 py-2.5 rounded-md
              border border-[var(--primary-blue)]
              text-[var(--primary-blue)] font-semibold text-sm sm:text-base
              transition-all duration-300
              hover:bg-[var(--primary-blue)]
              hover:text-white
              hover:shadow-md
            "
          >
            Learn More
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px]">
          <Image
            src="/hero/fix-img.png"
            alt="DarVi Opto-Electronic Device"
            fill
            className="object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}
