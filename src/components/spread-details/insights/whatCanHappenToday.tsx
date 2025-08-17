"use client"
import React from "react";
import 'swiper/css/bundle';
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";

interface WhatCanHappenTodayProps {
    title: string;
}

const WhatCanHappenToday: React.FC<WhatCanHappenTodayProps> = ({ title }) => {
    useFlashlightAnimation();

    return (
        <>
            <h2 className="text-2xl font-bold mb-6 m-4">What can happen today?</h2>
                  <div className="dashboard-reflection-wrapper light-effect mt-4 p-6 rounded-xl bg-gradient-to-r from-[#271152] to-[#150624] text-white max-w-5xl mx-auto">
                    <div className="row m-4">
                      <div className="col-lg-2 mb-2">
                        <h6>Time</h6>
                      </div>
                      <div className="col-lg-10 mb-2">
                        <h6>Energy & Events</h6>
                      </div>
                      <div className="col-lg-2">
                        <p>Morning</p>
                      </div>
                      <div className="col-lg-10">
                        <p><strong>Five of Wands –</strong> Friction, emotional restlessness, chance of visual contact with chaos.</p>
                      </div>
                      <div className="col-lg-2">
                        <p>Midday</p>
                      </div>
                      <div className="col-lg-10">
                        <p><strong>Seven of Coins –</strong> Focus on work or reflection, pause in emotion</p>
                      </div>
                      <div className="col-lg-2">
                        <p>Afternoon</p>
                      </div>
                      <div className="col-lg-10">
                        <p><strong >Seven of Swords –</strong> Avoidance, energy dips, confusion may rise.</p>
                      </div>
                      <div className="col-lg-2">
                        <p>Evening</p>
                      </div>
                      <div className="col-lg-10">
                        <p><strong>Ten of Cups –</strong> Emotional longing, daydreaming of family or love union</p>
                      </div>
                      <div className="col-lg-2">
                        <p>Late Night</p>
                      </div>
                      <div className="col-lg-10">
                        <p><strong>King of Cups –</strong> He feels you deeply but keeps it in. Spiritual or heart-based connection strongest now</p>
                      </div>
                    </div>
                  </div>
        </>
    );
};

export default WhatCanHappenToday;
