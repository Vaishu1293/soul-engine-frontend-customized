"use client"
import React from "react";
import 'swiper/css/bundle';
import Image from "next/image";
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
import SpreadRenderer from "../tarot/spreads/spreadRenderer";

interface SpreadDetailsProps {
    title: string;
}

const SpreadDetails: React.FC<SpreadDetailsProps> = ({ title }) => {
    useFlashlightAnimation();

    const dailySpread = {
        "Daily Lesson": { card: 1, reversed: false },
        "Challenges": { card: 12, reversed: true },
        "Situation": { card: 7, reversed: false },
        "Advice": { card: 19, reversed: false },
        "Near Future": { card: 4, reversed: true },
    };

    const cardInfo = [
        { id: 1, name: "The Magician" },
        { id: 4, name: "The Emperor" },
        { id: 7, name: "The Chariot" },
        { id: 12, name: "The Hanged Man" },
        { id: 19, name: "The Sun" },
    ];

    return (
        <>
            <div className="dashboard-reflection-wrapper light-effect mt-4 p-6 rounded-xl bg-gradient-to-r from-[#271152] to-[#150624] text-white max-w-5xl mx-auto">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="rounded-xl p-6 md:p-8 text-white" style={{
                            borderTopLeftRadius: '25px',
                            borderTopRightRadius: '25px',
                            borderBottomLeftRadius: '25px',
                            borderBottomRightRadius: '25px',
                        }}>
                            <div className="row rounded-xl" style={{
                                background: 'linear-gradient(135deg, #3a1c71 0%, #5b3abf 50%, #302b63 100%)',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                                borderTopLeftRadius: '25px',
                                borderTopRightRadius: '25px',
                                borderBottomLeftRadius: '0px',
                                borderBottomRightRadius: '0px',
                            }}>
                                <div className="col-lg-3">
                                    {/* ⬆️ Section 1: Daily Reflection Header */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 m-4 p-4">
                                        {/* Left Column - Text Info + Buttons */}
                                        <div>
                                            <p className="text-blue-300 text-xl">Tovay’s Vibe</p>
                                            <h3 className="text-2xl font-bold">My Daily Reflection</h3>
                                            <p className="text-xl text-gray-300 mb-4">June 23, 2025</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    {/* Right Column - Cards + Button */}
                                    <div className="flex flex-col md:items-end m-4 p-4">
                                        <div className="w-full md:w-auto">
                                            <SpreadRenderer
                                                spread={dailySpread}
                                                cardInfo={cardInfo}
                                                spreadType="dailyReflection"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SpreadDetails;
