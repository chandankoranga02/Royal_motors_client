import { HeroSection } from "./home/HeroSection";
import { WhoWeAre } from "./home/WhoWeAre";
import { WhyChooseUs } from "./home/WhyChooseUs";
import { WhatWeAreOffering } from "./home/WhatWeAreOffering";
import { WhereYouCanApply } from "./home/WhereYouCanApply";
import { ExpertTeamSection } from "./home/ExpertTeamSection";
import { FaqSection } from "./home/FaqSection";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden bg-white">
      <HeroSection />
      <WhoWeAre />
      <WhyChooseUs />
      <WhatWeAreOffering />
      <WhereYouCanApply />
      <ExpertTeamSection />
      <FaqSection />
    </div>
  );
}





