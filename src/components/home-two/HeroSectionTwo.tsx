import React from 'react';
import Link from 'next/link';
import bannershape1 from "../../../public/assets/img/shape/hero-2-shape.png"
import bannershape2 from "../../../public/assets/img/shape/hero-2-shape-light.png"
import Image from 'next/image';

const HeroSectionTwo = () => {
    return (
        <div className="banner-area banner-area2 pos-rel">
            <div className="swiper-container banner2-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="single-banner single-banner-2 banner-670 d-flex align-items-center pos-rel">
                            <div className="banner-two-shape-dark">
                                <Image style={{ width: "auto", height: "auto" }} src={bannershape1} alt="img not found" />
                            </div>
                            <div className="banner-two-shape-light">
                                <Image style={{ width: "auto", height: "auto" }} src={bannershape2} alt="img not found" />
                            </div>
                            <div className="container pos-rel">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-xxl-8 col-lg-10">
                                        <div className="banner-content banner-content2 banner-content2-1 pt-120">
                                            <h1 data-animation="fadeInUp" data-delay=".3s" className="mb-25 font-prata">
                                            Curate Your Collection With Unique Digital Art <br className="d-none d-lg-block" /> and <span>NFTs</span></h1>
                                            <p data-animation="fadeInUp" data-delay=".5s" className="mb-40">There is enough digital
                                                artworks available online to help you put together crypto currency website.</p>
                                            <div className="banner-btn" data-animation="fadeInUp" data-delay=".7s">
                                                <Link className="fill-btn" href="/explore-arts">Explore Now</Link>
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

export default HeroSectionTwo;