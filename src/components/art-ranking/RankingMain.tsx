import React from "react";
import ThemeChanger from "../home/ThemeChanger";
import Breadcrumbs from "@/utils/Breadcrumbs";
import ExploreCategorySlider from "@/elements/sliders/ExploreCategorySlider";
import RankingTableTitle from "./RankingTableTitle";
import { productData } from "@/data/productData";
import SingleArtRanking from "./SingleArtRanking";
import Pagination from "@/utils/Pagination";

const RankingMain = () => {
  return (
    <>
      <ThemeChanger />
      <Breadcrumbs breadcrumbTitle="Item Ranking" breadcrumbSubTitle="Item Ranking" />
        <div className="art-ranking-area pb-10">
            <div className="container">
                <div className="row wow fadeInUp">
                    <div className="col-lg-12">
                        <ExploreCategorySlider/>
                    </div>
                </div>
                <div className="rank-list-container wow fadeInUp">
                    <div className="rank-list-wrapper mb-20">
                        <RankingTableTitle/>

                        <div className="rank-list-items">
                            {
                                productData.slice(24, 34).map(product => <SingleArtRanking key={product.id} product={product} />)
                            }
                        </div>
                    </div>
                </div>
                <div className="row wow fadeInUp">
                    <div className="col-12">
                        <Pagination/>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default RankingMain;
