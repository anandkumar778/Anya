"use client";

import Image from "next/image";

const column1 = [
  "/hero/clint-4.png",
  "/hero/drdo.png",
  "/hero/army.png",
  "/hero/air.png",
];

const column2 = [
  "/hero/clint-7.png",
  "/hero/navay.png",
  "/hero/uprnn.png",
  "/hero/ecil.png",
];

export default function ClientsScrollSection() {
  return (
    <section
      className="relative py-16 sm:py-24 md:py-32 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/india-map.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[1px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="backdrop-blur-md bg-white/5 p-5 sm:p-6 rounded-2xl border border-white/10">
          <h2 className="text-[var(--primary-blue)] text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 uppercase">
            Valued Clients & <br /> Credentials
          </h2>

          <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-xl">
            We continuously support State and Local Government agencies in
            maintaining high-level security for their buildings and employees.
            Below are some government agencies for whom we have successfully
            performed work and continue to provide services.
          </p>
        </div>

        {/* RIGHT SCROLLING CARDS */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 h-[300px] sm:h-[360px] md:h-[420px] overflow-hidden">

          {/* COLUMN 1 – UP */}
          <div className="relative overflow-hidden">
            <div className="animate-scroll-up space-y-4 sm:space-y-6">
              {column1.map((src, i) => (
                <div
                  key={i}
                
                  
                 className="relative w-full h-[220px] md:h-[420px]">
  <Image
    src={src}
    alt="Responsive Image"
    fill
    className="object-cover"
  />
</div>

              ))}
            </div>
          </div>

          {/* COLUMN 2 – DOWN */}
          <div className="relative overflow-hidden">
            <div className="animate-scroll-down space-y-4 sm:space-y-6">
              {column2.map((src, i) => (
                <div
                  key={i}
                  className="bg-white/90 backdrop-blur rounded-xl shadow-xl p-4 sm:p-6 flex items-center justify-center"
                >
                  <Image
                    src={src}
                    alt=""
                    width={120}
                    height={70}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
