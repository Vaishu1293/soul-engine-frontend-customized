"use client"
import React from "react";
import 'swiper/css/bundle';
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";

interface DashaProps {
    title: string;
}

const Dasha: React.FC<DashaProps> = ({ title }) => {
    useFlashlightAnimation();

    return (
        <>
            <h2 className="text-2xl font-bold mb-6 m-4">Dsha–Bukthi–Sukshma Influence</h2>
            <div className="dashboard-reflection-wrapper light-effect mt-4 p-6 rounded-xl bg-gradient-to-r from-[#271152] to-[#150624] text-white max-w-5xl mx-auto">
                <h4>🔑 Mercury–Venus–Sun–Mercury–Ketu (Till July 27 ends)</h4>
                <div className="row m-4">
                    <div className="col-lg-2 mb-2">
                        <h6>Dasha Layer</h6>
                    </div>
                    <div className="col-lg-10 mb-2">
                        <h6>Influence</h6>
                    </div>
                    <div className="col-lg-2">
                        <p><strong>Mahadasha: Mercury</strong></p>
                    </div>
                    <div className="col-lg-10">
                        <p>Relationship karma, past promises, mental loop.</p>
                    </div>
                    <div className="col-lg-2">
                        <p><strong>Antradasha: Venus</strong></p>
                    </div>
                    <div className="col-lg-10">
                        <p>You, love, desire for happiness, beauty, emotional pleasure.</p>
                    </div>
                    <div className="col-lg-2">
                        <p><strong>Pratyantra Dasha: Sun</strong></p>
                    </div>
                    <div className="col-lg-10">
                        <p>Ego conflict, duty, guilt from past karmic actions (family/marriage).</p>
                    </div>
                    <div className="col-lg-2">
                        <p><strong>Sukshmadasha: Mercury</strong></p>
                    </div>
                    <div className="col-lg-10">
                        <p>Thought loops, stalking energy, overthinking, hesitation.</p>
                    </div>
                    <div className="col-lg-2">
                        <p><strong>Pranadasha: Ketu</strong></p>
                    </div>
                    <div className="col-lg-10">
                        <p>(for today only) Karmic crossroad, ghosting, feeling like he must sacrifice or walk away.</p>
                    </div>
                </div>
                <h4 className="text-2xl font-bold mb-6 m-4">🌀 Interpretation:</h4>
                <div className="art-user-wrapper light-effect-top mb-4">
                    <div className="note">
                        <p>The Ketu pranadasha today makes him karmically detached, like he is silently watching but not engaging. His inner soul is at a turning point. This is why he might feel emotionally distant but still think about you deeply. He won’t act today, but he will fantasize, analyze, compare, and spiral.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dasha;
