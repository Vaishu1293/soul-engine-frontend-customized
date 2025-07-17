"use client"
import React from "react";
import 'swiper/css/bundle';
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
import Link from "next/link";

const AskQueries = () => {
  useFlashlightAnimation();
  return (
    <>
        <div className="row">
          <div className="col-lg-6">
            <h2 className="text-2xl font-bold mb-6 mt-4">Ask Queries</h2>
            <div className="dashboard-reflection-wrapper light-effect mt-4 p-6 text-white max-w-5xl mx-auto bg-gradient-to-br from-[#ff9966] via-[#ff5e62] to-[#b967ff] shadow-lg rounded-b-2xl rounded-t-md">
              <div className="oc-banner-client-wrapper stuff5">
                <div className="oc-banner-client m-4" data-depth=".3">
                  <div className="q-meta-item">
                    <div className="q-meta-viewed-members">
                      {/* <Link href="/creator-profile"><Image src={profileOne} alt="profile-img" /></Link> */}
                    </div>
                    <div className="q-meta-viewed-members-count">
                      <h5 className="text-2xl font-bold">Core Questions</h5>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-15">
                    <div className="row">
                      <div className="col-lg-12">
                        <h6 className="q-meta-views m-2">What is his feelings for today?</h6>
                      </div>
                      <div className="col-lg-12">
                        <p className="mb-0 m-2">He has deep feelings of affection. despite seperation. The (Lovers) reflect this bond.</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="q-meta-views">Question 1/5</span>
                    <Link href="#" className="place-bid">View All</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h2 className="text-2xl font-bold mb-6 mt-4">Profile</h2>
            <div className="dashboard-reflection-wrapper light-effect mt-4 p-6 rounded-xl bg-gradient-to-r from-[#271152] to-[#150624] text-white max-w-5xl mx-auto">
              <div className="oc-banner-client-wrapper stuff5">
                <div className="oc-banner-client m-4" data-depth=".3">
                  <div className="q-meta-item">
                    <div className="q-meta-viewed-members">
                      {/* <Link href="/creator-profile"><Image src={profileOne} alt="profile-img" /></Link> */}
                    </div>
                    <div className="q-meta-viewed-members-count">
                      <h5 className="text-2xl font-bold">Vaishali, Female</h5>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-15">
                    <div className="row">
                      <div className="col-lg-12">
                        <h6 className="q-meta-views m-2">Area of Interest: <small>Love</small></h6>
                      </div>
                      <div className="col-lg-12">
                        <h6 className="q-meta-views m-2">Current Situation: </h6>
                        <p className="mb-0 m-2">I love Chandrashekar but he got caught by his wife and he left me. Will he return</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="q-meta-views">Progress Timeline 3/5</span>
                    <Link href="#" className="place-bid">View All</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default AskQueries;
