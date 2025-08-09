"use client"
import React from "react";
import 'swiper/css/bundle';
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
import SpreadRenderer from "../tarot/spreads/spreadRenderer";

interface CoreQuestionsProps {
    title: string;
}

const CoreQuestions: React.FC<CoreQuestionsProps> = ({ title }) => {
    useFlashlightAnimation();

    return (
        <>
            <h1>Core Questions</h1>
        </>
    );
};

export default CoreQuestions;
