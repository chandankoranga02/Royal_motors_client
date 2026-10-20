import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["500", "600", "700", "800", "900"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "MBBS in Abroad | Top Medical Universities, NMC & WHO Approved",
  description:
    "Pursue MBBS in Abroad with direct admissions in top-ranked government medical universities. 100% English medium, affordable tuition, and complete visa assistance.",
  keywords: [
    "MBBS in Abroad",
    "Study MBBS Abroad",
    "MBBS in Russia",
    "MBBS in Uzbekistan",
    "MBBS in Georgia",
    "NMC Approved Medical Universities",
  ],
  authors: [{ name: "Royal EduMed International" }],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${outfit.variable} antialiased`}
    >
      <body className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
