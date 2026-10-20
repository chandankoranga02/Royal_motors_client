import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "Royal Motors | Elite Supercar & Prestige Automobile Platform",
  description:
    "Experience the world's most distinguished hypercars and luxury grand tourers. White-glove concierge, runway delivery, and bespoke membership.",
  keywords: [
    "Luxury Car Rental",
    "Hypercar Club",
    "Royal Motors",
    "Exotic Supercars",
    "Bespoke Chauffeur",
  ],
  authors: [{ name: "Royal Motors International" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} dark antialiased`}>
      <body className="min-h-screen bg-obsidian-950 text-silver-light selection:bg-electric-cyan selection:text-slate-950 flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
