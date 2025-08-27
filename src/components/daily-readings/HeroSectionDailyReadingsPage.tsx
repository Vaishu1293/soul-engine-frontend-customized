"use client";
import React, { useState, useMemo } from "react";
import "swiper/css/bundle";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
import DailyReflections from "./main-page/DailyReflections";
import PastDailyReadingsSection from "./main-page/PastDailyReadingsSection";
import SpreadDetails from "../spread-details/SpreadDetails";
import CombinedReadings from "./combined-readings/CombinedReadings";
import WeeklyInsights from "./analytics/weekly-insights";
import OverallInsights from "./analytics/overall-insights";
import GraphsVisuals from "./analytics/graph";

const TYPE_TITLE_MAP: Record<string, string> = {
  "daily-readings": "Daily Reflection Readings",
  "daily-reflections": "Daily Reflection Readings", // alias
  "timeline-readings": "Timeline Readings",
  revelation: "Revelation Readings",
  "celtic-cross": "Celtic Cross",
};

function pickType(searchParams: URLSearchParams, pathname: string | null): string {
  // 1) Prefer query param: ?type=...
  const fromQuery = searchParams.get("type");
  if (fromQuery && TYPE_TITLE_MAP[fromQuery]) return fromQuery;

  // 2) Fallback to last path segment if it matches our map
  const parts = (pathname || "").split("/").filter(Boolean);
  const last = parts.pop() || "";
  if (TYPE_TITLE_MAP[last]) return last;

  // 3) Default
  return "daily-readings";
}

