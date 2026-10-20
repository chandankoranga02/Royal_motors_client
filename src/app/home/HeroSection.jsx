"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Stethoscope,
} from "lucide-react";

const TYPEWRITER_PHRASES = [
  "MBBS in Abroad?",
  "Top Govt. Medical Colleges?",
  "NMC & WHO Approved Universities?",
  "MBBS at Affordable Fees?",
];

export function HeroSection() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const targetPhrase = TYPEWRITER_PHRASES[phraseIndex];

    if (!isDeleting) {
      if (currentText.length < targetPhrase.length) {
        timer = setTimeout(() => {
          setCurrentText(targetPhrase.slice(0, currentText.length + 1));
        }, 85);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(targetPhrase.slice(0, currentText.length - 1));
        }, 45);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % TYPEWRITER_PHRASES.length);
        }, 300);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex]);

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

  const itemFadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageFloat = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const keyHighlights = [
    "NMC & WHO Recognized Universities",
    "Affordable Tuition Fees with Zero Donation",
    "100% English Medium Curriculum",
    "Guaranteed Admission & Visa Support",
  ];

  return (
    <section className="relative w-full bg-white text-slate-900 pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 overflow-hidden border-b border-slate-100">
      {/* Background Soft Subtle Glow & Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100/70 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-emerald-100/60 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 w-80 h-80 bg-sky-100/50 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* 
          MOBILE/TABLET: relative container with image behind text, all centered
          DESKTOP (lg+): side-by-side grid layout 
        */}
        <div className="relative lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12 lg:items-center">

          {/* ======= MOBILE/TABLET BACKGROUND IMAGE (behind text) ======= */}
          <div className="lg:hidden absolute inset-0 flex items-center justify-center pointer-events-none">
            <Image
              src="/hero.avif"
              alt=""
              width={500}
              height={420}
              className="w-[85%] max-w-[400px] h-auto object-contain opacity-[0.12] select-none mix-blend-multiply"
              aria-hidden="true"
            />
          </div>

          {/* ================= LEFT/CENTER CONTENT COLUMN ================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-7 space-y-6"
          >
            {/* Top Pill / Badge */}
            <motion.div variants={itemFadeUp}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
                </span>
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Admissions Open 2026-27 • Global Medical Colleges</span>
              </div>
            </motion.div>

            {/* Headline with Typewriter Animation */}
            <motion.div variants={itemFadeUp} className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Want to Pursue{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 pt-1 min-h-[1.25em]">
                  {currentText || "MBBS in Abroad?"}
                  <span className="inline-block w-[3.5px] h-[0.88em] bg-blue-600 ml-1.5 align-middle animate-pulse" />
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                Begin your medical journey with top-ranked, globally accredited government medical universities.
              </p>
            </motion.div>

            {/* Key Value Checklist */}
            <motion.div
              variants={itemFadeUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 w-full max-w-xl text-left mx-auto lg:mx-0 pt-1"
            >
              {keyHighlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </motion.div>

            {/* ================= TWO ACTION BUTTONS ================= */}
            <motion.div
              variants={itemFadeUp}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto"
            >
              {/* Button 1: Blue and White */}
              <Link href="/university" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 border border-blue-500 hover:shadow-blue-600/40 transition-all duration-300 cursor-pointer group"
                >
                  <GraduationCap className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-12" />
                  <span>Explore Programs</span>
                  <ArrowRight className="w-4 h-4 text-white/90 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </Link>

              {/* Button 2: Green Light and Black */}
              <Link href="/contact-us" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#4ade80] hover:bg-[#22c55e] text-black font-semibold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-500/20 border border-emerald-400 hover:shadow-black/20 transition-all duration-300 cursor-pointer group"
                >
                  <Stethoscope className="w-5 h-5 text-black transition-transform duration-300 group-hover:scale-110" />
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4 text-black transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* ======= DESKTOP RIGHT IMAGE COLUMN (lg+ only) ======= */}
          <div className="hidden lg:flex lg:col-span-5 relative items-center justify-center">
            <motion.div
              variants={imageFloat}
              animate="animate"
              className="relative w-full flex justify-center items-center"
            >
              <Image
                src="/hero.avif"
                alt="Pursue MBBS Abroad with Top Medical Universities"
                width={650}
                height={550}
                priority
                sizes="45vw"
                className="w-full max-w-[580px] h-auto object-contain select-none mix-blend-multiply"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
