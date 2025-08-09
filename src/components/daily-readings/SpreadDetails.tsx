"use client"
import React from "react";
import 'swiper/css/bundle';
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
import SpreadArea from "./spreadArea";
import SpreadTabArea from "./spreadTabArea";

interface SpreadDetailsProps {
    title: string;
}

const SpreadDetails: React.FC<SpreadDetailsProps> = ({ title }) => {
    useFlashlightAnimation();

    return (
        <>
            <SpreadArea title="My Daily Reflection" />
            <SpreadTabArea title="My Daily Reflection" />
        </>
    );
};

export default SpreadDetails;
