"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const jobs = [
  {
    title: "Technician - Support",
    description:
      "Provide technical assistance, troubleshooting, and on-site support for customers.",
  },
  {
    title: "Assistant Manager - Support (AMC Sales)",
    description:
      "Handle AMC sales, customer coordination, and service contract management.",
  },
  {
    title: "Embedded – Design Engineer / Senior Design Engineer",
    description:
      "Work on embedded systems development, firmware programming, and hardware integration.",
  },
  {
    title: "Electronics – Design Engineer / Senior Design Engineer",
    description:
      "Design and develop advanced electronic systems and circuit solutions.",
  },
  {
    title: "Assistant Manager / Deputy Manager - Finance",
    description:
      "Manage financial operations, budgeting, taxation, and compliance processes.",
  },
  {
    title: "Sr. Executive / Assistant Manager - Govt. Sales",
    description:
      "Handle government tenders, sales processes, and client relationship management.",
  },
  {
    title: "Manager - SCM",
    description:
      "Oversee supply chain operations, vendor management, and procurement strategies.",
  },
  {
    title: "Manager - Design and Development",
    description:
      "Lead R&D initiatives, product innovation, and technical team management.",
  },
  {
    title: "Senior Design Engineer - Optics",
    description:
      "Develop optical systems and advanced imaging solutions.",
  },
  {
    title: "Engineer - Support",
    description:
      "Provide installation, testing, and after-sales technical support.",
  },
];

export default function CareersPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#1F2E8C]">
            CURRENT JOB OPENINGS
          </h2>
          <div className="w-24 h-1 bg-[#1F2E8C] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="border border-blue-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {job.title}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 text-[#1F2E8C] ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-blue-100">
                  {job.description}

                  <button className="mt-4 inline-block bg-[#1F2E8C] text-white px-5 py-2 rounded-lg hover:bg-[#1F2E8C] transition">
                    Apply Now
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
