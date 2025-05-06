"use client";
import React, { useState } from "react";
import Pagination from "@/utils/Pagination";
import TotalBids from "./TotalBids";

import Image from "next/image";
import CreatorProfileCard from "./CreatorProfileCard";
import { ProductType } from "@/interFace/interFace";
import Link from "next/link";
import ArtWorkSingleCard from "../common/ArtWorkSingleCard";
import { productData } from "@/data/productData";
import popularCollection from "@/data/popular-collection";
import ReusableCollectionCard from "../common/ReusableCollectionCard";

interface singleCreatorType {
  singleCreator: ProductType | any;
}

const CreatorDetails = ({ singleCreator }: singleCreatorType) => {
  const [activeNav, setactiveNav] = useState<number>(1);
  const menuData = [
    {
      id: 1,
      navId: "nav-created-tab",
      dataTarget: "tab-nav1",
      artistMeta: "Created",
      create: "16",
    },
    {
      id: 2,
      navId: "nav-collection-tab",
      dataTarget: "tab-nav2",
      artistMeta: "Collection",
      create: "95",
    },
    {
      id: 3,
      navId: "nav-featured-tab",
      dataTarget: "tab-nav3",
      artistMeta: "Featured Items",
      create: "12",
    },
    {
      id: 4,
      navId: "nav-sold-tab",
      dataTarget: "tab-nav4",
      artistMeta: "Total Sold",
      create: "24",
    },
    {
      id: 5,
      navId: "nav-bid-tab",
      dataTarget: "tab-nav5",
      artistMeta: "Total Bids",
      create: "96",
    },
  ];
  return (
    <>
      <section className="creator-details-area pt-0 pb-90">
        <div className="creator-cover-img creator-details-cover-img pos-rel wow fadeInUp">
          <Image src={singleCreator?.coverImage} priority alt="cover-img" />
        </div>
        <div className="container">
          <div className="row">
            <CreatorProfileCard singleCreator={singleCreator} />
            <div className="col-xl-9">
              <div className="creator-info-bar mb-30 wow fadeInUp">
                <div className="artist-meta-info creator-details-meta-info">
                  <div className="artist-meta-item artist-meta-item-border">
                    <div className="artist-meta-type">
                      {singleCreator?.create}
                    </div>
                    <div className="artist-created">
                      {singleCreator?.createNumber}
                    </div>
                  </div>
                  <div className="artist-meta-item artist-meta-item-border">
                    <div className="artist-meta-type">Like</div>
                    <div className="artist-likes">879,502</div>
                  </div>
                  <div className="artist-meta-item artist-meta-item-border">
                    <div className="artist-meta-type">
                      {singleCreator?.follower}
                    </div>
                    <div className="artist-follwers">
                      {singleCreator?.followerNumber}
                    </div>
                  </div>
                  <div className="artist-meta-item">
                    <div className="artist-meta-type">
                      {singleCreator?.followed}
                    </div>
                    <div className="artist-followed">
                      {singleCreator?.followedNumber}
                    </div>
                  </div>
                </div>
                <div className="creator-details-action">
                  <div className="artist-follow-btn">
                    <button className="follow-artist">
                      {singleCreator?.follow}
                    </button>
                  </div>
                  <div className="social__links creator-share">
                    <i className="flaticon-share"></i>
                    <ul className="d-none">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="profile-link-text">
                    13b9ebda0178...
                    <button>
                      <i className="flaticon-copy"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="creator-info-tab wow fadeInUp">
                <div className="creator-info-tab-nav mb-30">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      {menuData.map((item) => (
                        <button
                          key={item.id}
                          className={`nav-link artist-meta-item-border-2 ${item.id === activeNav ? "active" : ""
                            }`}
                          id={item.navId}
                          data-bs-toggle="tab"
                          data-bs-target={`#${item.dataTarget}`}
                          type="button"
                          role="tab"
                          aria-selected="true"
                          onClick={() => setactiveNav(item.id)}
                        >
                          <span className="profile-nav-button">
                            <span className="artist-meta-item">
                              <span className="artist-meta-type">
                                {" "}
                                {item.artistMeta}{" "}
                              </span>
                              <span className="artist-created artist-created-spacing">
                                {" "}
                                {item.create}{" "}
                              </span>
                            </span>
                          </span>
                        </button>
                      ))}
                    </div>
                  </nav>
                </div>
                <div className="creator-info-tab-contents mb-30">
                  <div className="tab-content" id="nav-tabContent">
                    {menuData.map((item) => (
                      <div
                        key={item.id}
                        className={`tab-pane fade ${item.id === activeNav ? "active show" : ""
                          }`}
                        id={item.dataTarget}
                        role="tabpanel"
                        aria-labelledby={item.navId}
                      >
                        <div className="created-items-wrapper">
                          <div className="row">
                            {item.artistMeta === "Created" && (
                              productData.slice(34, 40).map((item: any, index) => (
                                <ArtWorkSingleCard item={item} key={index} />
                              ))
                            )}
                            {item.artistMeta === "Collection" && (
                                 popularCollection.slice(14, 20).map((item, index) => (
                                  <ReusableCollectionCard item={item} key={index} />
                                ))
                            )}
                            {item.artistMeta === "Featured Items" && (
                              productData.slice(38, 44).map((item: any, index) => (
                                <ArtWorkSingleCard item={item} key={index} />
                              ))
                            )}
                            {item.artistMeta === "Total Sold" && (
                               productData.slice(39, 45).map((item: any, index) => (
                                <ArtWorkSingleCard item={item} key={index} />
                              ))
                            )}
                            {item.artistMeta === "Total Bids" && <TotalBids />}
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <Pagination />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreatorDetails;
