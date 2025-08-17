"use client";
import React, { useState } from "react";
import 'swiper/css/bundle';
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
import CoreQuestions from "./other-tabs/coreQuestions";
import CardMeaning from "./other-tabs/cardMeaning";
import Insights from "./insights/insights";
import Transits from "./transits/transits";
import NatalChart from "./transits/natal-chart";
import Dasha from "./other-tabs/dasha";
import SpecialInsights from "./special-insights/special-insights";

interface SpreadTabAreaProps {
  title: string;
}

const SpreadTabArea: React.FC<SpreadTabAreaProps> = ({ title }) => {
  useFlashlightAnimation();

  // Initial selection: Card Meaning
  const [activeTab, setActiveTab] = useState<"card" | "core" | "insights" | "special-insights" | "transits" | "natal-chart" | "dasha">("card");

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
                  aria-controls="card-meaning-tab-pane"
                  aria-selected={activeTab === "card"}
                  className={`nav-link ${activeTab === "card" ? "active" : ""}`}
                  onClick={() => setActiveTab("card")}
                >
                  Card Meaning
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  type="button"
                  role="tab"
                  aria-controls="core-questions-tab-pane"
                  aria-selected={activeTab === "core"}
                  className={`nav-link ${activeTab === "core" ? "active" : ""}`}
                  onClick={() => setActiveTab("core")}
                >
                  Core Questions
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  type="button"
                  role="tab"
                  aria-controls="insights-tab-pane"
                  aria-selected={activeTab === "insights"}
                  className={`nav-link ${activeTab === "insights" ? "active" : ""}`}
                  onClick={() => setActiveTab("insights")}
                >
                  Insights
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  type="button"
                  role="tab"
                  aria-controls="special-insights-tab-pane"
                  aria-selected={activeTab === "special-insights"}
                  className={`nav-link ${activeTab === "special-insights" ? "active" : ""}`}
                  onClick={() => setActiveTab("special-insights")}
                >
                  Special Insights
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  type="button"
                  role="tab"
                  aria-controls="transits-tab-pane"
                  aria-selected={activeTab === "transits"}
                  className={`nav-link ${activeTab === "transits" ? "active" : ""}`}
                  onClick={() => setActiveTab("transits")}
                >
                  Transits
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  type="button"
                  role="tab"
                  aria-controls="natal-chart-tab-pane"
                  aria-selected={activeTab === "natal-chart"}
                  className={`nav-link ${activeTab === "natal-chart" ? "active" : ""}`}
                  onClick={() => setActiveTab("natal-chart")}
                >
                  Natal Chart
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  type="button"
                  role="tab"
                  aria-controls="dasha-tab-pane"
                  aria-selected={activeTab === "dasha"}
                  className={`nav-link ${activeTab === "dasha" ? "active" : ""}`}
                  onClick={() => setActiveTab("dasha")}
                >
                  Dasha-Bukti
                </button>
              </li>
            </ul>
          </div>

          <div className="tab-content">
            <div
              id="card-meaning-tab-pane"
              role="tabpanel"
              className={`tab-pane fade ${activeTab === "card" ? "show active" : ""}`}
            >
              <div className="dashboard-profile-wrap">
                <CardMeaning title="SpreadMeaning" />
              </div>
            </div>

            <div
              id="core-questions-tab-pane"
              role="tabpanel"
              className={`tab-pane fade ${activeTab === "core" ? "show active" : ""}`}
            >
              <div className="dashboard-profile-wrap">
                <CoreQuestions title="CoreQuestions" />
              </div>
            </div>
            <div
              id="insights-tab-pane"
              role="tabpanel"
              className={`tab-pane fade ${activeTab === "insights" ? "show active" : ""}`}
            >
              <div className="dashboard-profile-wrap">
                <Insights title="insights" />
              </div>
            </div>
             <div
              id="special-insights-tab-pane"
              role="tabpanel"
              className={`tab-pane fade ${activeTab === "special-insights" ? "show active" : ""}`}
            >
              <div className="dashboard-profile-wrap">
                <SpecialInsights title="special-insights" />
              </div>
            </div>
            <div
              id="transits-tab-pane"
              role="tabpanel"
              className={`tab-pane fade ${activeTab === "transits" ? "show active" : ""}`}
            >
              <div className="dashboard-profile-wrap">
                <Transits title="transits"/>
              </div>
            </div>
            <div
              id="natal-chart-tab-pane"
              role="tabpanel"
              className={`tab-pane fade ${activeTab === "natal-chart" ? "show active" : ""}`}
            >
              <div className="dashboard-profile-wrap">
                <NatalChart title="natal-chart" />
              </div>
            </div>
            <div
              id="dasha-tab-pane"
              role="tabpanel"
              className={`tab-pane fade ${activeTab === "dasha" ? "show active" : ""}`}
            >
              <div className="dashboard-profile-wrap">
                <Dasha title="dasha" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpreadTabArea;
