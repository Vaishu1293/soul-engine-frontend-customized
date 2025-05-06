"use client"
import useFlashlightAnimation from '@/hooks/useFlashlightAnimation';
import { ProductType } from '@/interFace/interFace';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface propsType {
    item: ProductType;
}

const ArtWorkSingleCardTwo = ({ item }: propsType) => {
    useFlashlightAnimation();
    return (
        <>
            <div key={item.id} className="col-xl-12">
                <div className="art-item-single mb-30">
                    <div className="art-item-wraper light-effect">
                        <div className="art-item-inner">
                            <div className="art-item-img art-item-img-2 pos-rel">
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
                                <Link href={`/art-details/${item.id}`}>
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
                                    <Link href={`/art-details/${item.id}`}>{item.title}</Link>
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
        </>
    );
};

export default ArtWorkSingleCardTwo;