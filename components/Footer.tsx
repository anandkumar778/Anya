"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0b4a2b] text-white">
      
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* LEFT FORM */}
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-8">
              Protect What Matters Most with Our<br />Top-of-the-Line Equipment
            </h2>

            <h3 className="text-orange-400 text-xl font-semibold mb-4">
              Get In Touch
            </h3>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Enter company name"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              E-mail
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Reason */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Select Reason
            </label>
            <select
              className="w-full border border-white rounded-md px-4 py-3 bg-[#0b4a2b] focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              <option value="">Select reason</option>
              <option>Business Inquiry</option>
              <option>Government Project</option>
              <option>Support</option>
              <option>Other</option>
            </select>
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-white mb-1">
              Message
            </label>
            <textarea
              rows={5}
              maxLength={250}
              placeholder="Write your message (Max 250 words)"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <p className="text-xs text-gray-500 mt-1">
              Max 250 words
            </p>
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-3 rounded-md shadow-lg transition"
            >
              SUBMIT
            </button>
          </div>

        </form>
    
          </div>

          {/* RIGHT LINKS */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">

            <div>
              <h4 className="text-orange-400 font-semibold mb-4">
                Aanya Enterprise
              </h4>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Career</li>
                <li>Get In Touch</li>
              </ul>
            </div>

            <div>
              <h4 className="text-orange-400 font-semibold mb-4">
                Products
              </h4>
              <ul className="space-y-2">
                <li>Night Vision Device</li>
                <li>Thermal Devices</li>
                <li>Day Optics Devices</li>
              </ul>
            </div>

            <div>
              <h4 className="text-orange-400 font-semibold mb-4">
                Accessories
              </h4>
              <ul className="space-y-2">
                <li>Accessories</li>
                <li>Others</li>
              </ul>
            </div>

            {/* REGISTERED */}
            <div className="col-span-2 md:col-span-3">
              <h4 className="text-gray-200 font-semibold mb-4">
                Registered with
              </h4>

              <div className="flex flex-wrap gap-4">
                {["make", "gem", "msme", "india"].map((img) => (
                  <div
                    key={img}
                    className="bg-white p-3 rounded-md"
                  >
                    <Image
                      src={`/logos/${img}.png`}
                      alt={img}
                      width={90}
                      height={40}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT BAR */}
      <div className="bg-[#06381f] py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-sm">

          <ContactBlock
            title="For Sales"
            email="sales@aanya-technologies.com"
            phone="+91 8510007185"
            ext="Ext. 122/135"
          />

          <ContactBlock
            title="For Support"
            email="support@aanya-technologies.com"
            phone="+91 9540543338"
            ext="Ext. 234/233"
          />

          <ContactBlock
            title="For Testing Lab"
            email="lab@aanya-technologies.com"
            phone="+91 9540631133"
            ext="Ext. 820/821"
          />
        </div>
      </div>

      {/* BOTTOM */}
      <div className="bg-[#042a17] text-center py-4 text-sm">
        Toll-free No. : 1800-123-9887
      </div>
      <div className="bg-[#0b4a2b]">
      
      {/* dotted divider */}
      <div className="border-t border-dotted border-white/70" />

      {/* content */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-white">
        
        <p className="text-center md:text-left">
          © Copyright 2026 Aanya Enterprise - All Rights Reserved |{" "}
          <span className="underline cursor-pointer">Sitemap</span> |{" "}
          <span className="underline cursor-pointer">Contact Us</span>
        </p>

        <p className="mt-2 md:mt-0">
          Designed &amp; Developed By:{" "}
          <span className="font-semibold">CSIPL</span>
        </p>
      </div>
    </div>
    </footer>
  );
}

/* Small component */
function ContactBlock({
  title,
  email,
  phone,
  ext,
}: {
  title: string;
  email: string;
  phone: string;
  ext: string;
}) {
  return (
    <div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{ext}</p>
    </div>
    
    
  );
}
