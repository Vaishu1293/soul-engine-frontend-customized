import LiveOctionMain from '@/components/live-auction/LiveOctionMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const LiveOction = () => {
    return (
        <>
            <Wrapper>
                <main>
                   <LiveOctionMain />
                </main>
            </Wrapper>
        </>
    );
};

export default LiveOction;