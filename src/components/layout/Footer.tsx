import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-obsidian-950 border-t border-white/10 pt-16 pb-12 text-silver-chrome">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-wider text-metallic-gradient font-sans">
                ROYAL<span className="text-electric-cyan">MOTORS</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-silver-chrome/80">
              The premier hypercar private club and bespoke rental experience.
              Unprecedented automotive exclusivity across North America, Europe, and UAE.
            </p>
          </div>

          {/* Hypercar Fleet */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-silver-light mb-4">
              Curated Fleet
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#fleet" className="hover:text-electric-cyan transition-colors">
                  Bugatti Chiron Pur Sport
                </Link>
              </li>
              <li>
                <Link href="#fleet" className="hover:text-electric-cyan transition-colors">
                  Pagani Huayra Roadster
                </Link>
              </li>
              <li>
                <Link href="#fleet" className="hover:text-electric-cyan transition-colors">
                  Rolls-Royce Spectre Black Badge
                </Link>
              </li>
              <li>
                <Link href="#fleet" className="hover:text-electric-cyan transition-colors">
                  Ferrari SF90 XX Stradale
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-silver-light mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#services" className="hover:text-electric-cyan transition-colors">
                  Tarmac & Runway Delivery
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-electric-cyan transition-colors">
                  Bespoke Chauffeur Division
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-electric-cyan transition-colors">
                  Private Track Day Hosting
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-electric-cyan transition-colors">
                  Collector Vehicle Escrow
                </Link>
              </li>
            </ul>
          </div>

          {/* Concierge */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-silver-light mb-4">
              Global Concierge
            </h4>
            <div className="space-y-2 text-xs">
              <p>Monaco • Miami • Dubai • London</p>
              <p className="text-silver-light font-mono">+1 (800) 892-ROYAL</p>
              <p className="text-electric-cyan">concierge@royalmotors.luxury</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-silver-chrome/60 gap-4">
          <p>© 2026 Royal Motors International Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#privacy" className="hover:text-silver-light">
              Privacy Charter
            </Link>
            <Link href="#terms" className="hover:text-silver-light">
              Terms of Escort
            </Link>
            <Link href="#security" className="hover:text-silver-light">
              Security Protocol
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
