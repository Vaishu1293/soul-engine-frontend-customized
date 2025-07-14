"use client"
import React from "react";
import 'swiper/css/bundle';
import Image from "next/image";
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";

const HeroSectionThree = () => {
  useFlashlightAnimation();
  return (
    <div className="banner-area banner-area3 pos-rel pt-120">
      <div className="container c-container-1">
        <h2 className="text-2xl font-bold mb-6">Spiritual Snapshot Today</h2>

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
                  <div className="col-lg-4">
                    {/* ⬆️ Section 1: Daily Reflection Header */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 m-4 p-4">
                      {/* Left Column - Text Info + Buttons */}
                      <div>
                        <p className="text-blue-300 text-xl">Tovay’s Vibe</p>
                        <h3 className="text-2xl font-bold">Daily Reflection</h3>
                        <p className="text-xl text-gray-300 mb-4">June 23, 2025</p>

                        <button className="fill-btn-lightblue">
                          Ask Today’s Queries
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    {/* Right Column - Cards + Button */}
                    <div className="flex flex-col md:items-end m-4 p-4">
                      <div className="flex justify-center md:justify-end gap-2 mb-4">
                        <Image src="/cards/1.jpg" alt="Card 1" width={60} height={90} className="m-2" />
                        <Image src="/cards/2.jpg" alt="Card 2" width={60} height={90} className="m-2" />
                        <Image src="/cards/3.jpg" alt="Card 3" width={60} height={90} className="m-2" />
                        <Image src="/cards/4.jpg" alt="Card 2" width={60} height={90} className="m-2" />
                        <Image src="/cards/5.jpg" alt="Card 3" width={60} height={90} className="m-2" />
                      </div>
                      <button className="border-btn">
                        View Full Spread
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row rounded-xl" style={{
                  background: 'linear-gradient(145deg, #3a2b71, #5a3bba, #41327a)',
                  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.25)',
                  borderTopLeftRadius: '0px',
                  borderTopRightRadius: '0px',
                  borderBottomLeftRadius: '25px',
                  borderBottomRightRadius: '25px',
                }}>
                  <div className="col-lg-10">
                    {/* ⬇️ Section 2: AI Summary */}
                    <div className="bg-[#1a083a] p-5 rounded-xl mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm font-semibold mb-2 text-white">AI Summary</p>
                        <input
                          type="text"
                          placeholder="What is his feeling for me today?"
                          className="w-full px-3 py-2 rounded text-black text-sm"
                        />
                      </div>
                      <div>
                        <p className="text-purple-300 text-sm mb-2">
                          He has deep feelings of affection, desires separation.
                          The Lovers (Upright) reflects this bond.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="flex justify-center align-items-center h-full m-4">
                      <button className="fill-btn-lightblue">
                        Submit
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

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

      </div>
    </div>
  );
};

export default HeroSectionThree;
