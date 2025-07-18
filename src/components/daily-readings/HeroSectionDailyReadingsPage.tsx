"use client"
import React from "react";
import 'swiper/css/bundle';
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
import SpritualSnapShot from "./SpritualSnapShot";
import QuickAccessTiles from "./QuickAccessTiles";
import AskQueries from "./AskQueries";
import HistorySection from "./HistorySection";

const HeroSectionDailyReadingsPage = () => {
  useFlashlightAnimation();
  
  return (
    <div className="banner-area banner-area3 pos-rel pt-120 mb-120">
      <div className="container c-container-1">
        <SpritualSnapShot/>
        <QuickAccessTiles/>
        <AskQueries/>
        <HistorySection/>
      </div>
    </div>
  );
};

export default HeroSectionDailyReadingsPage;
