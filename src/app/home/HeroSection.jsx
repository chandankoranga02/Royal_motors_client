"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Gauge,
  Zap,
  Flame,
  ChevronRight,
  Play,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  heroStagger,
  fadeInUp,
  fadeInScale,
  antiGravityFloat,
} from "@/lib/animations/motionVariants";

const FEATURED_CARS = [
  {
    id: "phantom-gt",
    name: "Royal Apex GT-R",
    edition: "Obsidian Bespoke Edition",
    acceleration: "2.3s",
    topSpeed: "224 mph",
    power: "890 HP",
    category: "Hypercar",
    colorName: "Obsidian Metallic",
    accentColor: "#00f0ff",
    tagline: "Unrestrained V8 Twin-Turbo Precision Engineering",
    gradient: "from-cyan-500/20 via-blue-600/10 to-transparent",
  },
  {
    id: "ghost-monarch",
    name: "Monarch Sovereign V12",
    edition: "Elegance Grand Tourer",
    acceleration: "3.1s",
    topSpeed: "205 mph",
    power: "720 HP",
    category: "Ultra-Luxury",
    colorName: "Starlight Silver",
    accentColor: "#f59e0b",
    tagline: "Silken Grandeur Meets Unrivaled Dynamic Authority",
    gradient: "from-amber-500/20 via-orange-600/10 to-transparent",
  },
];

