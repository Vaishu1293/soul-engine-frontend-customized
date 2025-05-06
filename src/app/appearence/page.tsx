import AppearenceMain from '@/components/appearence/AppearenceMain';
import DashboardWrapper from '@/layout/DashboardWrapper';
import React from 'react';

const Appearence = () => {
    return (
        <>
            <DashboardWrapper>
                <main>
                    <AppearenceMain />
                </main>
            </DashboardWrapper>
        </>
    );
};

export default Appearence;