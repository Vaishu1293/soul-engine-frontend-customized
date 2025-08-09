"use client";
import React, { useState } from "react";
import 'swiper/css/bundle';
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
import CoreQuestions from "./coreQuestions";
import CardMeaning from "./cardMeaning";
import Insights from "./insights";

interface SpreadTabAreaProps {
  title: string;
}

const SpreadTabArea: React.FC<SpreadTabAreaProps> = ({ title }) => {
  useFlashlightAnimation();

  // Initial selection: Card Meaning
  const [activeTab, setActiveTab] = useState<"card" | "core" | "insights">("card");

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpreadTabArea;
