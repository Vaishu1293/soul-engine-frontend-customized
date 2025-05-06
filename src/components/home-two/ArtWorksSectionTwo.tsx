"use client";
import React from "react";
import { productData } from "@/data/productData";
import ArtWorkSingleCard from "../common/ArtWorkSingleCard";
import ArtWorkFilter from "../common/ArtWorkFilter";

const ArtWorksSectionTwo = () => {
  return (
    <section className="artworks-area piland-noise-bg pt-110 pb-100 z-index-1">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-lg-4">
            <div className="section-title1">
              <h2 className="section-main-title1 mb-40">Crypto Art Highlights</h2>
            </div>
          </div>
          <div className="col-lg-8">
          <ArtWorkFilter />
          </div>
        </div>
        <div className="row wow fadeInUp">
          {productData.slice(69, 77).map((item: any, index) => (
           <ArtWorkSingleCard item={item} key={index}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtWorksSectionTwo;
