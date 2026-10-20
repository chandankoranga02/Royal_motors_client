"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap } from "lucide-react";

const destinations = [
  {
    country: "Russia",
    flag: "🇷🇺",
    feeRange: "₹18L - ₹35L",
    duration: "5.8 Yrs",
    image:
      "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=600&q=80",
    topColleges: ["Sechenov University", "Kazan Federal University"],
  },
  {
    country: "Uzbekistan",
    flag: "🇺🇿",
    feeRange: "₹14L - ₹22L",
    duration: "5 Yrs",
    image:
      "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=600&q=80",
    topColleges: ["Tashkent Medical Academy", "Samarkand State Medical"],
  },
  {
    country: "Kazakhstan",
    flag: "🇰🇿",
    feeRange: "₹16L - ₹25L",
    duration: "5 Yrs",
    image:
      "https://images.unsplash.com/photo-1558588942-930faae5a389?auto=format&fit=crop&w=600&q=80",
    topColleges: ["Kazakh National Medical", "Asfendiyarov National"],
  },
  {
    country: "Georgia",
    flag: "🇬🇪",
    feeRange: "₹25L - ₹40L",
    duration: "6 Yrs",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=600&q=80",
    topColleges: ["Tbilisi State Medical", "Batumi Shota Rustaveli"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export function WhereYouCanApply() {
  return (
    <section
      id="destinations"
      className="relative w-full max-w-full overflow-hidden px-4 sm:px-6 py-14 sm:py-20 bg-white border-t border-slate-100 box-border"
    >
      <div className="relative w-full max-w-6xl mx-auto box-border">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14 px-2">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight text-center break-words"
          >
            Where You Can <span className="text-blue-600">Apply</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed text-center max-w-xl mx-auto px-2"
          >
            Top NMC & WHO accredited government medical destinations.
          </motion.p>
        </div>

        {/* 100% Mobile Responsive Destination Cards (1-Col on mobile, 2-Col on sm, 4-Col on lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full box-border">
          {destinations.map((dest, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -6 }}
              className="group w-full min-w-0 box-border rounded-3xl bg-slate-50/70 border border-slate-200/90 p-4 sm:p-5 flex flex-col items-center text-center shadow-xs hover:shadow-xl hover:border-blue-500/40 hover:bg-white transition-all duration-300"
            >
              {/* Borderless Circular Image Frame with Soft Shadow */}
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-md group-hover:scale-105 group-hover:shadow-lg transition-all duration-500 shrink-0 mb-3 sm:mb-4">
                <img
                  src={dest.image}
                  alt={dest.country}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Country & Flag */}
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center gap-2 justify-center break-words">
                <span className="text-2xl shrink-0">{dest.flag}</span>
                <span className="truncate">{dest.country}</span>
              </h3>

              {/* Fee & Duration Pill */}
              <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-bold text-blue-700 max-w-full">
                <span className="truncate">{dest.feeRange}</span>
                <span className="text-blue-300 shrink-0">•</span>
                <span className="shrink-0">{dest.duration}</span>
              </div>

              {/* Top Colleges with University Graphic Icon */}
              <div className="w-full mt-3.5 pt-3.5 border-t border-slate-200/70 space-y-2 text-left box-border">
                {dest.topColleges.map((college, cIdx) => (
                  <div
                    key={cIdx}
                    className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-white/80 rounded-xl px-2.5 py-1.5 border border-slate-200/60 w-full min-w-0 box-border"
                  >
                    <div className="w-6 h-6 rounded-lg bg-blue-100/70 text-blue-700 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-3.5 h-3.5 stroke-[2]" />
                    </div>
                    <span className="truncate flex-1 min-w-0">{college}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="w-full mt-4">
                <button className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 shadow-xs transition-all duration-200 cursor-pointer">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
