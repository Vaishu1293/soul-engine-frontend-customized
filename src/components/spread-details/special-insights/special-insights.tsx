"use client"
import React from "react";
import 'swiper/css/bundle';
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
import WhatCanHappenToday from "../insights/whatCanHappenToday";
import EnergiticBreakDown from "./energitic-break-down";
import Behaviour from "./behaviour";

interface SpecialInsightsProps {
    title: string;
}

const SpecialInsights: React.FC<SpecialInsightsProps> = ({ title }) => {
    useFlashlightAnimation();

    return (
        <>
            <div className="mt-4 mb-4">
                <EnergiticBreakDown title="insights"/>
                <Behaviour title="insights"/>
            </div>
        </>
    );
};

export default SpecialInsights;
