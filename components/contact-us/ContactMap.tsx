"use client";

export default function ContactMap() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1F2E8C]">
            Our Location
          </h2>
          <div className="w-20 h-1 bg-[#1F2E8C] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Map Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">

          {/* Google Map Embed */}
        <iframe
  src="https://www.google.com/maps?q=25.2700174,82.960474&output=embed"
  width="100%"
  height="450"
  loading="lazy"
  className="w-full h-[400px] md:h-[500px]"
  allowFullScreen
></iframe>


          {/* Overlay Contact Card */}
          {/* <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-200 max-w-sm"> */}
            
            {/* <h3 className="text-xl font-semibold text-[#1F2E8C] mb-3">
              Head Office
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Aanya Enterprise Pvt. Ltd. <br />
              Sector 76, Noida <br />
              Uttar Pradesh, India
            </p> */}

            {/* <div className="mt-4 text-sm text-gray-700">
              <p>📞 +91 9876543210</p>
              <p>✉ info@aanyaenterprise.com</p>
            </div> */}
{/* 
          </div> */}
        </div>
      </div>
    </section>
  );
}
