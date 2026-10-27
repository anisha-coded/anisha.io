import React from "react";
import PortfolioHeader from "@/components/portfolio/PortfolioHeader";
import IntroductionRow from "@/components/portfolio/IntroductionRow";
import PathRows from "@/components/portfolio/PathRows";
import SkillsRow from "@/components/portfolio/SkillsRow";
import Closing from "@/components/portfolio/Closing";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-[1440px] px-3 py-3 md:px-6 md:py-6">
        <PortfolioHeader />
        <div className="mt-3 space-y-3">
          <IntroductionRow />
          <PathRows />
          <SkillsRow />
          <Closing />
        </div>
      </div>
    </main>
  );
}