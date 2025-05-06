"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import profile4 from "../../../public/assets/img/profile/profile1.jpg";
import Image from "next/image";
import UserDashboardSidebar from "../dashboard/UserDashboardSidebar";
import HeaderOneMenu from "./component/HeaderOneMenu";
import useSticky from "@/hooks/useSticky";
import logoWhite from "../../../public/assets/img/logo/logo.png"
import logoBlack from "../../../public/assets/img/logo/logo-2.png"
import MobileMenu from "@/utils/MobileMenu";
import useGlobalContext from "@/hooks/use-context";

const HeaderThree = () => {
  const [isActive13, setActive13] = useState(false);
  const handleToggle13 = () => {
    setActive13(!isActive13);
  };

  const { setTheme } = useTheme();

  const [menuOpen1, setMenuOpen1] = useState(false);
  const { toggleSideMenu, sideMenuOpen } = useGlobalContext()
  // sticky nav
  const { sticky } = useSticky();

  return (
    <>
      <header className="header2">
        <div id="header-sticky"  className={sticky ? "sticky header-main header-main2 header-main3" : "header-main header-main2 header-main3"}>
          <div className="c-container-2 custom-x-space-15">
            <div className="header-main2-content dashboard-header-content">
              <div className="row align-items-center">
                <div className="col-xl-10 col-lg-9 col-md-9 col-9">
                  <div className="header-main-left">
                    <div className="header-main-left-inner d-xxl-none">
                      <div className="menu-bar mr-20 d-xxl-none">
                        <a
                          className="side-toggle"
                          href="#!"
                          onClick={() => {
                            setMenuOpen1(!menuOpen1);
                          }}
                        >
                          <div className="bar-icon left-bar-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </a>
                      </div>
                      <div className="dashboard-header-logo d-block d-xxl-none">
                        <Image className="logo-white" src={logoWhite} style={{width:"auto", height:"auto"}} alt="logo" />
                        <Image className="logo-black" src={logoBlack} style={{width:"auto", height:"auto"}} alt="logo" />
                      </div>
                    </div>
                    <div className="main-menu main-menu1 main-menu3 d-none d-xxl-block">
                      <nav id="mobile-menu">
                          <HeaderOneMenu />
                      </nav>
                    </div>
                    <form
                      action="#"
                      className="filter-search-input header-search d-none d-xl-inline-block"
                    >
                      <input type="text" placeholder="Search keyword" />
                      <button>
                        <i className="fal fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-3 col-3">
                  <div className="header-main-right dashboard-header-main-right">
                    <div className="header-btn ml-20 d-none d-xxxl-inline-block">
                      <Link className="fill-btn" href="/wallet-connect">
                        Prepare wallet
                      </Link>
                    </div>
                    <div className="profile-item profile-item-header ml-20 d-md-inline-block pos-rel">
                      <div
                        className={`profile-img pos-rel ${isActive13 ? "show-element" : ""
                          }`}
                        onClick={handleToggle13}
                      >
                        <div className="profile-action">
                          <div className='profile-action-menu-wrapper profile-action-style2'>
                            <div className='profile-header-wrapper'>
                              <Image src={profile4} alt="profile-img" />
                              <div className='profile-content'>
                                <h4 className='artist-name'>Jenny Wilson</h4>
                                <span>Founder</span>
                              </div>
                            </div>
                            <ul>
                              <li><Link href="/dashboard"><i className="flaticon-account"></i>Dashboard</Link></li>
                              <li><Link href="/profile"><i className="fal fa-user"></i>Profile</Link></li>
                              <li><Link href="/live-bids"><i className="menu-icon flaticon-money-bag"></i>Live Bids</Link></li>
                              <li><Link href="/my-wallet"><i className="menu-icon flaticon-wallet-1"></i>My Wallet</Link></li>
                              <li><Link href="/my-collection"><i className="menu-icon flaticon-add-2"></i>My Collection</Link></li>
                              <li><Link href="/payment-method"><i className="menu-icon flaticon-settings"></i>Settings</Link></li>
                              <li><Link href="/login"><i className="menu-icon flaticon-logout"></i>Logout</Link></li>
                            </ul>
                          </div>
                        </div>
                        <Image src={profile4} alt="profile-img" />
                        <div className="profile-verification verified">
                          <i className="fas fa-check"></i>
                        </div>
                      </div>
                    </div>
                    <div className="mode-switch-wrapper my_switcher setting-option home3-mode-switch ml-20">
                      <input type="checkbox" className="checkbox" id="chk" />
                      <label className="label" htmlFor="chk">
                        <i
                          className="fas fa-moon setColor dark theme__switcher-btn"
                          onClick={() => setTheme("dark")}
                        ></i>
                        <i
                          className="fas fa-sun setColor light theme__switcher-btn"
                          onClick={() => setTheme("light")}
                        ></i>
                        <span className="ball"></span>
                      </label>
                    </div>
                    <div className="product-filter-btn ml-20 d-xxl-none"
                      onClick={toggleSideMenu}
                    >
                      <i className="flaticon-filter"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <UserDashboardSidebar menuOpen1={menuOpen1} setMenuOpen1={setMenuOpen1} />
      <MobileMenu hideMenus="d-xxl-none" />
      <div onClick={toggleSideMenu} className={sideMenuOpen ? "offcanvas-overlay overlay-open" : "offcanvas-overlay"}></div>
      <div
        onClick={() => setMenuOpen1(false)}
        className={
          menuOpen1 ? "offcanvas-overlay overlay-open" : "offcanvas-overlay"
        }
      ></div>
    </>
  );
};

export default HeaderThree;
