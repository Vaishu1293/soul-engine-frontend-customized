"use client"
import React from "react";
import 'swiper/css/bundle';
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";

interface InsightsProps {
    title: string;
}

const Insights: React.FC<InsightsProps> = ({ title }) => {
    useFlashlightAnimation();

    return (
        <>
            <h1>Insights</h1>
        </>
    );
};

export default Insights;
