"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, MessageCircle, PhoneCall, Sparkles } from "lucide-react";

const faqData = [
  {
    question: "Can I study MBBS abroad without qualifying NEET?",
    answer:
      "No. According to the National Medical Commission (NMC) guidelines, qualifying NEET-UG is mandatory for all Indian students who wish to pursue MBBS abroad and practice medicine in India upon return. Your NEET qualification score remains valid for 3 years for foreign medical admissions.",
  },
  {
    question: "Which is the best country for MBBS abroad for Indian students?",
    answer:
      "Popular, safe, and top-ranked destinations include Russia, Uzbekistan, Kazakhstan, and Georgia. These countries provide NMC-compliant 5.8 to 6-year programs, 100% English-medium instruction, affordable tuition fees, high-quality clinical hospital exposure, and dedicated Indian mess facilities.",
  },
  {
    question: "What are the MBBS abroad fees for Indian students?",
    answer:
      "The total package typically ranges between ₹18 Lakhs to ₹35 Lakhs for the entire course duration (5 to 6 years), covering tuition fees and hostel accommodation. Compared to private Indian medical colleges charging ₹60 Lakhs to ₹1+ Crore, studying abroad offers premium quality education at a fraction of the cost with zero donations.",
  },
  {
    question: "Is an MBBS degree from abroad valid in India?",
    answer:
      "Yes. Degrees awarded by universities listed in WDOMS (World Directory of Medical Schools) and recognized by the WHO and NMC are fully valid in India. Graduates are eligible to appear for the NExT (National Exit Test) / FMGE screening exam to obtain permanent medical registration in India.",
  },
  {
    question: "Can I switch countries or universities mid-degree?",
    answer:
      "Under the NMC Foreign Medical Graduate Licentiate (FMGL) Regulations, university transfers or migrating between countries mid-course are strictly not permitted if you intend to practice in India. The entire academic coursework and compulsory clinical internship must be completed at the same medical university.",
  },
  {
    question: "Is Indian food available in the university hostels?",
    answer:
      "Yes. Almost all our partner government medical colleges feature dedicated on-campus Indian messes that serve both vegetarian and non-vegetarian Indian meals cooked with Indian spices by experienced Indian cooks.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative py-24 bg-white border-t border-slate-100 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Aligned with other homepage sections (Why Choose Us / Where You Can Apply) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about pursuing your MBBS abroad, university accreditations, and the admissions process.
          </p>
        </div>

        {/* FAQ Accordion List - Perfectly responsive across phone, tablet, and desktop */}
        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-3.5">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-[#f3f4f6] rounded-xl overflow-hidden border border-slate-200/60 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left py-4 sm:py-5 px-4 sm:px-6 flex items-center justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-outfit font-medium text-slate-900 text-sm sm:text-base md:text-lg leading-snug pr-1">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-1 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-sans border-t border-slate-200/60">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Counseling CTA Banner - Responsive across phones, tablets, and desktops */}
        <div className="max-w-4xl mx-auto mt-12 sm:mt-16 p-5 sm:p-7 md:p-8 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-xl shadow-blue-600/15 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1.5 sm:space-y-2">
            <div className="inline-flex items-center gap-1.5 text-blue-100 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Free 1-on-1 Personalized Guidance
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-outfit leading-tight">
              Still have questions about studying MBBS abroad?
            </h3>
            <p className="text-blue-100/90 text-xs sm:text-sm md:text-base font-sans max-w-xl">
              Talk directly to our expert education counselors for free university selection, fee breakdowns, and admission support.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
            <Link
              href="/contact-us"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-semibold text-xs sm:text-sm transition-colors shadow-md"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Talk to Counselor</span>
            </Link>
            <a
              href="https://wa.me/919999999999?text=Hello%20I%20have%20questions%20regarding%20MBBS%20Abroad"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs sm:text-sm transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
