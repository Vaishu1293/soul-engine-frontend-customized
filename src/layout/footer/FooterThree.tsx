
import { getCurrentYear } from '@/utils/dateUtils';
import Link from 'next/link';
import React from 'react';

const FooterThree = () => {
    const currentYear = getCurrentYear();
    return (
        <div className='custom-dashboard-space'>
            <div className="container c-container-2">
                <div className="dashboard-inner-box">
                    <div className='piland-copyright piland-copyright-two piland-noise-bg text-center'>
                        <p>© {currentYear} All rights reserved | Design & Develop by{" "}
                        <Link href="https://themeforest.net/user/bdevs">BDevs</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterThree;