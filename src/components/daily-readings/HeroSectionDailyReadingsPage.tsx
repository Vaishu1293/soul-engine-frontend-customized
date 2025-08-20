"use client"
import React, { useState } from "react";
import 'swiper/css/bundle';
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
import DailyReflections from "./main-page/DailyReflections";
import PastDailyReadingsSection from "./main-page/PastDailyReadingsSection";
import Link from "next/link";
import SpreadDetails from "../spread-details/SpreadDetails";
import CombinedReadings from "./combined-readings/CombinedReadings";
import Analytics from "./analytics/Analytics";

const HeroSectionDailyReadingsPage = () => {
  useFlashlightAnimation();

  const [spreadDetails, setSpreadDetails] = useState(false);
  const [activeTab, setActiveTab] = useState("my-readings-tab-pane"); // default


  return (
    <>
      <div className="dashboard-profile-wrap">
        <div className="banner-area banner-area3 pos-rel pt-120 mb-120">
          <div className="container c-container-1">
            <div className='dashboard-breadcrumb'>
              <div className="page-title mb-30">
                <h2 className="breadcrumb-title mb-10">Daily Reflection Readings</h2>
                <div className="breadcrumb-menu">
                  <nav className="breadcrumb-trail breadcrumbs">
                    <ul className="trail-items">
                      <li className="trail-item trail-begin">
                        <Link href="/dashboard">Dashboard</Link>
                      </li>

                      {spreadDetails ? (
                        <>
                          <li className="trail-item trail-end">
                            <button
                              className="text-blue-400 underline"
                              onClick={() => setSpreadDetails(false)}
                            >
                              Back
                            </button>
                          </li>
                        </>
                      ) : (
                        <li className="trail-item trail-end">
                          <span>Daily Reflection Readings</span>
                        </li>
                      )}
                    </ul>
                  </nav>
                </div>

              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                {spreadDetails ? (
                  /* ---------------- Show Spread Details ---------------- */
                  <SpreadDetails title="My Daily Reflections" />
                ) : (
                  <div className="dashboard-partner-readings-tab light-effect-top pt-0 mb-30">
                    <div className='activity-tab-nav dashboard-activity-tab-nav pt-10 mb-20'>
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button
                            className={`nav-link ${activeTab === "my-readings-tab-pane" ? "active" : ""}`}
                            id="my-readings-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#my-readings-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="my-readings-tab-pane"
                            aria-selected={activeTab === "my-readings-tab-pane"}
                            onClick={() => setActiveTab("my-readings-tab-pane")}
                          >
                            My Readings
                          </button>



                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className={`nav-link ${activeTab === "partner-readings-tab-pane" ? "active" : ""}`}
                            id="partner-readings-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#partner-readings-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="partner-readings-tab-pane"
                            aria-selected={activeTab === "partner-readings-tab-pane"}
                            onClick={() => setActiveTab("partner-readings-tab-pane")}
                          >
                            Partner Readings
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="combined-readings-tab" data-bs-toggle="tab" data-bs-target="#combined-readings-tab-pane" type="button" role="tab" aria-controls="combined-readings-tab-pane" aria-selected="false">Combined Readings</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="analytics-tab" data-bs-toggle="tab" data-bs-target="#analytics-tab-pane" type="button" role="tab" aria-controls="analytics-tab-pane" aria-selected="false">Analytics</button>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content" id="myTabContent">
                      <div
                        className={`tab-pane fade ${activeTab === "my-readings-tab-pane" ? "show active" : ""} m-4`}
                        id="my-readings-tab-pane"
                      >
                        <DailyReflections title="My Daily Reflections" onViewFullSpread={() => setSpreadDetails(true)} />
                        <PastDailyReadingsSection onViewFullReading={() => setSpreadDetails(true)} />
                      </div>
                      <div
                        className={`tab-pane fade ${activeTab === "partner-readings-tab-pane" ? "show active" : ""} m-4`}
                        id="partner-readings-tab-pane"
                      >
                        <div className="dashboard-profile-wrap">
                          <DailyReflections title="Partner Daily Readings" onViewFullSpread={() => setSpreadDetails(true)} />
                          <PastDailyReadingsSection onViewFullReading={() => setSpreadDetails(true)} />
                        </div>
                      </div>
                      <div className="tab-pane fade" id="combined-readings-tab-pane" role="tabpanel" aria-labelledby="combined-readings-tab" tabIndex={0}>
                        <div className="dashboard-profile-wrap">
                          <CombinedReadings title="combined-readings"/>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="analytics-tab-pane" role="tabpanel" aria-labelledby="analytics-tab" tabIndex={0}>
                        <div className="dashboard-profile-wrap">
                          <Analytics title="analytics"/>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default HeroSectionDailyReadingsPage;


