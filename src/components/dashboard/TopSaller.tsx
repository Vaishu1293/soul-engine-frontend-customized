import { TopSeller } from '@/data/top-creator-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TopSaller = () => {
    return (
        <>
            <div className="dashboard-profile-tab dashboard-profile-tab-2 mb-30">
                <div className="row wow fadeInUp">
                    <div className="col-lg-12">
                        <div className="section-title1">
                            <h3 className="section-main-title3 mt-10 mb-30">Top Seller</h3>
                        </div>
                    </div>
                </div>
                {TopSeller.length > 0 && (
                    <div className="scroll-container scrollbar-spacing">
                        <div className="row wow fadeInUp">
                            {TopSeller.map((item, num) => (
                                <div
                                    key={num}
                                    className="col-xl-12 col-lg-12 col-md-6"
                                >
                                    <div className="creator-single creator-single-short mb-15 pb-15">
                                        <div className="creator-wraper">
                                            <div className="creator-inner">
                                                <div className="creator-content pos-rel creator-short-content">
                                                    <div className="profile-img pos-rel">
                                                        <Link href="#">
                                                            <Image
                                                                src={item.TopSellerImage}
                                                                alt="profile-img"
                                                                width={50}
                                                                height={50}
                                                                style={{ width: '100%', height: 'auto' }}
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div className="creator-info">
                                                        <div>
                                                            <h4 className="artist-name pos-rel">
                                                                <Link href="#">{item.TopSellerTitle}</Link>
                                                                <span className="profile-verification verified">
                                                                    <i className="fas fa-check"></i>
                                                                </span>
                                                            </h4>
                                                            <div className="artist-id">{item.TopSellerCat}</div>
                                                            <div className="artist-meta-item">
                                                                <div className="artist-created">
                                                                    {item.TopSellerNumber}
                                                                </div>
                                                                <div className="artist-meta-type">
                                                                    {item.TopSellerBtn}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default TopSaller;
