import Image from "next/image";

export default function OverviewSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE CARD */}
          <div className="relative group">

            <div className="absolute -inset-4 bg-[var(--primary-blue)] rounded-3xl opacity-10 blur-2xl"></div>

            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/overview.jpg"
                alt="Testing Lab Overview"
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--primary-blue)] mb-6">
              OVERVIEW
            </h2>

            <div className="w-24 h-1 bg-[var(--primary-blue)] rounded-full mb-8"></div>

            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              To ensure the quality and reliability of our manufactured products,
              TAK established a state-of-the-art testing and thermal calibration
              laboratory in 2016. Accredited by NABL, the facility reflects our
              strong commitment to maintaining rigorous national standards.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              We provide comprehensive Testing and Calibration services for
              Electrical, Electronic and Opto-electronic equipment,
              delivering precision, transparency and reliability while
              meeting diverse client requirements.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
