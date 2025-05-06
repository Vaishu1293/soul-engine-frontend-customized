"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { dashboardWalletConnect, walletConnect } from "@/data/wallet-connect-data";
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";

const MyWalletMain = () => {
    useFlashlightAnimation();
    return (
        <div className='custom-dashboard-space pt-120'>
            <div className='container c-container-2'>
                <div className="dashboard-inner-box custom-h-175">
                    <div className="page-title text-center mb-30">
                        <h2 className="breadcrumb-title mb-10">My Wallet</h2>
                        <div className="breadcrumb-menu">
                            <nav className="breadcrumb-trail breadcrumbs">
                                <ul className="trail-items">
                                    <li className="trail-item trail-begin"><Link href="/dashboard">Dashboard</Link></li>
                                    <li className="trail-item trail-end"><span>My Wallet</span></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    {dashboardWalletConnect && (
                        <div className="row">
                            {dashboardWalletConnect.map((WalletConnectMain, num) => (
                                <div key={num} className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="box-card-single box-card-single-2 light-effect box-card-wallet box-card-wallet-2 wallet-spacing-wrapper mb-25 wow fadeInUp">
                                        <div className="box-card-inner box-card-inner-2">
                                            <div className="box-card-icon box-card-icon-style-2 mr-2">
                                                <Image
                                                    width={50}
                                                    height={50}
                                                    style={{ width: "auto", height: "auto" }}
                                                    src={WalletConnectMain?.walletImage}
                                                    alt="Img Not Found"
                                                />
                                                <div className="box-wallet-content-2">
                                                    <h4 className="box-card-title box-card-title-2">
                                                        {WalletConnectMain.walletTitle}
                                                    </h4>
                                                    <p>{WalletConnectMain.walletDesc}</p>
                                                </div>
                                            </div>
                                            <div className="box-card-btn box-card-btn-2">
                                                <Link href="#" className="fill-btn-lightblue fill-btn-lightblue-style-2">
                                                    {WalletConnectMain.walletBtn}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyWalletMain;

