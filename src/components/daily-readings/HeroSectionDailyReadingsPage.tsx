"use client"
import React from "react";
import 'swiper/css/bundle';
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
import DailyReflections from "./DailyReflections";
import PastDailyReadingsSection from "./PastDailyReadingsSection";
import Link from "next/link";

const HeroSectionDailyReadingsPage = () => {
  useFlashlightAnimation();

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
                      <li className="trail-item trail-begin"><Link href="/dashboard">Dashboard</Link></li>
                      <li className="trail-item trail-end"><span>Daily Reflection Readings</span></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="dashboard-partner-readings-tab light-effect-top pt-0 mb-30">
                  <div className='activity-tab-nav dashboard-activity-tab-nav pt-10 mb-20'>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="my-readings-tab" data-bs-toggle="tab" data-bs-target="#my-readings-tab-pane" type="button" role="tab" aria-controls="my-readings-tab-pane" aria-selected="true">My Readings</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="partner-readings-tab" data-bs-toggle="tab" data-bs-target="#partner-readings-tab-pane" type="button" role="tab" aria-controls="partner-readings-tab-pane" aria-selected="false">Partner Readings</button>
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
                    <div className="tab-pane fade show active" id="my-readings-tab-pane" role="tabpanel" aria-labelledby="my-readings-tab" tabIndex={0}>
                      <DailyReflections />
                      <PastDailyReadingsSection />
                    </div>
                    <div className="tab-pane fade" id="partner-readings-tab-pane" role="tabpanel" aria-labelledby="partner-readings-tab" tabIndex={0}>
                      <div className="dashboard-profile-wrap">
                        {/* add partner readings tab page */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default HeroSectionDailyReadingsPage;


