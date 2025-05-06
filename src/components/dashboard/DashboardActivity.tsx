
"use client"
import React, { useState } from 'react';
import { dashboardActivityData } from '@/data/activity-data';
import Image from 'next/image';
import Link from 'next/link';

const DashboardActivity = () => {
  const [activeTab, setActiveTab] = useState(1); 

  const handleTabClick = (tabId:any) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="activity-area">
        <div className="activity-wrapper">
          <div className="activity-tab">
            <div className="activity-tab-nav dashboard-activity-tab-nav wow fadeInUp">
              <nav className="mb-25">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className={`nav-link ${activeTab === 1 ? 'active' : ''}`}
                    id="nav-all-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-nav1"
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 1}
                    onClick={() => handleTabClick(1)}
                  >
                    <span className="activity-nav-button">All Activities</span>
                  </button>
                  <button
                    className={`nav-link ${activeTab === 2 ? 'active' : ''}`}
                    id="nav-bid-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-nav2"
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 2}
                    onClick={() => handleTabClick(2)}
                  >
                    <span className="activity-nav-button">Bids</span>
                  </button>
                  <button
                    className={`nav-link ${activeTab === 3 ? 'active' : ''}`}
                    id="nav-collection-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-nav3"
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 3}
                    onClick={() => handleTabClick(3)}
                  >
                    <span className="activity-nav-button">Collection</span>
                  </button>
                </div>
              </nav>
            </div>
            <div className="activity-tab-contents scroll-container activity-scrollbar wow fadeInUp mb-10">
              <div className="tab-content" id="nav-tabContent">
                {dashboardActivityData.map((item) => (
                  <div
                    key={item.id}
                    className={`tab-pane fade ${activeTab === item.id ? 'active show' : ''}`}
                    id={item.tabId}
                    role="tabpanel"
                    aria-labelledby={item.ariaLabelledby}
                  >
                    <div className="activity-wrapper-actions activity-wrapper-all">
                      {item.activityWrapper.map((itm, num) => (
                        <div key={num} className="activity-wrapper-action-single activity-wrapper-action-single-2  pos-rel">
                          <div className="activity-3dots-menu">
                            <button className="art-3dots-icon">
                              <i className="fal fa-ellipsis-v"></i>
                            </button>
                          </div>
                          <div className="profile-img pos-rel">
                            <Link href="#">
                              <Image
                                src={itm.img}
                                alt="profile-img"
                                width={50}
                                height={50}
                                style={{ width: "100%", height: "auto" }}
                              />
                            </Link>
                            <div className={itm.divClass}>
                              <i className={itm.icon}></i>
                            </div>
                          </div>
                          <div className="activity-meta-text activity-meta-text-spacing">
                            <div className="actvity-text">
                              <Link href="/creator-profile">{itm.name}</Link> purchased{" "}
                              <Link href="/art-details">{itm.octionName}</Link> posted by{" "}
                              <Link href="/creator-profile">{itm.author}</Link>
                            </div>
                            <div className="activity-time">{itm.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardActivity;
