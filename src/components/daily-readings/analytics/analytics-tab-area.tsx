"use client";
import React, { useState } from "react";
import 'swiper/css/bundle';
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
import WeeklyInsights from "./weekly-insights";

interface AnalyticsTabAreaProps {
  title: string;
}

const AnalyticsTabArea: React.FC<AnalyticsTabAreaProps> = ({ title }) => {
  useFlashlightAnimation();

  // Initial selection: Card Meaning
  const [activeTab, setActiveTab] = useState<"weekly-insights" | "graphs">("weekly-insights");

  return (
    <div className="row mt-4">
      <div className="col-lg-12">
        <div className="dashboard-partner-readings-tab light-effect-top pt-0 mb-30">
          <div className="activity-tab-nav dashboard-activity-tab-nav pt-10 mb-20">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  type="button"
                  role="tab"
                  aria-controls="weekly-insights-meaning-tab-pane"
                  aria-selected={activeTab === "weekly-insights"}
                  className={`nav-link ${activeTab === "weekly-insights" ? "active" : ""}`}
                  onClick={() => setActiveTab("weekly-insights")}
                >
                  Weekly Insights
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  type="button"
                  role="tab"
                  aria-controls="graphs-tab-pane"
                  aria-selected={activeTab === "graphs"}
                  className={`nav-link ${activeTab === "graphs" ? "active" : ""}`}
                  onClick={() => setActiveTab("graphs")}
                >
                  Graphs
                </button>
              </li>
            </ul>
          </div>

          <div className="tab-content">
            <div
              id="weekly-insights-tab-pane"
              role="tabpanel"
              className={`tab-pane fade ${activeTab === "weekly-insights" ? "show active" : ""}`}
            >
              <div className="dashboard-profile-wrap">
                <WeeklyInsights title="weekly-insights"/>
              </div>
            </div>

            <div
              id="graphs-tab-pane"
              role="tabpanel"
              className={`tab-pane fade ${activeTab === "graphs" ? "show active" : ""}`}
            >
              <div className="dashboard-profile-wrap">
  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsTabArea;
