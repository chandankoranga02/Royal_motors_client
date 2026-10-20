import { HeroSection } from "./home/HeroSection";
import { WhyChooseUs } from "./home/WhyChooseUs";
import { WhatWeAreOffering } from "./home/WhatWeAreOffering";
import { WhereYouCanApply } from "./home/WhereYouCanApply";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden bg-white">
      <HeroSection />
      <WhyChooseUs />
      <WhatWeAreOffering />
      <WhereYouCanApply />
    </div>
  );
}
