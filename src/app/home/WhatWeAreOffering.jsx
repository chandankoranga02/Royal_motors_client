"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  FileBadge2,
  PlaneTakeoff,
  GraduationCap,
  ArrowRight,
  Check,
} from "lucide-react";

const offerings = [
  {
    title: "University & Budget Shortlisting",
    subtitle: "NEET & Financial Profile Matching",
    description:
      "Expert 1-on-1 counseling to evaluate your NEET qualification, preferred climate, tuition budget, and match you with top accredited government universities.",
    icon: Compass,
    highlights: [
      "Personalized eligibility report",
      "Transparent fee comparison",
      "Official university accreditation check",
    ],
  },
  {
    title: "Direct Admission Letter Issuance",
    subtitle: "Verified Ministry Offer Letter",
    description:
      "Direct dossier submission to the chosen state medical university. We secure your legitimate provisional admission letter and Ministry invitation quickly.",
    icon: FileBadge2,
    highlights: [
      "Direct university seat reservation",
      "Ministry invitation letter",
      "Zero hidden liaison fees",
    ],
  },
  {
    title: "Visa, Forex & Travel Management",
    subtitle: "End-to-End Departure Escort",
    description:
      "Complete documentation, MEA apostille certification, currency exchange (Forex) assistance, student visa stamping, and group flight escort to university.",
    icon: PlaneTakeoff,
    highlights: [
      "100% student visa guarantee",
      "Apostille & translation service",
      "Airport pickup & hostel check-in",
    ],
  },
  {
    title: "NExT & FMGE Preparation Support",
    subtitle: "Curriculum to Medical Licensing",
    description:
      "From Year 1, access integrated online FMGE/NExT coaching, on-campus Indian mentors, semester exam support, and clinical internship guidance.",
    icon: GraduationCap,
    highlights: [
      "Online NExT prep from 1st Year",
      "Dedicated Indian campus wardens",
      "Internship & licensing registration",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
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

export function WhatWeAreOffering() {
  return (
    <section id="services" className="relative py-24 bg-slate-50/75 border-t border-slate-100 overflow-hidden">
      {/* Background Subtle Line Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #2563eb 1px, transparent 1px), linear-gradient(to bottom, #2563eb 1px, transparent 1px)",
          backgroundSize: "48px 48px",
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
            What We Are <span className="text-blue-600">Offering</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto"
          >
            A streamlined pathway from your first eligibility counseling to your medical graduation and licensure.
          </motion.p>
        </div>

        {/* 4 Process Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {offerings.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col justify-between p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-600/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div>
                  {/* Clean Icon Header without 01/02 markings */}
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-600/20 transition-all duration-300">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600/80 mb-3 mt-0.5">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <span className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                        </span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtle Learn More Link */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
