"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileCheck2,
  Building2,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "NMC & WHO Approved",
    tagline: "Globally Valid Degree",
    description:
      "All partner universities are listed under WDOMS and fully compliant with NMC regulations, making degrees eligible for FMGE/NExT, USMLE, and PLAB.",
    badge: "Accredited",
    points: ["NMC guideline compliant", "Eligible for NExT & USMLE"],
  },
  {
    icon: FileCheck2,
    title: "100% Visa Assistance",
    tagline: "Apostille to Stamping",
    description:
      "End-to-end documentation care including MEA apostille, certified translations, embassy clearance, and guaranteed student visa issuance.",
    badge: "Zero Rejection",
    points: ["MEA apostille verification", "Airport departure escort"],
  },
  {
    icon: Building2,
    title: "Direct University Admission",
    tagline: "Zero Hidden Charges",
    description:
      "Official university representative partner. We guarantee transparent seat allotment with zero donation markups and direct university fee payments.",
    badge: "Official Partner",
    points: ["Direct bank fee transfer", "Zero middleman donation"],
  },
  {
    icon: HeartHandshake,
    title: "On-Campus Indian Support",
    tagline: "Indian Food & Mentors",
    description:
      "Dedicated Indian student coordinators on campus, separate secure hostels, and authentic Indian vegetarian and non-vegetarian mess facilities.",
    badge: "24/7 Wardens",
    points: ["Authentic Indian food mess", "24/7 on-ground assistance"],
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
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-24 bg-white border-t border-slate-100 overflow-hidden">
      {/* Subtle Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#2563eb 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Main Heading: Why Choose Us */}
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]"
          >
            Why Choose <span className="text-blue-600">Us</span>
          </motion.h2>

          {/* Subheading: The Bridge Statement */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            Your trusted bridge to global medical excellence with accredited universities, zero donation fees, and complete on-ground care.
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col justify-between p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-600/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div>
                  {/* Top: Icon + Micro-Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-600/20 transition-all duration-300">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Card Title & Tagline */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600/80 mt-0.5 mb-3">
                    {feature.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {feature.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 mb-6">
                    {feature.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtle Learn More Link */}
                <div className="pt-4 border-t border-slate-100">
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
