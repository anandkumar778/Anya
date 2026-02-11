import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="relative w-full py-32">

      {/* Background Image */}
      <Image
        src="/images/contact-bg.jpg"
        alt="Contact Background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Transparent Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

        <h2 className="text-4xl md:text-5xl font-extrabold text-green-500 mb-8">
          CONTACT US
        </h2>

        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          TAK Laboratory is pleased to offer its expertise in Testing & Calibration.
          If you are seeking reliable solutions, we are here to assist you.
        </p>

        <p className="text-lg mb-4">
          📞 <span className="font-semibold">Mobile:</span> 9540631133
        </p>

        <p className="text-lg mb-4">
          ✉ <span className="font-semibold">Email:</span> lab@tak-technologies.com
        </p>

        <p className="text-lg mb-4">
          ☎ <span className="font-semibold">Landline:</span> +91-120-4279676/78
        </p>

        <p className="text-lg mb-4">
          🏢 <span className="font-semibold">Address:</span> A68, Sector 80,
          Noida, Uttar Pradesh, India – 201305
        </p>

      </div>
    </section>
  );
}
