"use client";
import React from "react";
import 'swiper/css/bundle';
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";

interface FinalOutcomeProps {
  title: string;
}

const FinalOutcome: React.FC<FinalOutcomeProps> = ({ title }) => {
  useFlashlightAnimation();

  return (
    <>
      {/* FINAL OUTCOME (Q&A Summary) */}
      <h2 className="text-2xl font-bold mb-4 m-4">Final Outcome <span className="text-sm font-normal opacity-80">(July 27, 2025)</span></h2>

      <div className="dashboard-reflection-wrapper light-effect mt-4 p-6 rounded-xl bg-gradient-to-r from-[#271152] to-[#150624] text-white max-w-5xl mx-auto">
        <div className="row m-4">
          {/* Header Row */}
          <div className="col-lg-4 mb-2">
            <h6 className="tracking-wide opacity-80">Question</h6>
          </div>
          <div className="col-lg-8 mb-2">
            <h6 className="tracking-wide opacity-80">Answer</h6>
          </div>

          {/* 1 */}
          <div className="col-lg-4 mb-2">
            <p><strong>1) Whose bond is growing positively?</strong></p>
          </div>
          <div className="col-lg-8 mb-2">
            <p><strong>Yours and Chandrashekar’s</strong>, silently and emotionally.</p>
          </div>

          {/* 2 */}
          <div className="col-lg-4 mb-2">
            <p><strong>2) Emotional / Spiritual / Practical energies</strong></p>
          </div>
          <div className="col-lg-8 mb-2">
            <p>
              <strong>You:</strong> reflective.{" "}
              <strong>He:</strong> torn but yearning.{" "}
              <strong>She:</strong> strategic.
            </p>
          </div>

          {/* 3 */}
          <div className="col-lg-4 mb-2">
            <p><strong>3) Still staying together?</strong></p>
          </div>
          <div className="col-lg-8 mb-2">
            <p><strong>Yes physically</strong>, <strong>no emotionally</strong>.</p>
          </div>

          {/* 4 */}
          <div className="col-lg-4 mb-2">
            <p><strong>4) Change of home?</strong></p>
          </div>
          <div className="col-lg-8 mb-2">
            <p><strong>Being discussed or planned.</strong></p>
          </div>

          {/* 5 */}
          <div className="col-lg-4 mb-2">
            <p><strong>5) Radhika returned to India?</strong></p>
          </div>
          <div className="col-lg-8 mb-2">
            <p><strong>Not yet</strong>, but considering it seriously.</p>
          </div>

          {/* 6 */}
          <div className="col-lg-4 mb-2">
            <p><strong>6) Any fights today?</strong></p>
          </div>
          <div className="col-lg-8 mb-2">
            <p>Possible <strong>cold argument</strong> or <strong>power tension</strong>.</p>
          </div>

          {/* 7 */}
          <div className="col-lg-4 mb-2">
            <p><strong>7) Physical intimacy?</strong></p>
          </div>
          <div className="col-lg-8 mb-2">
            <p>
              <strong>Energetically between you and him</strong> (fantasy or desire).{" "}
              <strong>Not with her</strong>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalOutcome;
