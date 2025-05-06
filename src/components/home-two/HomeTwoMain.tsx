import React from 'react';
import ThemeChanger from '../home/ThemeChanger';
import HeroSectionTwo from './HeroSectionTwo';
import OctionTwoSlider from './OctionTwoSlider';
import TopCreatorTwo from './TopCreatorTwo';
import WalletSection from '../home/WalletSection';
import ArtWorksSectionTwo from './ArtWorksSectionTwo';
import PopularSectionTwo from './PopularSectionTwo';
import WorkProcessSectionTwo from './WorkProcessSectionTwo';

const HomeTwoMain = () => {
    return (
        <>
            <ThemeChanger/>
            <HeroSectionTwo/>
            <OctionTwoSlider/>
            <TopCreatorTwo/>
            <WalletSection walletSpacing="pt-80 pb-100 z-index-1"/>
            <ArtWorksSectionTwo />
            <WorkProcessSectionTwo/>
            <PopularSectionTwo/>
        </>
    );
};

export default HomeTwoMain;