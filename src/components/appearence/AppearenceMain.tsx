"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from 'next/link';
import React from 'react';
import lightMood from '../../../public/assets/img/shape/light-mood.png';
import darkMood from '../../../public/assets/img/shape/dark-mood.png';

const AppearenceMain = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div className='custom-dashboard-space pt-120'>
            <div className='container c-container-2'>
                <div className="dashboard-inner-box custom-h-175">
                    <div className="page-title text-center mb-30">
                     <h2 className="breadcrumb-title mb-10">Appearence</h2>
                     <div className="breadcrumb-menu">
                        <nav className="breadcrumb-trail breadcrumbs">
                           <ul className="trail-items">
                              <li className="trail-item trail-begin"><Link href="/dashboard">Dashboard</Link></li>
                              <li className="trail-item trail-end"><span>Appearence</span></li>
                           </ul>
                        </nav>
                     </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="dashboard-profile-tab mb-30">
                                <h4 className="mb-30">Customize Your Application Theme</h4>
                                <div className='appearence-wrap'>
                                    <div className={`appearence-light ${theme === "light" ? "active" : ""}`} onClick={() => setTheme("light")}>
                                        <Image src={lightMood} alt="light img" className="img-fluid" style={{ width: '180px', height: '120px', objectFit: 'contain' }} />
                                        <span>Enable Light Mood</span>
                                    </div>
                                    <div className={`appearence-dark ${theme === "dark" ? "active" : ""}`} onClick={() => setTheme("dark")}>
                                        <Image src={darkMood} alt="dark img" className="img-fluid" style={{ width: '180px', height: '120px', objectFit: 'contain' }} />
                                        <span>Enable Dark Mood</span>
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

export default AppearenceMain;