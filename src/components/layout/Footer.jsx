import React from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

// Official WhatsApp Brand Vector Icon
function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= TWO HALVES LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-slate-800/80">
          
          {/* ================= LEFT HALF: LOGO + SHORT DESCRIPTION ================= */}
          <div className="lg:col-span-5 space-y-6">
            {/* Logo and Brand Name */}
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 via-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform duration-300">
                <span className="font-extrabold text-xl font-sans tracking-tight">R</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white font-sans leading-none">
                  ROYAL<span className="text-blue-500">MOTORS</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mt-1">
                  Global Admissions &amp; Education Liaison
                </span>
              </div>
            </Link>

            {/* Short Description */}
            <p className="text-sm leading-relaxed text-slate-400 max-w-md">
              Royal Motors is India&apos;s premier overseas educational advisory and admissions portal. We guide aspiring medical students with direct access to top WHO &amp; NMC approved government universities worldwide, ensuring complete transparency and 100% visa success.
            </p>

            {/* Contact Touchpoints & WhatsApp */}
            <div className="space-y-3 pt-2">
              <a
                href="https://wa.me/919876543210?text=Hello%20Royal%20Motors%2C%20I%20would%20like%20to%20know%20more."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-emerald-950/60 border border-emerald-700/60 text-emerald-300 hover:bg-emerald-900/60 transition-all duration-200 group"
              >
                <div className="w-7 h-7 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                  <WhatsAppIcon className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                    Official WhatsApp
                  </span>
                  <span className="text-sm font-extrabold text-white font-mono">
                    +91 98765 43210
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-2.5 text-xs text-slate-400">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>admissions@royalmotors.com</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Connaught Place, New Delhi • Tashkent • Moscow</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>NMC Verified</span>
              </div>
              <span className="text-slate-700 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>WHO Recognized</span>
              </div>
              <span className="text-slate-700 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>100% Visa Guarantee</span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT HALF: QUICK LINKS, GOV SITES & POLICIES ================= */}
          {/* On mobile: grid-cols-2 puts Quick Links & Gov Sites in ONE ROW, Legal & Policy in ANOTHER ROW with 4 links horizontally */}
          <div className="lg:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 sm:gap-8">
            
            {/* ROW 1 (Mobile - Column 1): Quick Links */}
            <div className="col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4 sm:mb-5 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-blue-500 rounded-full" />
                Quick Links
              </h4>
              <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-blue-400 transition-colors" />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-blue-400 transition-colors" />
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/university"
                    className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-blue-400 transition-colors" />
                    <span>University</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-blue-400 transition-colors" />
                    <span>Contact Us</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* ROW 1 (Mobile - Column 2): Gov Sites */}
            <div className="col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4 sm:mb-5 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-emerald-500 rounded-full" />
                Gov Sites
              </h4>
              <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
                <li>
                  <a
                    href="https://www.nmc.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="truncate">NMC India</span>
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mea.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="truncate">Ministry of Ext. Affairs</span>
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.india.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="truncate">National Portal India</span>
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.who.int"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="truncate">WHO World Directory</span>
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://parivahan.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="truncate">Parivahan Gov Portal</span>
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </a>
                </li>
              </ul>
            </div>

            {/* ROW 2 (Mobile - Col Span 2): Legal & Policy with 4 links horizontally */}
            <div className="col-span-2 lg:col-span-1 pt-4 sm:pt-6 lg:pt-0 border-t border-slate-800/80 lg:border-t-0">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-3 sm:mb-4 lg:mb-5 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-amber-500 rounded-full" />
                Legal &amp; Policy
              </h4>
              {/* On mobile: arranged horizontally in a flex row with wrapping; on desktop: stacked cleanly */}
              <ul className="flex flex-row flex-wrap lg:flex-col items-center lg:items-start gap-x-5 gap-y-2.5 lg:gap-y-3 text-xs sm:text-sm">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 group whitespace-nowrap"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-amber-400 transition-colors" />
                    <span>Privacy &amp; Policy</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 group whitespace-nowrap"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-amber-400 transition-colors" />
                    <span>Terms &amp; Conditions</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 group whitespace-nowrap"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-amber-400 transition-colors" />
                    <span>Support &amp; Grievance</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 group whitespace-nowrap"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-amber-400 transition-colors" />
                    <span>Admission Charter</span>
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* ================= BOTTOM COPYRIGHT BAR ================= */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 text-center sm:text-left">
          <p>© 2026 Royal Motors. All rights reserved.</p>
          <div className="hidden sm:flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about-us" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/university" className="hover:text-white transition-colors">
              University
            </Link>
            <Link href="/contact-us" className="hover:text-white transition-colors">
              Contact Us
            </Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy &amp; Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
