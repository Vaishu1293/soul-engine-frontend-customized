"use client"
import React from "react";
import 'swiper/css/bundle';
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";

const QuickAccessTiles = () => {
  useFlashlightAnimation();
  return (
    <>
        <h2 className="text-2xl font-bold mb-6 mt-4">Quick Access Tiles</h2>
        <div className="dashboard-reflection-wrapper light-effect mt-4 p-6 rounded-xl bg-gradient-to-r from-[#271152] to-[#150624] text-white max-w-5xl mx-auto">
          {/* ⬇️ Section 3: Quick Access Tiles */}
          <div className="row">
            <div className="col-lg-4">
              <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-xl p-4">
                <h4 className="text-sm text-white">Last Timeline Reading</h4>
                <p className="text-base font-semibold text-white">Love Lost</p>
                <p className="text-xs text-gray-200">Mar 20, 2024</p>
                <button className="mt-2 border border-white px-3 py-1 rounded text-white text-sm">
                  View Full Reading
                </button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-4">
                <h4 className="text-sm text-white">Current Quarter</h4>
                <p className="text-base font-semibold text-white">Tree of Life</p>
                <p className="text-xs text-gray-200">Apr 01, 2024</p>
                <button className="mt-2 border border-white px-3 py-1 rounded text-white text-sm">
                  View Full Reading
                </button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl p-4">
                <h4 className="text-sm text-white">This Month’s Energy</h4>
                <p className="text-base font-semibold text-white">Celtic Cross</p>
                <p className="text-xs text-gray-200">May 15, 2024</p>
                <button className="mt-2 border border-white px-3 py-1 rounded text-white text-sm">
                  View Full Reading
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default QuickAccessTiles;
