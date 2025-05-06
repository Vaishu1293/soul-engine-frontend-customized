import React from "react";
import popularCollection from "@/data/popular-collection";
import ReusableCollectionCard from "../common/ReusableCollectionCard";


const PopularSection = () => {
    return (
        <section className="popular-collections-area pt-0 pb-100">
            <div className="container">
                <div className="row wow fadeInUp">
                    <div className="col-lg-12">
                        <div className="section-title1 pos-rel text-center mb-40">
                            <h2 className="section-main-title1">Exclusive Collections</h2>
                            <p>Discover unique collections and handpicked treasures just for you.</p>
                        </div>
                    </div>
                </div>
                {popularCollection &&
                    <div className="row wow fadeInUp">
                        {popularCollection.slice(0, 4).map((item, index) => (
                            <ReusableCollectionCard item={item} key={index} />
                        ))}
                    </div>
                }
            </div>
        </section>
    );
};

export default PopularSection;