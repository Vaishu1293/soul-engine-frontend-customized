import React from 'react';
import Link from 'next/link';
import { getCurrentYear } from '@/utils/dateUtils';

const FooterTwo = () => {
    const currentYear = getCurrentYear();
    return (
        <>
            <footer>
                <div className="piland-copyright-area">
                    <div className="container c-container-1">
                        <div className="piland-copyright piland-copyright-two piland-noise-bg text-center">
                            <p>© {currentYear} All rights reserved | Design & Develop by{" "}
                                <Link href="https://themeforest.net/user/bdevs">BDevs</Link></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterTwo;