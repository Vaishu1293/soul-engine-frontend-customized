import React from 'react';
import Link from 'next/link';
import { productData } from '@/data/productData';
import ArtWorkSingleCard from '../common/ArtWorkSingleCard';
const ExploreArtsThree = () => {
    return (
        <section className="artworks-area pt-100 pb-105">
            <div className="container c-container-1">
                <div className="row wow fadeInUp">
                    <div className="col-lg-8">
                        <div className="section-title1">
                            <h2 className="section-main-title1 mb-40">Exclusive Digital Art</h2>
                        </div>
                    </div>
                    <div className="col-lg-4">
                    </div>
                </div>
                <div className="row wow fadeInUp home-3-artworks">
                    {productData.slice(53, 69).map((item: any, index) => (
                        <ArtWorkSingleCard item={item} key={index} />
                    ))}
                </div>
                <div className="artwork-btn text-center pt-20">
                    <Link className="fill-btn" href="/explore-arts">Explore Now</Link>
                </div>
            </div>
        </section>
    );
};

export default ExploreArtsThree;