export function HeroSection() {
  const [activeCarIndex, setActiveCarIndex] = useState(0);
  const activeCar = FEATURED_CARS[activeCarIndex];

  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-obsidian-950">
      {/* Background Radial Glow & Ambient Flares */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Electric Cyan Radial Flare */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[650px] bg-gradient-to-b from-electric-cyan/20 via-electric-blue/10 to-transparent blur-[140px] rounded-full"
        />

        {/* Ambient Dark Obsidian Mesh Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)`,
            backgroundSize: "36px 36px",
          }}
        />

        {/* Diagonal Light Slices */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Staggered Content & Call To Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Top Routing Test Badge */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-2">
              <Badge variant="cyan">
                <Home className="w-3.5 h-3.5 text-electric-cyan" />
                ... Homepage
              </Badge>
              <Badge variant="silver">
                <Sparkles className="w-3.5 h-3.5 text-silver-metallic" />
                Next-Generation Automotive Luxury
              </Badge>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08]"
            >
              <span className="block text-metallic-gradient">ELEVATE EVERY</span>
              <span className="block text-electric-gradient drop-shadow-[0_0_35px_rgba(0,240,255,0.35)]">
                HEURISTIC DRIVE.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-silver-chrome max-w-xl leading-relaxed"
            >
              Royal Motors delivers curated access to the globe&apos;s most coveted
              hypercars and prestige grand tourers. Zero friction. Pure adrenaline.
              Delivered directly to your private estate or tarmac.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto"
            >
              <Button variant="primary" size="lg" className="group">
                Reserve Your Fleet
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>

              <Button variant="secondary" size="lg" className="group">
                <Play className="w-4 h-4 text-electric-cyan fill-electric-cyan/20" />
                Experience Film
              </Button>
            </motion.div>

            {/* Trust & Guarantee Markers */}
            <motion.div
              variants={fadeInUp}
              className="pt-6 border-t border-white/10 grid grid-cols-3 gap-6 w-full max-w-lg text-left"
            >
              <div>
                <p className="text-xl sm:text-2xl font-bold text-silver-light">100%</p>
                <p className="text-xs text-silver-chrome uppercase tracking-wider mt-0.5">
                  White-Glove Delivery
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-electric-cyan">$5.0M</p>
                <p className="text-xs text-silver-chrome uppercase tracking-wider mt-0.5">
                  Comprehensive Shield
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-silver-light">24/7</p>
                <p className="text-xs text-silver-chrome uppercase tracking-wider mt-0.5">
                  Dedicated Concierge
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating / Anti-Gravity Car Showcase Component */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            {/* Anti-gravity Floating Container */}
            <motion.div
              variants={antiGravityFloat}
              animate="animate"
              className="w-full relative"
            >
              {/* Outer Glow Halo behind showcase */}
              <div className="absolute inset-0 bg-electric-cyan/15 rounded-3xl blur-3xl transform -rotate-2" />

              {/* Glassmorphic Luxury Showcase Card */}
              <motion.div
                variants={fadeInScale}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl glass-panel p-6 sm:p-8 overflow-hidden shadow-card-luxury border border-white/15"
              >
                {/* Metallic Sheen Overlay */}
                <div className="absolute inset-0 bg-metallic-sheen pointer-events-none" />

                {/* Car Showcase Header */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div>
                    <span className="text-xs font-semibold text-electric-cyan uppercase tracking-widest">
                      {activeCar.category}
                    </span>
                    <h3 className="text-2xl font-bold text-silver-light mt-0.5">
                      {activeCar.name}
                    </h3>
                    <p className="text-xs text-silver-chrome">{activeCar.edition}</p>
                  </div>

                  <Badge variant={activeCarIndex === 0 ? "cyan" : "amber"}>
                    Available Now
                  </Badge>
                </div>

                {/* Simulated Anti-Gravity Vehicle Silhouette Visual */}
                <div className="relative my-8 py-10 flex items-center justify-center">
                  {/* Internal ambient radial glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${activeCar.gradient} rounded-2xl filter blur-xl`}
                  />

                  {/* Stylized Futuristic Automotive Silhouette SVG Graphic */}
                  <motion.div
                    key={activeCar.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 w-full flex flex-col items-center justify-center"
                  >
                    <svg
                      viewBox="0 0 500 180"
                      className="w-full h-44 drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)]"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1e293b" />
                          <stop offset="40%" stopColor="#0f172a" />
                          <stop offset="100%" stopColor="#020617" />
                        </linearGradient>
                        <linearGradient id="neonGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor={activeCar.accentColor} stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
                        </linearGradient>
                        <filter id="shadowFilter">
                          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor={activeCar.accentColor} floodOpacity="0.5" />
                        </filter>
                      </defs>

                      {/* Ground Reflected Shadow */}
                      <ellipse cx="250" cy="165" rx="200" ry="8" fill="rgba(0, 240, 255, 0.15)" filter="blur(6px)" />

                      {/* Aerodynamic Hypercar Body Contour */}
                      <path
                        d="M 45 130 C 70 120 100 120 140 105 C 180 90 220 55 280 55 C 340 55 380 75 420 100 C 450 115 470 125 475 130 C 465 140 435 145 390 145 C 375 145 365 130 340 130 C 315 130 305 145 190 145 C 175 145 165 130 140 130 C 115 130 105 145 60 145 Z"
                        fill="url(#bodyGrad)"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="1.5"
                      />

                      {/* Glass Cockpit Roofline */}
                      <path
                        d="M 215 88 C 240 62 275 60 325 65 C 360 70 380 90 395 102 C 320 95 250 92 215 88 Z"
                        fill="rgba(0, 240, 255, 0.12)"
                        stroke={activeCar.accentColor}
                        strokeWidth="1.2"
                      />

                      {/* Electric Headlight Laser Streamline */}
                      <path
                        d="M 435 110 L 468 122"
                        stroke={activeCar.accentColor}
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        filter="url(#shadowFilter)"
                      />

                      {/* Taillight Ribbon */}
                      <path
                        d="M 52 126 L 85 120"
                        stroke="#ff1e56"
                        strokeWidth="3"
                        strokeLinecap="round"
                        filter="blur(1px)"
                      />

                      {/* Front Aero Wheel Spoke */}
                      <circle cx="380" cy="138" r="24" fill="#080a0f" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                      <circle cx="380" cy="138" r="14" fill="#1e2433" stroke={activeCar.accentColor} strokeWidth="1.5" />
                      
                      {/* Rear Aero Wheel Spoke */}
                      <circle cx="120" cy="138" r="24" fill="#080a0f" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                      <circle cx="120" cy="138" r="14" fill="#1e2433" stroke={activeCar.accentColor} strokeWidth="1.5" />

                      {/* Carbon Side Splitter */}
                      <path
                        d="M 155 143 L 345 143"
                        stroke="rgba(255,255,255,0.4)"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>

                    <p className="text-xs text-silver-chrome/70 tracking-widest uppercase mt-2">
                      Hover To Engage Active Telemetry
                    </p>
                  </motion.div>
                </div>

                {/* Telemetry Performance Metrics */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10 relative z-10">
                  <div className="bg-obsidian-900/80 rounded-xl p-3 border border-white/5 hover:border-electric-cyan/30 transition-colors">
                    <div className="flex items-center gap-1.5 text-silver-chrome text-[11px] uppercase tracking-wider mb-1">
                      <Zap className="w-3.5 h-3.5 text-electric-cyan" />
                      0-60 MPH
                    </div>
                    <span className="text-lg font-bold text-silver-light">
                      {activeCar.acceleration}
                    </span>
                  </div>

                  <div className="bg-obsidian-900/80 rounded-xl p-3 border border-white/5 hover:border-electric-cyan/30 transition-colors">
                    <div className="flex items-center gap-1.5 text-silver-chrome text-[11px] uppercase tracking-wider mb-1">
                      <Gauge className="w-3.5 h-3.5 text-electric-cyan" />
                      Top Speed
                    </div>
                    <span className="text-lg font-bold text-silver-light">
                      {activeCar.topSpeed}
                    </span>
                  </div>

                  <div className="bg-obsidian-900/80 rounded-xl p-3 border border-white/5 hover:border-electric-cyan/30 transition-colors">
                    <div className="flex items-center gap-1.5 text-silver-chrome text-[11px] uppercase tracking-wider mb-1">
                      <Flame className="w-3.5 h-3.5 text-amber-400" />
                      Power
                    </div>
                    <span className="text-lg font-bold text-silver-light">
                      {activeCar.power}
                    </span>
                  </div>
                </div>

                {/* Showcase Switcher Pills */}
                <div className="flex items-center justify-between pt-6 mt-4 border-t border-white/5 relative z-10">
                  <div className="flex gap-2">
                    {FEATURED_CARS.map((car, idx) => (
                      <button
                        key={car.id}
                        onClick={() => setActiveCarIndex(idx)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          activeCarIndex === idx
                            ? "w-8 bg-electric-cyan shadow-glow-cyan"
                            : "w-2.5 bg-white/20 hover:bg-white/40"
                        }`}
                        aria-label={`Select ${car.name}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() =>
                      setActiveCarIndex((prev) => (prev + 1) % FEATURED_CARS.length)
                    }
                    className="flex items-center gap-1 text-xs text-silver-chrome hover:text-electric-cyan transition-colors"
                  >
                    Next Model <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
