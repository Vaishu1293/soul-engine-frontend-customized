import { productData } from '@/data/productData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DashboardArtWorks = () => {
    return (
        <>
            <div className="dashboard-profile-tab mb-25">
                <div className="section-title1">
                    <h3 className="section-main-title2 mb-15">Exclusive Creations</h3>
                </div>
                <div className="row wow fadeInUp g-4">
                    {productData.slice(0, 3).map((item: any) => (
                        <div key={item.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div className="art-item-single">
                                <div className="art-item-wraper">
                                    <div className="art-item-inner">
                                        <div className="art-item-img pos-rel">
                                            <div className={item.featureClass}>
                                                <i className="fas fa-star"></i>
                                                {item.tag}
                                            </div>
                                            <div className="art-action">
                                                <button className="art-action-like">
                                                    <i className="flaticon-heart"></i>
                                                </button>
                                                <div className="art-action-like-count">
                                                    {item.count}
                                                </div>
                                                <div className="art-action-collection">
                                                    <i className="flaticon-plus-sign"></i>
                                                </div>
                                            </div>
                                            <Link href="#" className="place-bid">
                                                {item.bid}
                                            </Link>
                                            <Link href="#">
                                                <Image
                                                    style={{ width: "100%", height: "auto" }}
                                                    priority
                                                    src={item.img}
                                                    alt="art-img"
                                                />
                                            </Link>
                                        </div>
                                        <div className="art-item-content pos-rel">
                                            <div className="art-3dots-menu">
                                                <div className="art-3dots-action">
                                                    <ul>
                                                        <li>
                                                            <Link href="#">
                                                                <i className="fal fa-share-alt"></i>
                                                                {item.share}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                <i className="fal fa-flag-alt"></i>
                                                                {item.report}
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <button className="art-3dots-icon">
                                                    <i className="fal fa-ellipsis-v"></i>
                                                </button>
                                            </div>
                                            <div className="artist">
                                                <div className="profile-img pos-rel">
                                                    <Link href="/creator-profile">
                                                        <Image
                                                            width={20}
                                                            height={20}
                                                            style={{ width: "auto", height: "auto" }}
                                                            src={item.profileImage}
                                                            alt="profile-img"
                                                        />
                                                    </Link>
                                                    <div className="profile-verification verified">
                                                        <i className="fas fa-check"></i>
                                                    </div>
                                                </div>
                                                <div className="artist-id">{item.artistId}</div>
                                            </div>
                                            <h4 className="art-name">
                                                <Link href="#">{item.title}</Link>
                                            </h4>
                                            <div className="art-meta-info">
                                                <div className="art-meta-item">
                                                    <div className="art-meta-type">{item.currentBid}</div>
                                                    <div className="art-price">{item.price}</div>
                                                </div>
                                                <div className="art-activity-btn">
                                                    <Link className="art-activity" href="/activity">
                                                        <i className="fal fa-waveform-path"></i>
                                                        {item.activity}
                                                    </Link>
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
        </>
    );
};

export default DashboardArtWorks;