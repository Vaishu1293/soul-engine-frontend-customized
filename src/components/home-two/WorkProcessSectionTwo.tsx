"use client";
import React from 'react';
import Link from 'next/link';
import thumbOne from "../../../public/assets/img/shape/connect-icon02.png"
import thumbTwo from "../../../public/assets/img/shape/create-collection02.png"
import thumbThree from "../../../public/assets/img/shape/list-icon-3.png"
import Image from 'next/image';
import { WorkProcessDataType } from '@/interFace/interFace';
import useFlashlightAnimation from '@/hooks/useFlashlightAnimation';

const WorkProcessSectionTwo = () => {
    useFlashlightAnimation();
    const WorkProcessItem:WorkProcessDataType[] = [
        {
            WorkProcessStep: 'Step',
            WorkProcessImage: thumbOne,
            WorkProcessTitle: 'Connect Your Digital Wallet',
            WorkProcessDesc: 'Securely connect your digital wallet to start exploring the innovative world of NFTs and blockchain technology.',
            WorkProcessLink: '/wallet-connect',
        },
        {
            WorkProcessStep: 'Step',
            WorkProcessImage: thumbTwo,
            WorkProcessTitle: 'Explore Unique Artwork',
            WorkProcessDesc: 'Discover a wide range of unique digital items and own them through the power of blockchain technology.',
            WorkProcessLink: '/explore-arts',
        },
        {
            WorkProcessStep: 'Step',
            WorkProcessImage: thumbThree,
            WorkProcessTitle: 'Upload and Share Creations',
            WorkProcessDesc: 'Showcase your collection and list your artworks on the blockchain for a decentralized ownership experience.',
            WorkProcessLink: '/upload',
        }
    ];


    return (
        <section className="work-process-area pt-110 pb-100">
            <div className="container">
                <div className="row wow fadeInUp">
                    <div className="col-lg-12">
                        <div className="section-title1 pos-rel text-center mb-40">
                            <h2 className="section-main-title1">Create Your NFT Collection</h2>
                            <p>Start your NFT journey by setting up your wallet today.</p>
                        </div>
                    </div>
                </div>
                <div className="work-processes">
                    {WorkProcessItem &&
                        <div className="row wow fadeInUp">
                            {WorkProcessItem.map((item, num) => (
                                <div key={num} className="col-lg-4 col-md-6">
                                    <div className="work-process-single light-effect mb-30 pos-rel">
                                        <div className="step">{item.WorkProcessStep}</div>
                                        <div className="work-process-content">
                                            <div className="process-icon mb-40">
                                                <Image src={item.WorkProcessImage} alt="img" />
                                            </div>
                                            <h4 className="process-title">
                                                <Link href={item.WorkProcessLink}>{item.WorkProcessTitle}</Link>
                                            </h4>
                                            <p>{item.WorkProcessDesc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default WorkProcessSectionTwo;