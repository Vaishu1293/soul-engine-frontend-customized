"use client"
import useFlashlightAnimation from '@/hooks/useFlashlightAnimation';
import { PopulartCollectionType } from '@/interFace/interFace';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface propsType {
    item: PopulartCollectionType;
}

const ReusableCollectionCard = ({ item }: propsType) => {
    useFlashlightAnimation();
    return (
        <>
            <div key={item.id} className={item.wrapperClass}>
                <div className="category-collections-wrapper light-effect mb-30">
                    <div className="category-collections-inner">
                        <div className="row">
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="art-item-single one">
                                            <div className="art-item-wraper">
                                                <div className="art-item-inner">
                                                    <div className="art-item-img pos-rel">
                                                        <Link href={item.Imglink}><Image src={item.popularImage1} alt="art-img" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="art-item-single two">
                                            <div className="art-item-wraper">
                                                <div className="art-item-inner">
                                                    <div className="art-item-img pos-rel">
                                                        <Link href={item.Imglink}><Image src={item.popularImage2} alt="art-img" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="art-item-single three">
                                    <div className="art-item-wraper">
                                        <div className="art-item-inner">
                                            <div className="art-item-img pos-rel">
                                                <Link href={item.Imglink}><Image src={item.popularImage3} alt="art-img" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="collection-content pos-rel">
                            <div className="art-3dots-menu">
                                <div className="art-3dots-action">
                                    <ul>
                                        <li><Link href="#"><i className="flaticon-share-1"></i>{item.popularShare}</Link></li>
                                    </ul>
                                </div>
                                <button className="art-3dots-icon"><i className="fal fa-ellipsis-v"></i></button>
                            </div>
                            <div className="collection-category">
                                <h4 className="category-name">
                                    <Link href={item.titleLink}>{item.popularTitle}</Link>
                                </h4>
                                <Link className="resource-meta-item" href={item.titleLink}>
                                    <div className="resource-created">{item.popularBtnNumber}</div>
                                    <div className="resource-meta-type">{item.popularBtn}</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReusableCollectionCard;


