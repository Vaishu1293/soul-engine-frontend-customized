import SiteSettingMain from '@/components/site-setting/SiteSettingMain';
import DashboardWrapper from '@/layout/DashboardWrapper';
import React from 'react';

const SiteSetting = () => {
    return (
        <>
            <DashboardWrapper>
                <main>
                    <SiteSettingMain />
                </main>
            </DashboardWrapper>
        </>
    );
};

export default SiteSetting;