"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
} from "lucide-react";

const processCards = [
  {
    title: "Profile & Budget Counseling",
    description:
      "Match your NEET score, country preferences, and budget with top accredited universities.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    highlights: ["NEET score review", "Transparent budget plans"],
  },
  {
    title: "Guaranteed Admission Letter",
    description:
      "Direct university seat reservation with official Ministry provisional admission letters.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
    highlights: ["Direct seat reservation", "Zero hidden donation"],
  },
  {
    title: "Fast-Track Visa & Escort",
    description:
      "MEA apostille, certified translations, embassy visa stamping, and staff flight escorts.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    highlights: ["Guaranteed visa approval", "Airport pickup & hostel drop"],
  },
  {
    title: "6-Year NExT / USMLE Mentorship",
    description:
      "Digital coaching from Year 1, academic mentoring, and clinical internship orientation.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    highlights: ["Online NExT prep", "On-campus Indian mentors"],
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

export function WhatWeAreOffering() {
  return (
    <section
      id="services"
      className="relative w-full max-w-full overflow-hidden px-4 sm:px-6 py-14 sm:py-20 bg-slate-50/70 border-t border-slate-100 box-border"
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
            What We Are <span className="text-blue-600">Offering</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed text-center max-w-xl mx-auto px-2"
          >
            A transparent pathway from counseling to international medical graduation.
          </motion.p>
        </div>

        {/* Responsive Process Cards (1-Col on mobile, 2-Col on lg) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 w-full box-border">
          {processCards.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -4 }}
              className="w-full min-w-0 box-border rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-blue-500/40 transition-all duration-300 overflow-hidden flex flex-col sm:flex-row items-stretch"
            >
              {/* Image Container with Proper Aspect Ratio & No Fixed Pixels */}
              <div className="w-full sm:w-2/5 h-44 sm:h-auto relative overflow-hidden shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80";
                  }}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Container with min-w-0 flex-1 */}
              <div className="w-full sm:w-3/5 min-w-0 flex-1 p-4 sm:p-5 flex flex-col justify-between box-border">
                <div className="space-y-2 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 break-words leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed break-words">
                    {item.description}
                  </p>

                  <div className="space-y-1 pt-1 min-w-0">
                    {item.highlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-center gap-2 text-xs font-medium text-slate-700 min-w-0"
                      >
                        <span className="w-3.5 h-3.5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                        </span>
                        <span className="truncate">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
