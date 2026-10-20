"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe2,
  Clock,
  Banknote,
  BookOpen,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const destinations = [
  {
    country: "Russia",
    badge: "Top Global Benchmark",
    tag: "High FMGE Pass Ratio",
    duration: "5.8 Years",
    medium: "100% English",
    estimatedBudget: "₹18 - 35 Lakhs Total",
    annualTuition: "From ₹2.8 Lakh / Year",
    description:
      "World-renowned federal medical universities with 100+ years of clinical training legacy and large teaching hospitals.",
    topUniversities: ["Sechenov University", "Kazan Federal University", "Crimea Federal University"],
  },
  {
    country: "Uzbekistan",
    badge: "Budget Friendly & Fast Flight",
    tag: "Trending Choice",
    duration: "5 Years",
    medium: "100% English",
    estimatedBudget: "₹14 - 22 Lakhs Total",
    annualTuition: "From ₹2.2 Lakh / Year",
    description:
      "Modern NMC-compliant 5-year curriculum, low cost of living, Indian mess in hostels, and just 3 hours direct flight from Delhi.",
    topUniversities: ["Tashkent Medical Academy", "Samarkand State Medical", "Bukhara State Medical"],
  },
  {
    country: "Kazakhstan",
    badge: "Modern Clinical Simulation",
    tag: "WHO & WFME Listed",
    duration: "5 Years",
    medium: "100% English",
    estimatedBudget: "₹16 - 25 Lakhs Total",
    annualTuition: "From ₹2.5 Lakh / Year",
    description:
      "Peaceful campuses, English-taught programs, advanced medical simulation labs, and dedicated Indian faculty mentorship.",
    topUniversities: ["Kazakh National Medical", "Asfendiyarov National", "Semey State Medical"],
  },
  {
    country: "Georgia",
    badge: "European Union Curriculum",
    tag: "High USMLE Focus",
    duration: "6 Years",
    medium: "100% English",
    estimatedBudget: "₹25 - 40 Lakhs Total",
    annualTuition: "From ₹3.8 Lakh / Year",
    description:
      "European standard education, exceptional student safety index, and strong preparation pathways for USMLE and PLAB exams.",
    topUniversities: ["Tbilisi State Medical", "Batumi Shota Rustaveli", "New Vision University"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function WhereYouCanApply() {
  return (
    <section id="destinations" className="relative py-24 bg-white border-t border-slate-100 overflow-hidden">
      {/* Subtle Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#2563eb 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]"
          >
            Where You Can <span className="text-blue-600">Apply</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Top NMC & WHO recognized government universities offering English-medium MBBS with high clinical exposure.
          </motion.p>
        </div>

        {/* Destination Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {destinations.map((dest, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col justify-between rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-600/10 hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
            >
              <div className="p-7">
                {/* Header: Country Name + Tag */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Globe2 className="w-5 h-5 text-blue-600" />
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {dest.country}
                    </h3>
                  </div>
                  <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                    {dest.tag}
                  </span>
                </div>

                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-5">
                  {dest.badge}
                </p>

                {/* Data Matrix */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 mb-5 space-y-2.5">
                  {/* Estimated Budget */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 flex items-center gap-1.5 font-medium">
                      <Banknote className="w-3.5 h-3.5 text-blue-600" /> Estimated Budget
                    </span>
                    <span className="font-bold text-slate-900">{dest.estimatedBudget}</span>
                  </div>

                  {/* Course Duration */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-blue-600" /> Course Duration
                    </span>
                    <span className="font-semibold text-slate-800">{dest.duration}</span>
                  </div>

                  {/* Medium */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 flex items-center gap-1.5 font-medium">
                      <BookOpen className="w-3.5 h-3.5 text-blue-600" /> Teaching Medium
                    </span>
                    <span className="font-semibold text-blue-600">{dest.medium}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {dest.description}
                </p>

                {/* Top Universities */}
                <div className="space-y-1.5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Recognized Universities
                  </p>
                  {dest.topUniversities.map((uni, uIdx) => (
                    <div key={uIdx} className="flex items-center gap-1.5 text-xs text-slate-700">
                      <ShieldCheck className="w-3 h-3 text-blue-600 shrink-0" />
                      <span className="truncate">{uni}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer with Secondary CTA */}
              <div className="px-7 py-4 bg-slate-50/75 border-t border-slate-100">
                <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-semibold group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 shadow-sm transition-all duration-300">
                  <span>Check Eligibility</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
