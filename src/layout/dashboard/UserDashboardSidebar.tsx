"use client";
import React, { useState } from "react";
import Link from "next/link";
import logoOne from "../../../public/assets/img/logo/logo.png";
import logoTwo from "../../../public/assets/img/logo/logo-2.png";
import myWalletThumb from "../../../public/assets/img/wallet/my-wallet-thumb.png";
import myWalletBlancLogo from "../../../public/assets/img/wallet/oc-wallet-4.png";
import Image from "next/image";
import { DashboardMenu } from "@/data/dashboard-menu";

interface propsType {
    menuOpen1: boolean;
    setMenuOpen1: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserDashboardSidebar = ({ setMenuOpen1, menuOpen1 }: propsType) => {
    const [activeMenu, setActiveMenu] = useState(false);
    const [sideMenuOpen2, setSideMenuOpen2] = useState(false);
    const [menuId, setmenuId] = useState(0);

    const openMobileMenu = (menuLabel: number) => {
        setmenuId(menuLabel);
        setActiveMenu(!activeMenu)
    };
    return (
        <div>
            <div className="fix">
                <div className={menuOpen1 ? "menu2-side-bar-wrapper  open" : "menu2-side-bar-wrapper dashboard-sidebar-menu"}>
                    <div className="menu2-side-bar">
                        <div className="side-info-content">
                            <div className="offset-widget offset-logo mb-25">
                                <div className="row align-items-center">
                                    <div className="col-9">
                                        <div className="header-logo header1-logo">
                                            <Link className="logo-bb" href="/">
                                                <Image src={logoTwo} priority alt="logo-img" />
                                            </Link>
                                            <Link className="logo-bw" href="/">
                                                <Image src={logoOne} priority alt="logo-img" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard-menus-wrap">
                                <div className="mm-menu dashboard-menus mb-60">
                                    <ul>
                                        {DashboardMenu.map((menuItem, index) => (
                                            <li
                                                key={index}
                                                className={menuId === menuItem.id && menuItem.subMenu === true && activeMenu ? "has-droupdown active" : menuItem.subMenu === false ? "" : "has-droupdown"}>
                                                <Link
                                                    href={menuItem.subMenu ? "" : menuItem.href}
                                                    onClick={() => {
                                                        if (menuItem.subMenu) {
                                                            openMobileMenu(menuItem.id);
                                                        } else {
                                                            setSideMenuOpen2(!sideMenuOpen2)
                                                        }
                                                    }}
                                                >
                                                    <i className={`menu-icon ${menuItem?.icon}`}></i>{menuItem.label}
                                                </Link>
                                                <ul
                                                    className={
                                                        menuId === menuItem.id
                                                            ? "sub-menu active"
                                                            : "sub-menu"
                                                    }
                                                >
                                                    {menuItem.subMenuItems?.length &&
                                                        menuItem.subMenuItems.map((subMenuItem, subIndex) => (
                                                            <li key={subIndex}>
                                                                <Link onClick={() => setSideMenuOpen2(!sideMenuOpen2)} href={subMenuItem.href}>
                                                                    {subMenuItem.label}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="dashboard-my-wallet">
                                    <div className="dashboard-my-wallet-thumb"><Image src={myWalletThumb} priority style={{ width: "100%", height: "100%" }} alt="my-wallet-thumb" /></div>
                                    <div className="dashboard-my-wallet-content">
                                        <h3 className="title">Current balance</h3>
                                        <div className="dashboard-my-wallet-balance">
                                            <div className="thumb"><Image src={myWalletBlancLogo} priority style={{ width: "100%", height: "100%" }} alt="my-wallet-thumb" /></div>
                                            <h3 className="amount">52,789 ETH</h3>
                                        </div>
                                        <div className="dashboard-my-wallet-btn">
                                            <button className="fill-btn w-100">Recharge</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offcanvas-overlay" onClick={() => { setMenuOpen1(!menuOpen1) }}></div>
            <div className="offcanvas-overlay-white"></div>
        </div>
    );
};

export default UserDashboardSidebar;
