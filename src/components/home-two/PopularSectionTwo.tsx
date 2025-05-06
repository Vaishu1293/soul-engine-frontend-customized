import React from "react";
import popularCollection from "@/data/popular-collection";
import ReusableCollectionCard from "../common/ReusableCollectionCard";


const PopularSectionTwo = () => {
    return (
        <section className="popular-collections-area pt-0 pb-100">
            <div className="container">
                <div className="row wow fadeInUp">
                    <div className="col-lg-12">
                        <div className="section-title1 pos-rel text-center mb-40">
                            <h2 className="section-main-title1">Artistic Collections</h2>
                            <p>Discover artistic collections and handpicked treasures just for you.</p>
                        </div>
                    </div>
                </div>
                {popularCollection &&
                    <div className="row wow fadeInUp">
                        {popularCollection.slice(4, 8).map((item, index) => (
                            <ReusableCollectionCard item={item} key={index} />
                        ))}
                    </div>
                }
            </div>
        </section>
    );
};

export default PopularSectionTwo;