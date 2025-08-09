"use client"
import React from "react";
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

    return (
        <>
            <div className="row mt-4">
              <div className="col-lg-12">
                <div className="dashboard-partner-readings-tab light-effect-top pt-0 mb-30">
                    <div className='activity-tab-nav dashboard-activity-tab-nav pt-10 mb-20'>
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="card-meaning-tab" data-bs-toggle="tab" data-bs-target="#card-meaning-tab-pane" type="button" role="tab" aria-controls="card-meaning-tab-pane" aria-selected="false">Card Meaning</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="core-questions-tab" data-bs-toggle="tab" data-bs-target="#core-questions-tab-pane" type="button" role="tab" aria-controls="core-questions-tab-pane" aria-selected="false">Core Questions</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="insights-tab" data-bs-toggle="tab" data-bs-target="#insights-tab-pane" type="button" role="tab" aria-controls="insights-tab-pane" aria-selected="false">Insights</button>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content" id="myTabContent">
                      <div className="tab-pane fade show active" id="card-meaning-tab-pane" role="tabpanel" aria-labelledby="card-meaning-tab" tabIndex={0}>
                        <div className="dashboard-profile-wrap">
                          <CardMeaning title="SpreadMeaning"/>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="core-questions-tab-pane" role="tabpanel" aria-labelledby="core-questions-tab" tabIndex={0}>
                        <div className="dashboard-profile-wrap">
                          <CoreQuestions title="CoreQuestions"/>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="insights-tab-pane" role="tabpanel" aria-labelledby="insights-tab" tabIndex={0}>
                        <div className="dashboard-profile-wrap">
                          <Insights title="insights"/>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div> 
        </>
    );
};

export default SpreadTabArea;










