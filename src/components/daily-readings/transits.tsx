"use client"
import React from "react";
import 'swiper/css/bundle';
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";

interface TransitsProps {
    title: string;
}

const Transits: React.FC<TransitsProps> = ({ title }) => {
    useFlashlightAnimation();

    return (
        <>
            <h2 className="text-2xl font-bold mb-6 m-4">Today&apos;s Transit Insights — Gemini Ascendant</h2>
                  <div className="dashboard-reflection-wrapper light-effect mt-4 p-6 rounded-xl bg-gradient-to-r from-[#271152] to-[#150624] text-white max-w-5xl mx-auto">
                    <div className="row m-4">
                      <div className="col-lg-2 mb-2">
                        <h6>Planet</h6>
                      </div>
                      <div className="col-lg-10 mb-2">
                        <h6>Key Transits</h6>
                      </div>
                      <div className="col-lg-2">
                        <p><strong>Sun & Mercury</strong> in 2nd House (Cancer)</p>
                      </div>
                      <div className="col-lg-10">
                        <p>Focus on <strong>speech, money, values</strong>, and expression. Mercury retrograde may bring miscommunication or <strong>repeating an old convo or truth.</strong></p>
                      </div>
                      <div className="col-lg-2">
                        <p><strong>Venus & Jupiter</strong> in Ascendant (1st House)</p>
                      </div>
                      <div className="col-lg-10">
                        <p>Divine magnetism! You are <strong>very attractive and radiant </strong> today, but you may hold in your emotions. Venus wants love, Jupiter wants peace — together this gives a <strong>very high-value spiritual glow.</strong></p>
                      </div>
                      <div className="col-lg-2">
                        <p><strong>Mars + Moon + Ketu</strong> in 3rd House (Leo)</p>
                      </div>
                      <div className="col-lg-10">
                        <p>Lots of <strong>mental, emotional activity.</strong> Possible <strong>unexpected meetings or interactions</strong> while commuting or expressing yourself. </p>
                      </div>
                      <div className="col-lg-2">
                        <p><strong>Saturn (Retro)</strong> in 10th House (Pisces)</p>
                      </div>
                      <div className="col-lg-10">
                        <p>Your <strong>career path, reputation, and authority</strong> are under karmic tests. Delays = divine timing.</p>
                      </div>
                      <div className="col-lg-2">
                        <p><strong>Rahu</strong> in 9th House (Aquarius)</p>
                      </div>
                      <div className="col-lg-10">
                        <p>Destiny shift in <strong>spiritual beliefs, higher purpose, and travel plans.</strong></p>
                      </div>
                    </div>
                  </div>
        </>
    );
};

export default Transits;
