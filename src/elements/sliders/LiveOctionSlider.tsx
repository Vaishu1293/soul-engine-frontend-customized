"use client"
import React from "react";
import { productData } from "@/data/productData";
//swiper
import { Navigation, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArtWorkSingleCardTwo from "@/components/common/ArtWorkSingleCardTwo";

const LiveOctionSlider = () => {
    return (
        <div className="auction-wrapper pos-rel">
            <div className="auction-active">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 1
                        },
                        500: {
                            slidesPerView: 1
                        },
                        768: {
                            slidesPerView: 2
                        },
                        992: {
                            slidesPerView: 3
                        },
                        1200: {
                            slidesPerView: 3
                        }
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true
                    }}
                    navigation={{
                        nextEl: '.auction-button-next',
                        prevEl: '.auction-button-prev',
                    }}
                >
                    {
                        productData.slice(48, 56).map((item, index) => (
                            <SwiperSlide key={item.id}>
                                <ArtWorkSingleCardTwo item={item} key={index} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className="auction-nav">
                <div className="auction-button-prev square-nav-btn"><i className="fal fa-long-arrow-left"></i></div>
                <div className="auction-button-next square-nav-btn"><i className="fal fa-long-arrow-right"></i></div>
            </div>
        </div>
    );
};

export default LiveOctionSlider;

