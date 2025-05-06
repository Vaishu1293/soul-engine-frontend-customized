import React from "react";
import Link from 'next/link';
import popularCollection from "@/data/popular-collection";
import ReusableCollectionCard from "../common/ReusableCollectionCard";

const MyCollectionMain = () => {
    return (
        <div className='custom-dashboard-space pt-120'>
            <div className='container c-container-2'>
                <div className="dashboard-inner-box custom-h-175">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-title text-center mb-30">
                                <h2 className="breadcrumb-title mb-10">My Collection</h2>
                                <div className="breadcrumb-menu">
                                    <nav className="breadcrumb-trail breadcrumbs">
                                        <ul className="trail-items">
                                            <li className="trail-item trail-begin"><Link href="/dashboard">Dashboard</Link></li>
                                            <li className="trail-item trail-end"><span>My Collection</span></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className="dashboard-profile-tab mb-30 pb-5">
                                        <div className="popular-collections-area">
                                            {popularCollection &&
                                                <div className="row wow fadeInUp">
                                                    {popularCollection.slice(8, 14).map((item, index) => (
                                                        <ReusableCollectionCard item={item} key={index} />
                                                    ))}
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCollectionMain;