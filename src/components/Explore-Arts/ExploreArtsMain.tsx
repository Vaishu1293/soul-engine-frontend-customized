import React from "react";
import ThemeChanger from "../home/ThemeChanger";
import Breadcrumbs from "@/utils/Breadcrumbs";
import ExploreCategorySlider from "@/elements/sliders/ExploreCategorySlider";
import ExploreArtsBar from "./ExploreArtsBar";

import Pagination from "@/utils/Pagination";
import ArtWorkSingleCard from "../common/ArtWorkSingleCard";
import { productData } from "@/data/productData";
const ExploreArtsMain = () => {
  return (
    <main>
      <ThemeChanger />
      <Breadcrumbs
        breadcrumbTitle="Explore Artworks"
        breadcrumbSubTitle="Explore Artworks"
      />

      <section className="artworks-area pt-0 pb-90">
        <div className="container">
          <ExploreCategorySlider />
          <ExploreArtsBar />
          <div className="row wow fadeInUp">
            {productData.slice(0, 24).map((item: any, index) => (
              <ArtWorkSingleCard item={item} key={index} />
            ))}
          </div>
          <div className="row wow fadeInUp">
            <div className="col-12">
              <Pagination />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExploreArtsMain;
