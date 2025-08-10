"use client"
import React from "react";
import 'swiper/css/bundle';
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";

interface NatalChartProps {
    title: string;
}

const NatalChart: React.FC<NatalChartProps> = ({ title }) => {
    useFlashlightAnimation();

    return (
        <>
             <h2 className="text-2xl font-bold mb-6 m-4">Natal Chart Influence on Today’s Transits</h2>
            <div className="art-user-wrapper light-effect-top mb-4">
                <div className="note">
                    <p><strong>You have:</strong></p>
                </div>
                <ul className="mb-20">
                    <li><strong>Mercury (Retro + Combust) in 9th (Aquarius) =</strong> Your <strong>soul truth and voice</strong> is mystical but misunderstood. Mercury transiting Cancer (your 2nd house) makes today a chance to <strong>correct karmic words or silence.</strong></li>
                    <li><strong>Venus (Exalted, Retro in 10th) =</strong> Venus in transit in 1st makes <strong>you extremely attractive and divinely feminine</strong> today. You’re carrying a <strong>magnetic glow of healing and longing</strong> — especially in front of <strong>Chandrashekar.</strong></li>
                </ul>
                <div className="note">
                    <p>🧠 Your birth Mercury is combust in Aquarius (karmic truth) and today’s Mercury is retro in Cancer (emotional truth) = this is a <strong>destined moment to speak or reconnect</strong>, but you must do it <strong>spiritually, not impulsively.</strong>
                    </p>
                </div>
            </div>
        </>
    );
};

export default NatalChart;
