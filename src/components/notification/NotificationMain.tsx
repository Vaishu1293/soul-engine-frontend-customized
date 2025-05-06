import Link from 'next/link';
import React from 'react';
import NotificationCheckbox from './NotificationCheckbox';

const NotificationMain = () => {
    return (
        <div className='custom-dashboard-space pt-120'>
            <div className='container c-container-2'>
                <div className="dashboard-inner-box custom-h-175">
                    <div className="page-title text-center mb-30">
                        <h2 className="breadcrumb-title mb-10">Notifications</h2>
                        <div className="breadcrumb-menu">
                            <nav className="breadcrumb-trail breadcrumbs">
                                <ul className="trail-items">
                                    <li className="trail-item trail-begin"><Link href="/dashboard">Dashboard</Link></li>
                                    <li className="trail-item trail-end"><span>Notification Settings</span></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className='dashboard-profile-tab mb-30'>
                                <div className="notifications">
                                    <div className="notifications-text">
                                        <h5>Auction Alerts</h5>
                                        <p>Stay informed about bids and auctions on your NFTs.</p>
                                    </div>
                                    <div className="notifications-checkbox">
                                        <NotificationCheckbox sectionId="uniqueSlideOne" checkboxId="checkboxOne" />
                                    </div>
                                </div>
                                <div className="notifications">
                                    <div className="notifications-text">
                                        <h5>Price Drop Notifications</h5>
                                        <p>Get notified when prices drop for NFTs on your watchlist.</p>
                                    </div>
                                    <div className="notifications-checkbox">
                                        <NotificationCheckbox sectionId="uniqueSlideTwo" checkboxId="checkboxTwo" />
                                    </div>
                                </div>
                                <div className="notifications">
                                    <div className="notifications-text">
                                        <h5>New Listing Updates</h5>
                                        <p>Receive alerts about new NFTs in your favorite categories.</p>
                                    </div>
                                    <div className="notifications-checkbox">
                                        <NotificationCheckbox sectionId="uniqueSlideThree" checkboxId="checkboxThree" />
                                    </div>
                                </div>
                                <div className="notifications">
                                    <div className="notifications-text">
                                        <h5>Wallet Balance Alerts</h5>
                                        <p>Notifications for low wallet balances or new deposits.</p>
                                    </div>
                                    <div className="notifications-checkbox">
                                        <NotificationCheckbox sectionId="uniqueSlideFour" checkboxId="checkboxFour" />
                                    </div>
                                </div>
                                <div className="notifications">
                                    <div className="notifications-text">
                                        <h5>Transaction Confirmations</h5>
                                        <p>Updates for completed transactions or pending payments.</p>
                                    </div>
                                    <div className="notifications-checkbox">
                                        <NotificationCheckbox sectionId="uniqueSlideFive" checkboxId="checkboxFive" />
                                    </div>
                                </div>
                                <div className="notifications">
                                    <div className="notifications-text">
                                        <h5>Creator Updates</h5>
                                        <p>Get notified when your favorite creators release new NFTs.</p>
                                    </div>
                                    <div className="notifications-checkbox">
                                        <NotificationCheckbox sectionId="uniqueSlideSix" checkboxId="checkboxSix" />
                                    </div>
                                </div>
                                <div className="notifications">
                                    <div className="notifications-text">
                                        <h5>Follower Milestones</h5>
                                        <p>Alerts when you hit new follower milestones.</p>
                                    </div>
                                    <div className="notifications-checkbox">
                                        <NotificationCheckbox sectionId="uniqueSlideSeven" checkboxId="checkboxSeven" />
                                    </div>
                                </div>
                                <div className="notifications">
                                    <div className="notifications-text">
                                        <h5>Message Notifications</h5>
                                        <p>Receive updates for private messages or offers.</p>
                                    </div>
                                    <div className="notifications-checkbox">
                                        <NotificationCheckbox sectionId="uniqueSlideEight" checkboxId="checkboxEight" />
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

export default NotificationMain;