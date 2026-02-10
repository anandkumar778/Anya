"use client";

import { Eye, Target, Binoculars, Users, Layers } from "lucide-react";
import { useEffect, useState } from "react";

export default function VisionMission() {
  return (
    <section className="py-10 sm:py-14 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* TOP CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-12 md:mb-16">

          {/* VISION */}
          <div className=" rounded-xl p-5 sm:p-8 md:p-10 flex gap-4 sm:gap-6">
            <Eye className="text-black shrink-0 w-8 h-8 sm:w-10 sm:h-10 mt-1" />
            <div>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-[var(--primary-blue)] mb-3">
                VISION
              </h3>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                To build an organization that demonstrates visible synergy and
                remains most competitive & leading solution provider in all the
                fields of our activities by providing our customers with the
                best-in-class products and services.
              </p>
            </div>
          </div>

          {/* MISSION */}
          <div className=" rounded-xl p-5 sm:p-8 md:p-10 flex gap-4 sm:gap-6">
            <Target className="text-black shrink-0 w-8 h-8 sm:w-10 sm:h-10 mt-1" />
            <div>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-[var(--primary-blue)] mb-3">
                MISSION
              </h3>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                To set a benchmark in quality by achieving the highest standards
                of designing and manufacturing Electro-optical products of
                desired specifications in order to cement a long-term
                relationship with our customers, through loyalty & trust.
              </p>
            </div>
          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          <Stat icon={<Binoculars />} end={100} label="Products" />
          <Stat icon={<Users />} end={150} label="Employees" />
          <Stat icon={<Target />} end={22} label="Years Experience" />
          <Stat icon={<Layers />} end={200} label="Projects" />
        </div>

      </div>
    </section>
  );
}

/* 🔁 AUTO COUNTER */
function Stat({
  icon,
  end,
  label,
}: {
  icon: React.ReactNode;
  end: number;
  label: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;

    const start = () => {
      let current = 0;
      const duration = 2000;
      const stepTime = 20;
      const steps = duration / stepTime;
      const increment = end / steps;

      interval = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(interval);

          timeout = setTimeout(() => {
            setCount(0);
            start();
          }, 2000);
        } else {
          setCount(Math.ceil(current));
        }
      }, stepTime);
    };

    start();

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [end]);

  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3">
      <div className="text-[var(--primary-blue)] w-8 h-8 sm:w-9 sm:h-9">{icon}</div>
      <h4 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--primary-blue)]">
        {count}+
      </h4>
      <p className="text-xs sm:text-sm md:text-base text-gray-800">
        {label}
      </p>
    </div>
  );
}
