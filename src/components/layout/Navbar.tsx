"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Compass, Car, PhoneCall, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Fleet", href: "#fleet", icon: Car },
    { label: "Experience", href: "#experience", icon: Compass },
    { label: "Concierge", href: "#concierge", icon: ShieldCheck },
    { label: "Contact", href: "#contact", icon: PhoneCall },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-obsidian-950/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-blue via-electric-cyan to-indigo-900 flex items-center justify-center p-0.5 shadow-glow-cyan transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-obsidian-950 rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-lg text-metallic-gradient tracking-tighter">
                  RM
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider text-metallic-gradient font-sans">
                ROYAL<span className="text-electric-cyan">MOTORS</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-silver-chrome -mt-1 font-semibold">
                Haute Horlogerie & Supercars
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1.5 text-sm font-medium text-silver-chrome hover:text-electric-cyan transition-colors duration-200"
                >
                  <Icon className="w-4 h-4 opacity-70" />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm">
              Member Access
            </Button>
            <Button variant="primary" size="sm">
              Reserve Vehicle
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-silver-metallic hover:text-white p-2"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-4 p-5 rounded-2xl bg-obsidian-900 border border-white/10 shadow-2xl flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-silver-metallic hover:text-electric-cyan font-medium py-1 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <Button variant="outline" size="sm" className="w-full">
                Member Access
              </Button>
              <Button variant="primary" size="sm" className="w-full">
                Reserve Vehicle
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
