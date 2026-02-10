"use client";

import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    reason: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.reason) newErrors.reason = "Please select a reason";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    alert("Form submitted successfully ✅");
    setFormData({
      name: "",
      company: "",
      email: "",
      reason: "",
      message: "",
    });
  };

  const fieldClass =
    "w-full rounded-md px-3 py-2 text-black bg-white border border-gray-300 " +
    "hover:border-black focus:border-black focus:outline-none transition";

  return (
    <footer className="bg-[var(--primary-blue)] text-white text-sm">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* FORM */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-6">
              Protect What Matters Most with Our<br />
              Top-of-the-Line Equipment
            </h2>

            <h3 className="text-lg font-semibold mb-3">Get In Touch</h3>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {/* Name */}
              <div>
                <label>Name</label>
                <input name="name" value={formData.name} onChange={handleChange} className={fieldClass} />
                {errors.name && <p className="text-red-300 text-xs">{errors.name}</p>}
              </div>

              {/* Company */}
              <div>
                <label>Company Name</label>
                <input name="company" value={formData.company} onChange={handleChange} className={fieldClass} />
                {errors.company && <p className="text-red-300 text-xs">{errors.company}</p>}
              </div>

              {/* Email */}
              <div>
                <label>Email</label>
                <input name="email" value={formData.email} onChange={handleChange} className={fieldClass} />
                {errors.email && <p className="text-red-300 text-xs">{errors.email}</p>}
              </div>

              {/* Reason */}
              <div>
                <label>Select Reason</label>
                <select name="reason" value={formData.reason} onChange={handleChange} className={fieldClass}>
                  <option value="">Select reason</option>
                  <option>Business Inquiry</option>
                  <option>Government Project</option>
                  <option>Support</option>
                  <option>Other</option>
                </select>
                {errors.reason && <p className="text-red-300 text-xs">{errors.reason}</p>}
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label>Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={fieldClass}
                />
                {errors.message && <p className="text-red-300 text-xs">{errors.message}</p>}
              </div>

              {/* Submit */}
              {/* <div className="md:col-span-2">
                <button
                  type="submit"
                  className="bg-white text-[var(--primary-blue)] font-semibold px-8 py-2 rounded-md hover:bg-black hover:text-white transition"
                >
                  SUBMIT
                </button>
              </div> */}
                  <h1 className="text-white font-bold text-center">
 
</h1>

<button
  className="
    relative inline-flex items-center justify-center
    px-5 py-2.5 rounded-md
    border border-[var(--primary-blue)]
    bg-[var(--primary-blue)]
    text-white font-semibold
    transition-all duration-300 ease-in-out

    hover:bg-white
    hover:text-[var(--primary-blue)]
    hover:shadow-lg

    active:scale-95
    focus:outline-none
    focus:ring-2 focus:ring-[var(--primary-blue)] focus:ring-offset-2
  "
>
  Submit
</button>



            </form>
          </div>

          {/* RIGHT LINKS */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6">
            <FooterColumn title="Aanya Enterprise" items={["About Us", "Career", "Get In Touch"]} />
            <FooterColumn title="Products" items={["Night Vision Device", "Thermal Devices", "Day Optics Devices"]} />
            <FooterColumn title="Accessories" items={["Accessories", "Others"]} />

            <div className="col-span-2 md:col-span-3">
              <h4 className="text-gray-200 font-semibold mb-3">Registered with</h4>
              <div className="flex gap-3">
                {["make", "gem", "msme", "india"].map((img) => (
                  <div key={img} className="bg-white p-2 rounded">
                    <Image src={`/logos/${img}.png`} alt={img} width={70} height={32} />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CONTACT BAR */}
      <div className="bg-[var(--primary-blue)] py-6">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <ContactBlock title="For Sales" email="sales@aanya-technologies.com" phone="+91 8510007185" ext="Ext. 122/135" />
          <ContactBlock title="For Support" email="support@aanya-technologies.com" phone="+91 9540543338" ext="Ext. 234/233" />
          <ContactBlock title="For Testing Lab" email="lab@aanya-technologies.com" phone="+91 9540631133" ext="Ext. 820/821" />
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-dotted border-white/70" />
      <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row justify-between text-xs">
        <p>© 2026 Aanya Enterprise. All Rights Reserved</p>
        <p>Designed & Developed by <strong>CSIPL</strong></p>
      </div>
    </footer>
  );
}

/* Reusable */
function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ContactBlock({ title, email, phone, ext }: any) {
  return (
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{ext}</p>
    </div>
  );
}
