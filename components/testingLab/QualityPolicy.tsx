"use client";

import {
  Microscope,
  FileCheck,
  Award,
  ShieldCheck,
  FlaskConical
} from "lucide-react";

export default function QualityPolicy() {
  const policies = [
    {
      icon: <Microscope size={40} />,
      text: "Produce reliable testing and calibration results by complying with recognized standards, statutory & regulatory requirements to achieve total customer satisfaction.",
    },
    {
      icon: <ShieldCheck size={40} />,
      text: "Dedicated Quality Management System ensuring the highest level of operational excellence and compliance.",
    },
    {
      icon: <FileCheck size={40} />,
      text: "Render accurate testing and calibration results through trained personnel as per defined quality manual guidelines.",
    },
    {
      icon: <Award size={40} />,
      text: "Compliant with ISO/IEC 17025:2017 standards and committed to continual improvement of management systems.",
    },
    {
      icon: <FlaskConical size={40} />,
      text: "Ensure complete impartiality by avoiding any activities that may compromise the integrity of laboratory operations.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F2E8C] mb-4">
            QUALITY POLICY
          </h2>
          <div className="w-24 h-1 bg-[#1F2E8C] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600">
            TAK Laboratory is committed to:
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {policies.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100"
            >
              <div className="flex gap-6 items-start">

                <div className="bg-[#1F2E8C]/10 p-4 rounded-2xl text-[#1F2E8C] group-hover:bg-[#1F2E8C] group-hover:text-white transition duration-500">
                  {item.icon}
                </div>

                <p className="text-gray-700 leading-relaxed text-lg">
                  {item.text}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
