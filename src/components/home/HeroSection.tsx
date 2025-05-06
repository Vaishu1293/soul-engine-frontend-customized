"use client"
import React, { useState } from "react";
import Link from 'next/link';
import thumbTwo from "../../../public/assets/img/banner/oc-banner-1.jpg"
import thumbFour from "../../../public/assets/img/banner/oc-banner-3.jpg"
import profileOne from "../../../public/assets/img/profile/profile26.jpg"
import Image from "next/image";
import ModalVideo from "react-modal-video";

const HeroSection = () => {
   const [isOpen, setIsOpen] = useState(false);
   const openVideoModal = () => setIsOpen(!isOpen);

   return (
      <>
      <ModalVideo channel='youtube' isOpen={isOpen} videoId='DOyr1_d9VLA' onClose={() => { openVideoModal(); }} />
         <div className="banner-area banner-area1 pos-rel fix">
            <div className="banner-light-shape"></div>
            <div className="single-banner single-banner-1 banner-900 d-flex pos-rel">
               <div className="container pos-rel">
                  <div className="row align-items-center justify-content-between">
                     <div className="col-xl-6 col-lg-6 banner-spacing"> 
                        <div className="banner-content banner-content1 banner-content1-1 pt-0">
                           <div className="banner-stroke-text">NFTS</div>
                           <h1 data-animation="fadeInUp" data-delay=".3s" className="mb-20 font-prata">Curate Your NFTs Universe</h1>
                           <div className="banner-fact">
                              <div className="banner-fact-img">
                                 <Image data-depth=".5" src={profileOne} alt="img not found" />
                                 <Link href="#"><i className="far fa-long-arrow-up"></i></Link>
                              </div>
                              <div className="banner-fact-text">
                                 <p>We have 18k+ customers <br />word wide</p>
                              </div>
                           </div>
                           <p data-animation="fadeInUp" data-delay=".5s" className="mb-40">There is enough digital artworks available online to help you put together crypto currency website</p>
                           <div className="banner-btn mb-105" data-animation="fadeInUp" data-delay=".7s">
                              <Link className="fill-btn" href="/explore-arts">Explore Now</Link>
                              <div className="oc-banner-video">
                                 <Link href="" className="popup-video"  onClick={() => { openVideoModal(); }}> <i className="fas fa-play"></i></Link>
                                 <span>Watch Video</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-5 col-lg-6">
                        <div className="oc-banner-img pos-rel">
                           <div className="oc-banner-img-1 stuff">
                              <Image data-depth=".5" src={thumbTwo} alt="img not found" />
                           </div>

                           <div className="oc-banner-img-3 stuff3">
                              <Image data-depth=".3" src={thumbFour} alt="img not found" />
                           </div>
                           <div className="oc-banner-client-wrapper stuff5">
                              <div className="oc-banner-client " data-depth=".3">
                                 <div className="q-meta-item">
                                    <div className="q-meta-viewed-members">
                                       <Link href="/creator-profile"><Image src={profileOne} alt="profile-img" /></Link>
                                    </div>
                                    <div className="q-meta-viewed-members-count">
                                       <span className="q-meta-views">@Brooklyn Simmons</span>
                                    </div>
                                 </div>
                                 <div className="d-flex justify-content-between align-items-center mb-15">
                                    <span className="q-meta-views">Terduce Lucica 05B</span>
                                    <p className="mb-0">Current Bid</p>
                                 </div>
                                 <div className="d-flex justify-content-between align-items-center">
                                    <span className="q-meta-views">2.5ETH</span>
                                    <Link href="#" className="place-bid">Buy Now</Link>
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

export default HeroSection;