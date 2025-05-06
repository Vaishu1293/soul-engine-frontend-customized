import MyCollectionMain from '@/components/my-collection/MyCollectionMain';
import DashboardWrapper from '@/layout/DashboardWrapper';
import React from 'react';

const MyCollection = () => {
    return (
        <>
           <DashboardWrapper>
            <main>
                <MyCollectionMain/>
            </main>
          </DashboardWrapper>
    </>
    );
};

export default MyCollection;