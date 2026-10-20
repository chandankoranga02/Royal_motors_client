"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Check } from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Custom 3D Medical & Education Vector Illustrations (High-Detail & Scalable)*/
/* -------------------------------------------------------------------------- */

// 1. 3D Golden Medical Caduceus & Stethoscope Shield Graphic
function MedicalGraphic() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 drop-shadow-[0_8px_16px_rgba(37,99,235,0.28)] shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="shieldBg" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="45%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </radialGradient>
        <linearGradient id="goldGleam" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="40%" stopColor="#facc15" />
          <stop offset="85%" stopColor="#ca8a04" />
          <stop offset="100%" stopColor="#854d0e" />
        </linearGradient>
      </defs>
      <path
        d="M50 8C65 14 82 17 84 32C86 52 74 74 50 92C26 74 14 52 16 32C18 17 35 14 50 8Z"
        fill="url(#shieldBg)"
      />
      <path
        d="M50 12C63 17 78 20 80 33C82 49 71 69 50 85C29 69 18 49 20 33C22 20 37 17 50 12Z"
        fill="#1e40af"
        opacity="0.35"
      />
      <path
        d="M44 26H56V38H68V50H56V62H44V50H32V38H44V26Z"
        fill="#ffffff"
        opacity="0.95"
      />
      <path
        d="M32 40C32 54 42 66 50 66C58 66 68 54 68 40"
        stroke="url(#goldGleam)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M50 66V75"
        stroke="url(#goldGleam)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="50" cy="78" r="6" fill="url(#goldGleam)" />
      <circle cx="50" cy="78" r="3" fill="#ffffff" />
      <circle cx="32" cy="38" r="3.5" fill="url(#goldGleam)" />
      <circle cx="68" cy="38" r="3.5" fill="url(#goldGleam)" />
      <path
        d="M72 16L74 22L80 24L74 26L72 32L70 26L64 24L70 22L72 16Z"
        fill="#fef08a"
      />
    </svg>
  );
}

// 2. 3D Passport, Stamped Visa & Jet Airplane Graphic
function VisaGraphic() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 drop-shadow-[0_8px_16px_rgba(147,51,234,0.28)] shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="passportCover" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="50%" stopColor="#6d28d9" />
          <stop offset="100%" stopColor="#4c1d95" />
        </linearGradient>
        <linearGradient id="passportGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="60%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#a16207" />
        </linearGradient>
        <linearGradient id="jetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#e0e7ff" />
          <stop offset="100%" stopColor="#c7d2fe" />
        </linearGradient>
      </defs>
      <rect
        x="22"
        y="16"
        width="46"
        height="64"
        rx="6"
        fill="url(#passportCover)"
        transform="rotate(-8 45 48)"
      />
      <rect
        x="24"
        y="18"
        width="42"
        height="60"
        rx="5"
        stroke="url(#passportGold)"
        strokeWidth="1.5"
        strokeDasharray="3 2"
        transform="rotate(-8 45 48)"
      />
      <circle
        cx="44"
        cy="44"
        r="11"
        stroke="url(#passportGold)"
        strokeWidth="2"
        transform="rotate(-8 45 48)"
      />
      <path
        d="M39 44H49M44 39V49"
        stroke="url(#passportGold)"
        strokeWidth="1.8"
        transform="rotate(-8 45 48)"
      />
      <g transform="translate(48, 48) rotate(10)">
        <rect
          x="0"
          y="0"
          width="36"
          height="22"
          rx="4"
          fill="#10b981"
          stroke="#ffffff"
          strokeWidth="2"
          className="drop-shadow-md"
        />
        <text
          x="18"
          y="15"
          fill="#ffffff"
          fontSize="9"
          fontWeight="900"
          textAnchor="middle"
          letterSpacing="0.8"
        >
          PASSED
        </text>
      </g>
      <g transform="translate(44, 8) rotate(22)">
        <path
          d="M26 12L38 2L42 5L33 16L45 22L42 25L28 20L20 28L18 26L21 19L10 14L12 11L26 12Z"
          fill="url(#jetGrad)"
          stroke="#4f46e5"
          strokeWidth="1.2"
          className="drop-shadow-lg"
        />
      </g>
    </svg>
  );
}

