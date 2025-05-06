import MyWalletMain from '@/components/my-wallet/MyWalletMain';
import DashboardWrapper from '@/layout/DashboardWrapper';
import React from 'react';

const MyWallet = () => {
    return (
        <>
            <DashboardWrapper>
                <main>
                    <MyWalletMain />
                </main>
            </DashboardWrapper>
        </>
    );
};

export default MyWallet;