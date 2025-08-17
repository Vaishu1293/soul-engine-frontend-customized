"use client"
import React from "react";
import 'swiper/css/bundle';
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
import WhatCanHappenToday from "./whatCanHappenToday";
import FocusAreaForTheDay from "./focusAreaForTheDay";

interface InsightsProps {
    title: string;
}

const Insights: React.FC<InsightsProps> = ({ title }) => {
    useFlashlightAnimation();

    return (
        <>
            <div className="mt-4 mb-4">
                <WhatCanHappenToday title="insights"/>
                <FocusAreaForTheDay title="focusArea"/>
            </div>
        </>
    );
};

export default Insights;