// 3. 3D University Campus & Graduation Mortarboard Graphic
function AdmissionGraphic() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 drop-shadow-[0_8px_16px_rgba(13,148,136,0.28)] shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bldgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2dd4bf" />
          <stop offset="50%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#115e59" />
        </linearGradient>
        <linearGradient id="capGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="80%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
        <linearGradient id="tasselGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="70%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#ca8a04" />
        </linearGradient>
      </defs>
      <path d="M18 78H82V84H18V78Z" fill="#0f766e" />
      <path d="M22 74H78V78H22V74Z" fill="#14b8a6" />
      <rect x="26" y="50" width="8" height="24" rx="2" fill="url(#bldgGrad)" />
      <rect x="38" y="50" width="8" height="24" rx="2" fill="url(#bldgGrad)" />
      <rect x="54" y="50" width="8" height="24" rx="2" fill="url(#bldgGrad)" />
      <rect x="66" y="50" width="8" height="24" rx="2" fill="url(#bldgGrad)" />
      <path d="M16 50H84L50 32L16 50Z" fill="url(#bldgGrad)" />
      <circle cx="50" cy="42" r="3.5" fill="#fef08a" />
      <g transform="translate(18, 10)">
        <polygon
          points="32,4 62,15 32,26 2,15"
          fill="url(#capGrad)"
          stroke="#38bdf8"
          strokeWidth="0.8"
        />
        <path
          d="M17 21V33C17 33 24 38 32 38C40 38 47 33 47 33V21"
          fill="#0f172a"
        />
        <circle cx="32" cy="15" r="2.5" fill="url(#tasselGold)" />
        <path
          d="M32 15C38 18 43 23 44 32"
          stroke="url(#tasselGold)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="44" cy="33" r="2.5" fill="url(#tasselGold)" />
      </g>
    </svg>
  );
}

// 4. 3D Warm Indian Food Thali & Friendly Campus Care Graphic
function CampusCareGraphic() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 drop-shadow-[0_8px_16px_rgba(245,158,11,0.28)] shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="bowlGrad" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="60%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </radialGradient>
        <linearGradient id="steamGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#f97316" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="68" rx="38" ry="16" fill="#78350f" />
      <ellipse cx="50" cy="65" rx="38" ry="15" fill="url(#bowlGrad)" />
      <ellipse cx="50" cy="63" rx="34" ry="12" fill="#fffbeb" />
      <circle cx="34" cy="62" r="7.5" fill="#f97316" stroke="#fbbf24" strokeWidth="1.5" />
      <circle cx="50" cy="61" r="7.5" fill="#10b981" stroke="#fbbf24" strokeWidth="1.5" />
      <circle cx="66" cy="62" r="7.5" fill="#ef4444" stroke="#fbbf24" strokeWidth="1.5" />
      <path
        d="M38 46C36 40 42 34 38 28"
        stroke="url(#steamGrad)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M50 44C47 37 53 31 50 24"
        stroke="url(#steamGrad)"
        strokeWidth="3.8"
        strokeLinecap="round"
      />
      <path
        d="M62 46C60 40 66 34 62 28"
        stroke="url(#steamGrad)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <g transform="translate(62, 16)">
        <circle cx="12" cy="12" r="11" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
        <path
          d="M12 17.5L6.5 12C4.5 10 4.5 7 6.5 5C8.5 3 11 4.5 12 6.5C13 4.5 15.5 3 17.5 5C19.5 7 19.5 10 17.5 12L12 17.5Z"
          fill="#ffffff"
        />
      </g>
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Features Data                                                              */
/* -------------------------------------------------------------------------- */

const features = [
  {
    id: "nmc-approved",
    positionClass: "pos-card-top",
    title: "NMC & WHO Approved",
    tag: "Govt. Accredited",
    graphic: MedicalGraphic,
    gradientRing: "from-blue-600 via-sky-400 to-cyan-400",
    glowShadow: "hover:shadow-[0_12px_45px_rgba(37,99,235,0.4)]",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    id: "visa-guarantee",
    positionClass: "pos-card-right",
    title: "100% Visa Guarantee",
    tag: "Zero Rejection",
    graphic: VisaGraphic,
    gradientRing: "from-purple-600 via-fuchsia-500 to-pink-500",
    glowShadow: "hover:shadow-[0_12px_45px_rgba(168,85,247,0.4)]",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    id: "direct-admissions",
    positionClass: "pos-card-bottom",
    title: "Direct Admissions",
    tag: "Zero Donation",
    graphic: AdmissionGraphic,
    gradientRing: "from-emerald-600 via-teal-400 to-teal-300",
    glowShadow: "hover:shadow-[0_12px_45px_rgba(16,185,129,0.4)]",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    id: "campus-care",
    positionClass: "pos-card-left",
    title: "On-Campus Care",
    tag: "24/7 Indian Wardens",
    graphic: CampusCareGraphic,
    gradientRing: "from-amber-500 via-orange-400 to-rose-400",
    glowShadow: "hover:shadow-[0_12px_45px_rgba(245,158,11,0.4)]",
    badgeBg: "bg-amber-50 text-amber-800 border-amber-200",
  },
];

