"use client"
import React from "react";
import 'swiper/css/bundle';
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
import DailyReflections from "./DailyReflections";
import PastDailyReadingsSection from "./PastDailyReadingsSection";

const HeroSectionDailyReadingsPage = () => {
  useFlashlightAnimation();
  
  return (
    <div className="banner-area banner-area3 pos-rel pt-120 mb-120">
      <div className="container c-container-1">
        <DailyReflections/>
        <PastDailyReadingsSection/>
      </div>
    </div>
  );
};

export default HeroSectionDailyReadingsPage;
