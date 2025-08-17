"use client";
import React from "react";
import "swiper/css/bundle";
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
import CombinedQuestions from "./combined-questions";
import FinalOutcome from "./final-outcome";

interface CombinedReadingProps {
  title: string;
}

const CombinedReadings: React.FC<CombinedReadingProps> = ({ title }) => {
  useFlashlightAnimation();

  return (
    <>
      <CombinedQuestions title="combined-questions"/>
      <FinalOutcome title="final-outcome"/>
    </>
  );
};

export default CombinedReadings;
