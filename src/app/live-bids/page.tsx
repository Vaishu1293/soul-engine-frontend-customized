import LiveBidsMain from '@/components/live-bids/LiveBidsMain';
import DashboardWrapper from '@/layout/DashboardWrapper';
import React from 'react';

const LiveBids = () => {
    return (
        <>
       <DashboardWrapper>
        <main>
          <LiveBidsMain />
        </main>
      </DashboardWrapper>
        </>
    );
};

export default LiveBids;