"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Globe2,
  Building2,
  ArrowRight,
} from "lucide-react";

export function WhoWeAre() {
  return (
    <section className="relative py-24 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ================= LEFT COLUMN: GRAPHIC ARTWORK (Seamlessly merged without hard border box) ================= */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center">
              {/* Subtle ambient radial glow behind the artwork to blend naturally with the page */}
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-100/40 via-blue-50/30 to-transparent rounded-full filter blur-2xl pointer-events-none" />
              <Image
                src="/who-we-are.png"
                alt="Who We Are - Education Advisors & Guidance Illustration"
                width={550}
                height={550}
                className="relative z-10 w-full h-auto max-h-[460px] object-contain select-none"
                priority
              />
            </div>
          </div>

          {/* ================= RIGHT COLUMN: EDITORIAL & BRAND COPY ================= */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-outfit tracking-tight">
                Who we are{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600">
                  ?
                </span>
              </h2>
              <p className="text-base sm:text-lg font-semibold text-blue-600 font-outfit">
                India&apos;s Trusted MBBS Overseas Education Consultants
              </p>
            </div>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              <p>
                We are dedicated to helping ambitious medical aspirants secure admissions in top-ranked, government-funded medical universities across the globe. Pursuing an MBBS degree abroad has become the preferred pathway for thousands of Indian students seeking world-class clinical training without exorbitant private college donations.
              </p>
              <p>
                Our mission is simple: to offer honest, personalized, and 100% transparent counseling. From selecting the ideal NMC-compliant university to guiding you through MEA apostille, visa clearance, flight arrangements, and dedicated on-campus hostel & Indian mess onboarding, we ensure you never feel alone at any step of your medical journey.
              </p>
            </div>

            {/* Quick Stats / Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="flex items-center gap-2 text-blue-600 mb-1">
                  <Building2 className="w-4 h-4" />
                  <span className="text-base font-bold font-outfit text-slate-900">10+</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">Partner Universities</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="flex items-center gap-2 text-emerald-600 mb-1">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-base font-bold font-outfit text-slate-900">100%</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">English Curriculum</p>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="flex items-center gap-2 text-sky-600 mb-1">
                  <Globe2 className="w-4 h-4" />
                  <span className="text-base font-bold font-outfit text-slate-900">Zero</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">Capitation / Donation</p>
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="pt-2">
              <Link
                href="/about-us"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm sm:text-base transition-colors shadow-md shadow-slate-900/10 cursor-pointer"
              >
                <span>Know More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
