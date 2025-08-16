"use client";
import React, { useEffect, useMemo, useState } from "react";
import "swiper/css/bundle";
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
import SouthIndianChart, { Placement } from "./southIndianChart";

interface NatalChartProps {
    title: string;
}

const NatalChart: React.FC<NatalChartProps> = ({ title }) => {
    useFlashlightAnimation();

    const [ascSign, setAscSign] = useState<number>(4); // Leo
    const [placements, setPlacements] = useState<Placement[]>([
        { planet: "Asc", sign: 4 },
        { planet: "Sun", sign: 4 },
        { planet: "Moon", sign: 8 },
        { planet: "Mars", sign: 6 },
        { planet: "Mercury", sign: 4, retro: true },
        { planet: "Jupiter", sign: 9 },
        { planet: "Venus", sign: 5 },
        { planet: "Saturn", sign: 10, retro: true },
        { planet: "Rahu", sign: 1 },
        { planet: "Ketu", sign: 7 },
    ]);

    //   // Fake “real-time” updates (UI-only)
    //   useEffect(() => {
    //     const id = setInterval(() => {
    //       setPlacements((prev) =>
    //         prev.map((p) => ({
    //           ...p,
    //           // randomly move a couple of planets to adjacent signs for demo
    //           sign: Math.random() < 0.2 ? ((p.sign + 1) % 12) : p.sign,
    //         }))
    //       );
    //     }, 4000);
    //     return () => clearInterval(id);
    //   }, []);

    // Instead, if you still want a little randomization *only on refresh*:
    useEffect(() => {
        setPlacements((prev) =>
            prev.map((p) => ({
                ...p,
                // optional: move planets randomly *once*
                sign: Math.random() < 0.2 ? ((p.sign + 1) % 12) : p.sign,
            }))
        );
    }, []); // <-- runs only once on mount

    // Freeze the timestamp at render time (like your screenshot header)
    const timestamp = useMemo(() => new Date().toLocaleString(), []);

    // Local options for the chart
    const showHouses = true;
    const compact = false;

    return (
        <>
            <div className="rounded-xl overflow-hidden border border-white/10 mx-auto max-w-[880px]">
                {/* Blue header like your app */}
                <div className="bg-[#172155] text-white/90 text-center text-sm md:text-base font-semibold py-2">
                    {title} on {timestamp}
                </div>

                {/* Body */}
                <div className="p-3 md:p-4 bg-[#0c1233]">
                    <SouthIndianChart
                        ascSign={ascSign}
                        placements={placements}
                        showHouses={showHouses}
                        compact={compact}
                        className="mx-auto"
                    />
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 m-4">
                Natal Chart Influence on Today’s Transits
            </h2>

            <div className="art-user-wrapper light-effect-top mb-4">
                <div className="note">
                    <p><strong>You have:</strong></p>
                </div>

                <ul className="mb-20">
                    <li>
                        <strong>Mercury (Retro + Combust) in 9th (Aquarius) =</strong> Your <strong>soul truth and voice</strong> is
                        mystical but misunderstood. Mercury transiting Cancer (your 2nd house) makes today a chance to{" "}
                        <strong>correct karmic words or silence.</strong>
                    </li>
                    <li>
                        <strong>Venus (Exalted, Retro in 10th) =</strong> Venus in transit in 1st makes <strong>you extremely
                            attractive and divinely feminine</strong> today. You’re carrying a <strong>magnetic glow of healing and
                                longing</strong> — especially in front of <strong>Chandrashekar.</strong>
                    </li>
                </ul>

                <div className="note">
                    <p>
                        🧠 Your birth Mercury is combust in Aquarius (karmic truth) and today’s Mercury is retro in Cancer
                        (emotional truth) = this is a <strong>destined moment to speak or reconnect</strong>, but you must do it{" "}
                        <strong>spiritually, not impulsively.</strong>
                    </p>
                </div>
            </div>
        </>
    );
};

export default NatalChart;
