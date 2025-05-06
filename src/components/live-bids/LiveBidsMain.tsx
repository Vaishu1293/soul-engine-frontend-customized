import { productData } from '@/data/productData';
import Counter from '@/utils/Counter';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LiveBidsMain = () => {
    return (
        <>
            <div className='custom-dashboard-space pt-120'>
                <div className='container c-container-2'>
                    <div className="dashboard-inner-box">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-title text-center mb-30">
                                    <h2 className="breadcrumb-title mb-10">Live Bids</h2>
                                    <div className="breadcrumb-menu">
                                        <nav className="breadcrumb-trail breadcrumbs">
                                            <ul className="trail-items">
                                                <li className="trail-item trail-begin"><Link href="/dashboard">Dashboard</Link></li>
                                                <li className="trail-item trail-end"><span>Live Bids</span></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="row wow fadeInUp">
                                    <div className='col-lg-12'>
                                        <div className="dashboard-profile-tab pb-0 mb-30">
                                            <div className="popular-collections-area">
                                                <div className='row'>
                                                    {productData.slice(0, 6).map((item: any) => (
                                                        <div key={item.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                                            <div className="art-item-single mb-25">
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
                                                                            {item?.day &&
                                                                                <div className='art-live-countdown'>
                                                                                    <Counter day={item?.day} min={item?.min} />
                                                                                </div>
                                                                            }
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
                                                                                    <Link href="#">
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
                                                                                    <Link className="art-activity" href="#">
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default LiveBidsMain;