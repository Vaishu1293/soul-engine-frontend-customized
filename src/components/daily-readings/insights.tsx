"use client"
import React from "react";
import 'swiper/css/bundle';
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
import WhatCanHappenToday from "./whatCanHappenToday";

interface InsightsProps {
    title: string;
}

const Insights: React.FC<InsightsProps> = ({ title }) => {
    useFlashlightAnimation();

    return (
        <>
            <WhatCanHappenToday title="insights"/>
        </>
    );
};

export default Insights;
