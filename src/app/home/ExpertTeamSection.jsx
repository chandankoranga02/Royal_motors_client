"use client";

import React, { useState } from "react";
import { User, ChevronLeft, ChevronRight, Award } from "lucide-react";

// Real pages of distinct counselors & advisors so pagination actually displays fresh profiles
const teamPages = [
  [
    {
      name: "Dr. Vikram Sethi",
      role: "Chief Medical Advisor",
      specialty: "NMC & Clinical Guidance",
      experience: "12+ Yrs Experience",
    },
    {
      name: "Ananya Deshmukh",
      role: "Senior Overseas Counselor",
      specialty: "Russia & Uzbekistan Admissions",
      experience: "8+ Yrs Experience",
    },
    {
      name: "Rohit Malhotra",
      role: "Visa & MEA Documentation Head",
      specialty: "Embassy Liaison & Apostille",
      experience: "10+ Yrs Experience",
    },
    {
      name: "Pooja Kashyap",
      role: "Student Welfare & Campus Coordinator",
      specialty: "Hostel & Indian Mess Onboarding",
      experience: "6+ Yrs Experience",
    },
  ],
  [
    {
      name: "Dr. Arvind Nair",
      role: "Academic Dean & Mentor",
      specialty: "FMGE / NExT Prep Strategy",
      experience: "15+ Yrs Experience",
    },
    {
      name: "Meera Singhania",
      role: "Lead Admissions Officer",
      specialty: "Kazakhstan & Georgia Universities",
      experience: "7+ Yrs Experience",
    },
    {
      name: "Devendra Rathore",
      role: "Finance & Forex Specialist",
      specialty: "Education Loans & Fee Remittance",
      experience: "9+ Yrs Experience",
    },
    {
      name: "Simran Kaur",
      role: "Post-Arrival Welfare Lead",
      specialty: "Airport Escort & Hostel Allocation",
      experience: "5+ Yrs Experience",
    },
  ],
];

export function ExpertTeamSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = teamPages.length;

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const currentMembers = teamPages[currentPage];

  return (
    <section className="relative py-24 bg-slate-50/60 border-t border-slate-100 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Our Expert <span className="text-blue-600">Counselors & Team</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed max-w-2xl mx-auto">
            A dedicated team of senior doctors, licensed education consultants, and foreign documentation experts guiding your entire medical journey.
          </p>
        </div>

        {/* 4 Cards Grid - Compact and optimized for Mobile, Tablet, and Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 lg:gap-6 max-w-5xl lg:max-w-7xl mx-auto">
          {currentMembers.map((member, idx) => (
            <div
              key={`${currentPage}-${idx}`}
              className="group bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 lg:p-5 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              {/* Photo Placeholder Box - Sleek, compact height for mobile */}
              <div className="relative aspect-[4/4] sm:aspect-[4/4.5] w-full rounded-lg sm:rounded-xl bg-gradient-to-b from-slate-100 to-slate-200/80 border border-slate-200 flex flex-col items-center justify-center text-center p-2 sm:p-3 overflow-hidden">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/90 border border-slate-200 flex items-center justify-center text-slate-400 mb-1 sm:mb-2 shadow-inner">
                  <User className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 font-outfit">
                  Photo
                </span>
                <span className="text-[9px] sm:text-[11px] text-slate-400 mt-0.5 hidden sm:inline">
                  Insert Image Here
                </span>

                {/* Experience Badge */}
                <div className="absolute top-1.5 right-1.5 sm:top-2.5 sm:right-2.5 px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-md bg-white/95 text-[9px] sm:text-[10px] font-bold text-slate-700 border border-slate-200/80 shadow-xs flex items-center gap-1">
                  <Award className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-600 shrink-0" />
                  <span className="truncate">{member.experience}</span>
                </div>
              </div>

              {/* Member Meta */}
              <div className="mt-2.5 sm:mt-4 text-center space-y-0.5 sm:space-y-1">
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-slate-900 font-outfit tracking-tight leading-tight">
                  {member.name}
                </h3>
                <p className="text-[11px] sm:text-xs lg:text-sm font-semibold text-blue-600 font-sans leading-tight">
                  {member.role}
                </p>
                <p className="text-[10px] sm:text-xs text-slate-500 font-sans line-clamp-1">
                  {member.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel / Navigation Bar with functional active page flipping */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors shadow-xs cursor-pointer focus:outline-none"
            aria-label="Previous Page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="text-sm font-semibold text-slate-600 font-sans px-2">
            {currentPage + 1} / {totalPages}
          </span>

          <button
            type="button"
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors shadow-xs cursor-pointer focus:outline-none"
            aria-label="Next Page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