const HeroSectionDailyReadingsPage = () => {
  useFlashlightAnimation();

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const type = useMemo(() => pickType(searchParams, pathname), [searchParams, pathname]);
  console.log(searchParams, type);
  const displayTitle = TYPE_TITLE_MAP[type];

  const [spreadDetails, setSpreadDetails] = useState(false);
  const [activeTab, setActiveTab] = useState("my-readings-tab-pane");

  const partnerTitle = `Partner ${displayTitle}`;
  const combinedTitle = `Combined ${displayTitle}`;

  return (
    <>
      <div className="dashboard-profile-wrap">
        <div className="banner-area banner-area3 pos-rel pt-120 mb-120">
          <div className="container c-container-1">
            <div className="dashboard-breadcrumb">
              <div className="page-title mb-30">
                <h2 className="breadcrumb-title mb-10">{displayTitle}</h2>

                <div className="breadcrumb-menu">
                  <nav className="breadcrumb-trail breadcrumbs">
                    <ul className="trail-items">
                      <li className="trail-item trail-begin">
                        <Link href="/dashboard">Dashboard</Link>
                      </li>

                      {spreadDetails ? (
                        <li className="trail-item trail-end">
                          <button
                            className="text-blue-400 underline"
                            onClick={() => setSpreadDetails(false)}
                          >
                            Back
                          </button>
                        </li>
                      ) : (
                        <li className="trail-item trail-end">
                          <span>{displayTitle}</span>
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
                  <SpreadDetails title={displayTitle} />
                ) : (
                  <div className="dashboard-partner-readings-tab light-effect-top pt-0 mb-30">
                    <div className="activity-tab-nav dashboard-activity-tab-nav pt-10 mb-20">
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
                          <button
                            className={`nav-link ${activeTab === "combined-readings-tab-pane" ? "active" : ""}`}
                            id="combined-readings-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#combined-readings-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="combined-readings-tab-pane"
                            aria-selected={activeTab === "combined-readings-tab-pane"}
                            onClick={() => setActiveTab("combined-readings-tab-pane")}
                          >
                            Combined Readings
                          </button>
                        </li>

                        <li className="nav-item" role="presentation">
                          <button
                            className={`nav-link ${activeTab === "weekly-insights-tab-pane" ? "active" : ""}`}
                            id="weekly-insights-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#weekly-insights-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="weekly-insights-tab-pane"
                            aria-selected={activeTab === "weekly-insights-tab-pane"}
                            onClick={() => setActiveTab("weekly-insights-tab-pane")}
                          >
                            Weekly Insights
                          </button>
                        </li>

                        <li className="nav-item" role="presentation">
                          <button
                            className={`nav-link ${activeTab === "overall-insights-tab-pane" ? "active" : ""}`}
                            id="overall-insights-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#overall-insights-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="overall-insights-tab-pane"
                            aria-selected={activeTab === "overall-insights-tab-pane"}
                            onClick={() => setActiveTab("overall-insights-tab-pane")}
                          >
                            Overall Insights
                          </button>
                        </li>

                        <li className="nav-item" role="presentation">
                          <button
                            className={`nav-link ${activeTab === "graphs-visuals-tab-pane" ? "active" : ""}`}
                            id="graphs-visuals-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#graphs-visuals-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="graphs-visuals-tab-pane"
                            aria-selected={activeTab === "graphs-visuals-tab-pane"}
                            onClick={() => setActiveTab("graphs-visuals-tab-pane")}
                          >
                            Graphs & Visuals
                          </button>
                        </li>
                      </ul>
                    </div>

                    <div className="tab-content" id="myTabContent">
                      {/* My Readings */}
                      <div
                        className={`tab-pane fade ${activeTab === "my-readings-tab-pane" ? "show active" : ""} m-4`}
                        id="my-readings-tab-pane"
                        role="tabpanel"
                        aria-labelledby="my-readings-tab"
                      >
                        <DailyReflections
                          title={displayTitle}
                          onViewFullSpread={() => setSpreadDetails(true)}
                        />
                        <PastDailyReadingsSection onViewFullReading={() => setSpreadDetails(true)} />
                      </div>

                      {/* Partner Readings */}
                      <div
                        className={`tab-pane fade ${activeTab === "partner-readings-tab-pane" ? "show active" : ""} m-4`}
                        id="partner-readings-tab-pane"
                        role="tabpanel"
                        aria-labelledby="partner-readings-tab"
                      >
                        <div className="dashboard-profile-wrap">
                          <DailyReflections
                            title={partnerTitle}
                            onViewFullSpread={() => setSpreadDetails(true)}
                          />
                          <PastDailyReadingsSection onViewFullReading={() => setSpreadDetails(true)} />
                        </div>
                      </div>

                      {/* Combined Readings */}
                      <div
                        className={`tab-pane fade ${activeTab === "combined-readings-tab-pane" ? "show active" : ""}`}
                        id="combined-readings-tab-pane"
                        role="tabpanel"
                        aria-labelledby="combined-readings-tab"
                        tabIndex={0}
                      >
                        <div className="dashboard-profile-wrap">
                          <CombinedReadings title={combinedTitle} />
                        </div>
                      </div>

                      {/* Weekly Insights */}
                      <div
                        className={`tab-pane fade ${activeTab === "weekly-insights-tab-pane" ? "show active" : ""}`}
                        id="weekly-insights-tab-pane"
                        role="tabpanel"
                        aria-labelledby="weekly-insights-tab"
                        tabIndex={0}
                      >
                        <div className="dashboard-profile-wrap">
                          <WeeklyInsights title="weekly-insights" />
                        </div>
                      </div>

                      {/* Overall Insights */}
                      <div
                        className={`tab-pane fade ${activeTab === "overall-insights-tab-pane" ? "show active" : ""}`}
                        id="overall-insights-tab-pane"
                        role="tabpanel"
                        aria-labelledby="overall-insights-tab"
                        tabIndex={0}
                      >
                        <div className="dashboard-profile-wrap">
                          <OverallInsights title="overall-insights" />
                        </div>
                      </div>

                      {/* Graphs & Visuals */}
                      <div
                        className={`tab-pane fade ${activeTab === "graphs-visuals-tab-pane" ? "show active" : ""}`}
                        id="graphs-visuals-tab-pane"
                        role="tabpanel"
                        aria-labelledby="graphs-visuals-tab"
                        tabIndex={0}
                      >
                        <div className="dashboard-profile-wrap">
                          <GraphsVisuals
                            title="graphs-visuals"
                            positiveBondDays={5}
                            negativeWeakDays={2}
                            tensionDays={4}
                            homeChangeHints={3}
                            intimacyYouC={7}
                            intimacyRC={0}
                            physicallyTogether={6}
                            emotionallyDetached={7}
                            totalDays={7}
                          />
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