export function WhyChooseUs() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="why-choose-us"
      className="relative w-full max-w-full overflow-hidden px-4 sm:px-6 py-14 sm:py-20 lg:py-28 bg-white border-t border-slate-100 box-border"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/[0.035] blur-[140px] rounded-full pointer-events-none" />

      <div className="relative w-full max-w-6xl mx-auto box-border">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14 px-2">
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3.5 shadow-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
            </span>
            <span>Why Choose Us</span>
          </motion.div>

          {/* Heading with Responsive Typography Clamps */}
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight text-center break-words"
          >
            Why Choose <span className="text-blue-600">Us</span>
          </motion.h2>

          {/* 1-Line Clean Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed text-center max-w-xl mx-auto px-2"
          >
            Your trusted bridge to global medical excellence with verified universities, zero donation fees, and complete on-ground care.
          </motion.p>
        </div>

        {/* ------------------------------------------------------------------------- */}
        {/* DESKTOP VIEW (md: and above) -> 3D Graphic Glassmorphic Orbital System    */}
        {/* ------------------------------------------------------------------------- */}
        <div className="hidden md:flex relative w-full items-center justify-center my-6 py-4">
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="orbit-container relative flex items-center justify-center w-[640px] h-[640px] lg:w-[700px] lg:h-[700px]"
          >
            {/* Striking Central Core with Pulsing Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none flex items-center justify-center">
              <div className="absolute w-36 h-36 lg:w-44 lg:h-44 rounded-full bg-blue-500/15 blur-xl animate-pulse" />
              <div className="absolute w-28 h-28 lg:w-36 lg:h-36 rounded-full bg-gradient-to-r from-blue-400/20 to-indigo-500/20 blur-md" />

              <div className="relative w-32 h-32 lg:w-36 lg:h-36 rounded-full bg-white/95 backdrop-blur-xl border border-blue-200/90 shadow-[0_15px_40px_rgba(37,99,235,0.18)] flex flex-col items-center justify-center text-center p-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-1.5 shadow-xs">
                  <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
                </div>
                <span className="text-[11px] font-black text-slate-900 tracking-tight uppercase leading-none">
                  Global MBBS
                </span>
                <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-widest mt-1">
                  Trust Hub
                </span>
                <div className="mt-1 flex items-center gap-1 text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/70">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                  <span>100% Verified</span>
                </div>
              </div>
            </div>

            {/* Revolving Orbit Track on Invisible Circumference */}
            <div
              className={`orbit-system relative w-full h-full flex items-center justify-center ${
                isPaused ? "is-paused" : ""
              }`}
            >
              {features.map((item) => {
                const Graphic = item.graphic;

                return (
                  <div
                    key={item.id}
                    className={`absolute top-1/2 left-1/2 ${item.positionClass}`}
                  >
                    <div className="card-counter-wrap">
                      <div
                        className={`group relative p-[3px] rounded-full aspect-square bg-gradient-to-tr ${item.gradientRing} shadow-lg transition-all duration-300 hover:scale-110 ${item.glowShadow} cursor-pointer select-none`}
                      >
                        <div className="w-[190px] h-[190px] lg:w-[210px] lg:h-[210px] rounded-full aspect-square bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 text-center">
                          <div className="mb-2 shrink-0 transition-transform duration-300 group-hover:scale-110">
                            <Graphic />
                          </div>

                          <h3 className="text-sm lg:text-[15px] font-extrabold text-slate-900 leading-tight px-2">
                            {item.title}
                          </h3>

                          <span
                            className={`mt-2 text-[10px] lg:text-[11px] font-bold px-3 py-0.5 rounded-full border ${item.badgeBg}`}
                          >
                            {item.tag}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------- */}
        {/* MOBILE VIEW (< md) -> 100% Responsive Full-Width Vertical Stack (0px Overflow) */}
        {/* ------------------------------------------------------------------------- */}
        <div className="block md:hidden w-full min-w-0 box-border">
          <div className="w-full max-w-md mx-auto flex flex-col gap-3.5 sm:gap-4 box-border">
            {features.map((item, idx) => {
              const Graphic = item.graphic;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="w-full min-w-0 box-border"
                >
                  <div
                    className={`relative p-[2px] rounded-2xl bg-gradient-to-tr ${item.gradientRing} shadow-sm active:scale-98 transition-all w-full box-border`}
                  >
                    <div className="rounded-[14px] bg-white/95 backdrop-blur-xl p-3.5 sm:p-4 flex items-center gap-3.5 w-full min-w-0 box-border">
                      <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                        <Graphic />
                      </div>

                      <div className="min-w-0 flex-1 text-left">
                        <span
                          className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.badgeBg} mb-1 truncate max-w-full`}
                        >
                          {item.tag}
                        </span>
                        <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug break-words">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Orbit Periphery Geometry & 60FPS CSS Animation */}
      <style>{`
        :root {
          --orbit-radius-desktop: 235px;
        }

        @media (min-width: 1024px) {
          :root {
            --orbit-radius-desktop: 260px;
          }
        }

        .orbit-system {
          animation: orbitSpin 36s linear infinite;
        }

        .pos-card-top {
          transform: translate(-50%, calc(-50% - var(--orbit-radius-desktop)));
        }
        .pos-card-right {
          transform: translate(calc(-50% + var(--orbit-radius-desktop)), -50%);
        }
        .pos-card-bottom {
          transform: translate(-50%, calc(-50% + var(--orbit-radius-desktop)));
        }
        .pos-card-left {
          transform: translate(calc(-50% - var(--orbit-radius-desktop)), -50%);
        }

        .card-counter-wrap {
          animation: counterSpin 36s linear infinite;
        }

        @keyframes orbitSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes counterSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        .orbit-system.is-paused,
        .orbit-system.is-paused .card-counter-wrap,
        .orbit-container:hover .orbit-system,
        .orbit-container:hover .card-counter-wrap {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
}
