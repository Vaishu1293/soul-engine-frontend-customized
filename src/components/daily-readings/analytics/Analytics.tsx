"use client"
import React from "react";
import 'swiper/css/bundle';
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
import AnalyticsTabArea from "./analytics-tab-area";
interface AnalyticsProps {
    title: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ title }) => {
    useFlashlightAnimation();

    return (
        <>
            <AnalyticsTabArea title="My Daily Reflection" />
        </>
    );
};

export default Analytics;
