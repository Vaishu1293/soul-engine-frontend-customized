"use client"
import React, { useState } from 'react';
import ProfileBanner from './ProfileBanner';
import NiceSelectForm from '@/elements/niceSelect/NiceSelectForm';
import { Gender } from '@/data/nice-select-data';
import Link from 'next/link';
import useFlashlightAnimation from '@/hooks/useFlashlightAnimation';

const ProfileMain = () => {
    const [selelectForm, setSelelectForm] = useState<string>("")
    const selectHandler = () =>{}
    useFlashlightAnimation();
    return (
        <div className='custom-dashboard-space pt-120'>
            <div className='container c-container-2'>
                <div className="dashboard-inner-box custom-h-175">
                    <div className='dashboard-breadcrumb'>
                        <div className="page-title mb-30">
                            <h2 className="breadcrumb-title mb-10">Profile Information</h2>
                            <div className="breadcrumb-menu">
                                <nav className="breadcrumb-trail breadcrumbs">
                                    <ul className="trail-items">
                                        <li className="trail-item trail-begin"><Link href="/dashboard">Dashboard</Link></li>
                                        <li className="trail-item trail-end"><span>Profile Information</span></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="dashboard-profile-tab light-effect-top pt-0 mb-30">
                                <div className='activity-tab-nav dashboard-activity-tab-nav pt-10 mb-20'>
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Profile Info</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Change Password</button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
                                        <div className="dashboard-profile-wrap">
                                            <ProfileBanner />
                                            <form className="personal-info-form" action="#">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="single-input-unit">
                                                            <label>First Name</label>
                                                            <input type="text" defaultValue="Steve" autoComplete='true'/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="single-input-unit">
                                                            <label>Last Name</label>
                                                            <input type="text" defaultValue="Long" autoComplete='true'/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="single-input-unit">
                                                            <label>Gender</label>
                                                            <div className="w-full">
                                                                <NiceSelectForm
                                                                options={Gender}
                                                                defaultCurrent={0}
                                                                onChange={selectHandler}
                                                                setSelelectForm={setSelelectForm}
                                                                name="g-select"
                                                                className="gender-category-select w-full mb-30"
                                                            />
                                                            </div> 
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="single-input-unit">
                                                            <label>Location</label>
                                                            <input type="text" defaultValue="Cupertino, California" autoComplete='true'/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="single-input-unit">
                                                            <label>Date of Bith</label>
                                                            <input type="date" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="single-input-unit">
                                                            <label>Email</label>
                                                            <input type="email" defaultValue="admin@gmail.com" autoComplete='true'/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="single-input-unit">
                                                            <label>Username</label>
                                                            <input type="text" defaultValue="Steve" autoComplete='true'/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="single-input-unit">
                                                            <label>Password</label>
                                                            <input type="password" defaultValue="********" autoComplete='true'/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="personal-info-text">
                                                    <textarea defaultValue="Hello, I am Kallaban a web development Extensive documentation plus great video guides on how to setup and customize Trucking will make your customizations super easy and fast!"></textarea>
                                                </div>
                                                <div className="personal-info-btn">
                                                    <button id="update-btn" className="fill-btn">Update Now</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>
                                        <div className="dashboard-profile-wrap">
                                            <form className="personal-info-form" action="#">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="single-input-unit">
                                                            <label>Current Password</label>
                                                            <input type="password" placeholder="" autoComplete='true'/>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="single-input-unit">
                                                            <label>New Password</label>
                                                            <input type="password" placeholder="" autoComplete='true'/>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="single-input-unit">
                                                            <label>Confirm Password</label>
                                                            <input type="password" placeholder="" autoComplete='true'/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="personal-info-btn">
                                                    <button  className="fill-btn">Update Password</button>
                                                </div>
                                            </form>
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

export default ProfileMain;
