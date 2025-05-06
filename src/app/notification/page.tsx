import NotificationMain from '@/components/notification/NotificationMain';
import DashboardWrapper from '@/layout/DashboardWrapper';
import React from 'react';

const Notification = () => {
    return (
        <>
            <DashboardWrapper>
                <main>
                    <NotificationMain />
                </main>
            </DashboardWrapper>
        </>
    );
};

export default Notification;