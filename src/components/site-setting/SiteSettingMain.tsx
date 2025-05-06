"use client"
import React, { useState, ChangeEvent } from 'react';
import Link from 'next/link';

const SiteSettingMain = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedFavicon, setSelectedFavicon] = useState<string | null>(null);
    
    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            if (file.type === 'image/jpeg' || file.type === 'image/png') {
                const reader = new FileReader();
                reader.onload = () => {
                    setSelectedImage(reader.result as string); // Convert result to string
                };
                reader.readAsDataURL(file); // Convert file to Base64 URL
            } else {
                alert('Please upload a valid image file (JPG or PNG)');
            }
        }
    };
    const handleFaviconChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            if (file.type === 'image/jpeg' || file.type === 'image/png') {
                const reader = new FileReader();
                reader.onload = () => {
                    setSelectedFavicon(reader.result as string); // Convert result to string
                };
                reader.readAsDataURL(file); // Convert file to Base64 URL
            } else {
                alert('Please upload a valid image file (JPG or PNG)');
            }
        }
    };

    return (
        <div className='custom-dashboard-space pt-120'>
            <div className='container c-container-2'>
                <div className="dashboard-inner-box custom-h-175">
                    <div className="page-title text-center mb-30">
                     <h2 className="breadcrumb-title mb-10">Site Setting</h2>
                     <div className="breadcrumb-menu">
                        <nav className="breadcrumb-trail breadcrumbs">
                           <ul className="trail-items">
                              <li className="trail-item trail-begin"><Link href="/dashboard">Dashboard</Link></li>
                              <li className="trail-item trail-end"><span>Site Setting</span></li>
                           </ul>
                        </nav>
                     </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="dashboard-profile-tab mb-30">
                                <div className='dashboard-profile-wrap'>
                                    <form className="personal-info-form" action="#">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="single-input-unit">
                                                    <label>App Name</label>
                                                    <input type="text" defaultValue="Piland - NFT Marketplace React, NextJs, Typescript Template" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className='mb-20'>
                                                    <div className="single-input-unit">
                                                        <label>Site Logo</label>
                                                    </div>
                                                    <div className="image-uploader">
                                                        <label htmlFor="SiteLogo">
                                                            <input
                                                                id='SiteLogo'
                                                                type="file"
                                                                accept="image/jpeg, image/png"
                                                                onChange={handleImageChange}
                                                            />
                                                            {!selectedImage && <span>Upload Site Logo</span>}
                                                        </label>
                                                        {selectedImage && (
                                                            <div className="image-preview">
                                                                <img src={selectedImage} alt="Uploaded Preview" />
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className='mb-20'>
                                                    <div className="single-input-unit">
                                                        <label>Favicon</label>
                                                    </div>
                                                    <div className="image-uploader">
                                                        <label htmlFor="Favicon">
                                                            <input
                                                                id='Favicon'
                                                                type="file"
                                                                accept="image/jpeg, image/png"
                                                                onChange={handleFaviconChange}
                                                            />
                                                            {!selectedFavicon && <span>Upload Favicon</span>}
                                                        </label>
                                                        {selectedFavicon && (
                                                            <div className="image-preview">
                                                                <img src={selectedFavicon} alt="Uploaded Preview" />
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="single-input-unit">
                                                    <label>Copyright</label>
                                                    <input type="text" defaultValue="©Copyrighted & Designed by BDevs" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="personal-info-btn">
                                            <button id="update-btn" className="fill-btn">Update Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SiteSettingMain;