import PaymentMethodMain from '@/components/payment-method/PaymentMethodMain';
import DashboardWrapper from '@/layout/DashboardWrapper';
import React from 'react';

const PaymentMethod = () => {
    return (
        <>
            <DashboardWrapper>
                <main>
                    <PaymentMethodMain />
                </main>
            </DashboardWrapper>
        </>
    );
};

export default PaymentMethod;