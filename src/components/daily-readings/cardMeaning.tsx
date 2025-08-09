"use client"
import React from "react";
import 'swiper/css/bundle';
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
import SpreadRenderer from "../tarot/spreads/spreadRenderer";

interface CardMeaningProps {
    title: string;
}

const CardMeaning: React.FC<CardMeaningProps> = ({ title }) => {
    useFlashlightAnimation();

    return (
        <>
            <h1>Card Meaning</h1>
        </>
    );
};

export default CardMeaning;
