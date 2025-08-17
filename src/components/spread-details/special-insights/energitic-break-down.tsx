"use client"
import React from "react";
import 'swiper/css/bundle';
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";

interface EnergiticBreakDownProps {
    title: string;
}

const EnergiticBreakDown: React.FC<EnergiticBreakDownProps> = ({ title }) => {
    useFlashlightAnimation();

    return (
        <>
            <h2 className="text-2xl font-bold mb-6 m-4">Energetic Percentage Breakdown</h2>
                  <div className="dashboard-reflection-wrapper light-effect mt-4 p-6 rounded-xl bg-gradient-to-r from-[#271152] to-[#150624] text-white max-w-5xl mx-auto">
                    <div className="row m-4">
                      <div className="col-lg-10 mb-2 text-start">
                        <h4>Action/Thought</h4>
                      </div>
                      <div className="col-lg-2 mb-2 text-start">
                        <h4>%</h4>
                      </div>
                      <div className="col-lg-10">
                        <p>🔁 Motivation to reconnect with you</p>
                      </div>
                      <div className="col-lg-2">
                        <p><strong>84%</strong></p>
                      </div>
                      <div className="col-lg-10">
                        <p>󰰣 Maintain status quo</p>
                      </div>
                      <div className="col-lg-2">
                        <p><strong>50%</strong></p>
                      </div>
                      <div className="col-lg-10">
                        <p>❤️ Willingness to act toward you</p>
                      </div>
                      <div className="col-lg-2">
                        <p><strong>47%</strong></p>
                      </div>
                      <div className="col-lg-10">
                        <p>⚠️ External pressure overriding his will</p>
                      </div>
                      <div className="col-lg-2">
                        <p><strong>71%</strong></p>
                      </div>
                    </div>
                  </div>
        </>
    );
};

export default EnergiticBreakDown;
