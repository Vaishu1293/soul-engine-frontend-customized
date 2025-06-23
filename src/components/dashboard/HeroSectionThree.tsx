"use client"
import React from "react";
import { Navigation, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import Link from "next/link";
import thumb from "../../../public/assets/img/banner/dashboard-banner-img.webp";
import thumb3 from "../../../public/assets/img/bids/oc-category-9.jpg";
import prifile1 from "../../../public/assets/img/profile/profile37.png";
import thumb5 from "../../../public/assets/img/bids/oc-category-1.jpg";
import thumb6 from "../../../public/assets/img/profile/profile7.jpg";
import thumb7 from "../../../public/assets/img/bids/oc-category-3.jpg";
import thumb8 from "../../../public/assets/img/profile/profile3.jpg";
import shape1 from "../../../public/assets/img/shape/shape-1.png";
import shapeL1 from "../../../public/assets/img/shape/shape-l-1.png";
import shapeL2 from "../../../public/assets/img/shape/shape-l-2.png";
import shape2 from "../../../public/assets/img/shape/shape-2.png";
import shape3 from "../../../public/assets/img/shape/hero-three-light.png";
import Image from "next/image";
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
import CounterTwo from "@/utils/CounterTwo";

const HeroSectionThree = () => {
  useFlashlightAnimation();
  return (
    <div className="banner-area banner-area3 pos-rel pt-120">
      <div className="container c-container-1">
        <div>
          <div className="row">
            <div className="col-xl-8 banner-3-column">
              <Swiper
                modules={[Navigation, Scrollbar, A11y, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: true
                }}
                navigation={{
                  nextEl: '.auction-button-next',
                  prevEl: '.auction-button-prev',
                }}
              >
                <SwiperSlide>
                <div className="dashboard-banner-slider-wrap light-effect">
                  <div className="dashboard-banner-slider">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="dashboard-banner-img pos-rel">
                          <Image
                            style={{ width: "100%", height: "auto" }}
                            priority
                            src={thumb}
                            alt="img not found"
                          />
                          <div className="art-action">
                            <button className="art-action-like">
                              <i className="flaticon-heart"></i>
                            </button>
                            <div className="art-action-like-count">
                              1.2k+
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="dashboard-banner-text">
                          <div className="dashboard-banner-text-wrap">
                            <h1>Steampunk Robot</h1>
                          </div>
                          <div className="dashboard-banner-author">
                            <div className="dashboard-banner-author-img">
                              <Link href="/creators">
                                <Image
                                  style={{ width: "100%", height: "auto" }}
                                  src={prifile1}
                                  alt="profile-img"
                                />
                              </Link>
                            </div>
                            <div className="dashboard-banner-author-text">
                              <h5>Brooklyn Simmons</h5>
                              <span>@queendevs_56</span>
                            </div>
                          </div>
                          <div className="dashboard-banner-box">
                            <div className="dashboard-banner-box-item">
                              <span>Current Bid</span>
                              <h4>26.72 ETH</h4>
                            </div>
                            <div className="dashboard-banner-box-item">
                              <span>Action Time</span>
                              <CounterTwo day={2} min={45} sec={15} />
                            </div>
                          </div>
                          <div className="dashboard-banner-button">
                            <Link className="fill-btn-lightblue" href="#">
                              Place Bid
                            </Link>
                            <Link className="border-btn" href="/explore-arts">
                              Explore Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-banner-shape-1"><Image style={{ width: "auto", height: "auto" }} src={shape1} alt="shape" /></div>
                    <div className="dashboard-banner-shape-2"><Image style={{ width: "auto", height: "auto" }} src={shape2} alt="shape" /></div>
                    <div className="dashboard-banner-shape-3"><Image style={{ width: "auto", height: "auto" }} src={shape3} alt="shape" /></div>
                    <div className="dashboard-banner-shape-l-1"><Image style={{ width: "auto", height: "auto" }} src={shapeL1} alt="shape" /></div>
                    <div className="dashboard-banner-shape-l-2"><Image style={{ width: "auto", height: "auto" }} src={shapeL2} alt="shape" /></div>
                  </div>
                </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-xl-4 sidebar-art-list-column">
              <div className="sidebar-art-list">
                <div className="art-item-single sidebar-art-item">
                  <div className="art-item-wraper light-effect">
                    <div className="art-item-inner">
                      <div className="art-item-img pos-rel">
                        <Link href="/explore-arts">
                          <Image
                            style={{ width: "100%", height: "auto" }}
                            src={thumb3}
                            alt="art-img"
                          />
                        </Link>
                      </div>
                      <div className="art-item-content pos-rel">
                        <h4 className="art-name">
                          <Link href="/explore-arts">Abstract Cube</Link>
                        </h4>
                        <div className="artist">
                          <div className="profile-img pos-rel">
                            <Link href="/creators">
                              <Image
                                style={{ width: "100%", height: "auto" }}
                                src={prifile1}
                                alt="profile-img"
                              />
                            </Link>
                            <div className="profile-verification verified">
                              <i className="fas fa-check"></i>
                            </div>
                          </div>
                          <div className="artist-id">@Jerryfo</div>
                        </div>
                        <div className="art-meta-info">
                          <div className="art-meta-item">
                            <div className="art-meta-type">Current Bid</div>
                            <div className="art-price">24.47 ETH</div>
                          </div>
                          <div className="art-activity-btn">
                            <a href="#" className="place-bid">
                              Place Bid
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="art-item-single sidebar-art-item">
                  <div className="art-item-wraper light-effect">
                    <div className="art-item-inner">
                      <div className="art-item-img pos-rel">
                        <Link href="/explore-arts">
                          <Image
                            style={{ width: "100%", height: "auto" }}
                            src={thumb5}
                            alt="art-img"
                          />
                        </Link>
                      </div>
                      <div className="art-item-content pos-rel">
                        <h4 className="art-name">
                          <Link href="/explore-arts">Crypto Art</Link>
                        </h4>
                        <div className="artist">
                          <div className="profile-img pos-rel">
                            <Link href="/creators">
                              <Image
                                style={{ width: "100%", height: "auto" }}
                                src={thumb6}
                                alt="profile-img"
                              />
                            </Link>
                            <div className="profile-verification verified">
                              <i className="fas fa-check"></i>
                            </div>
                          </div>
                          <div className="artist-id">@machman</div>
                        </div>
                        <div className="art-meta-info">
                          <div className="art-meta-item">
                            <div className="art-meta-type">Current Bid</div>
                            <div className="art-price">23.84 ETH</div>
                          </div>
                          <div className="art-activity-btn">
                            <a href="#" className="place-bid">
                              Place Bid
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="art-item-single sidebar-art-item">
                  <div className="art-item-wraper light-effect">
                    <div className="art-item-inner">
                      <div className="art-item-img pos-rel">
                        <Link href="/explore-arts">
                          <Image
                            style={{ width: "100%", height: "auto" }}
                            src={thumb7}
                            alt="art-img"
                          />
                        </Link>
                      </div>
                      <div className="art-item-content pos-rel">
                        <h4 className="art-name">
                          <Link href="/explore-arts">Talking Ghost</Link>
                        </h4>
                        <div className="artist">
                          <div className="profile-img pos-rel">
                            <Link href="/creators">
                              <Image
                                style={{ width: "100%", height: "auto" }}
                                src={thumb8}
                                alt="profile-img"
                              />
                            </Link>
                            <div className="profile-verification verified">
                              <i className="fas fa-check"></i>
                            </div>
                          </div>
                          <div className="artist-id">@Jerryfo</div>
                        </div>
                        <div className="art-meta-info">
                          <div className="art-meta-item">
                            <div className="art-meta-type">Current Bid</div>
                            <div className="art-price">32.84 ETH</div>
                          </div>
                          <div className="art-activity-btn">
                            <a href="#" className="place-bid">
                              Place Bid
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionThree;
