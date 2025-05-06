import React from 'react';
import ApexchartsAreaDatetime from './ApexchartsAreaDatetime';
import PriceHistoryChart from './PriceLinebarChart';
import TopSaller from './TopSaller';
import DashboardArtWorks from './DashboardArtWorks';
import DashboardActivity from './DashboardActivity';

const UserDashboardMain = () => {
    return (
        <div className='custom-dashboard-space pt-120'>
            <div className='container c-container-2'>
                <div className="dashboard-inner-box">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className="dashboard-profile-tab mb-25">
                                      <PriceHistoryChart />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className="dashboard-profile-tab mb-25">
                                        <ApexchartsAreaDatetime />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <DashboardArtWorks />
                        </div>
                        <div className='col-lg-8'>
                            <div className="dashboard-profile-tab dashboard-profile-tab-activity mb-25">
                                <DashboardActivity />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <TopSaller />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboardMain;