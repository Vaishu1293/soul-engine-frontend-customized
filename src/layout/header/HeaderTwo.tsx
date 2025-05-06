"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import profile4 from "../../../public/assets/img/profile/profile1.jpg";
import Image from "next/image";
import SidebarMenuSection from "../sidebar/SidebarMenuSection";
import CategoryFilter from "../sidebar/CategoryFilter";

const HeaderTwo = () => {
  const [isActive13, setActive13] = useState(false);
  const handleToggle13 = () => {
    setActive13(!isActive13);
  };

  const { setTheme } = useTheme();

  const [menuOpen1, setMenuOpen1] = useState(false);
  const [menuOpen2, setMenuOpen2] = useState(false);

  return (
    <>
      <header className="header2">
        <div className="header-main header-main2">
          <div className="container c-container-1">
            <div className="header-main2-content header-content-border-two">
              <div className="row align-items-center">
                <div className="col-xl-7 col-lg-7 col-md-7 col-7">
                  <div className="header-main-left">
                    <div className="menu-bar mr-20 d-xxl-none">
                      <Link
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
                      </Link>
                    </div>
                    <form
                      action="#"
                      className="filter-search-input header-search d-none d-md-inline-block"
                    >
                      <input type="text" placeholder="Search keyword" />
                      <button>
                        <i className="fal fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5 col-5">
                  <div className="header-main-right">
                    <div className="header-btn ml-20 d-none d-xxl-inline-block">
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
                          <div className='profile-action-menu-wrapper'>
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
                    <div
                      className="product-filter-btn ml-20 d-xxl-none"
                      onClick={() => {
                        setMenuOpen2(!menuOpen2);
                      }}
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

      <SidebarMenuSection menuOpen1={menuOpen1} setMenuOpen1={setMenuOpen1} />
      <div
        onClick={() => setMenuOpen1(false)}
        className={
          menuOpen1 ? "offcanvas-overlay overlay-open" : "offcanvas-overlay"
        }
      ></div>

      <CategoryFilter menuOpen2={menuOpen2} setMenuOpen2={setMenuOpen2} />
      <div
        onClick={() => setMenuOpen2(false)}
        className={
          menuOpen2 ? "offcanvas-overlay overlay-open" : "offcanvas-overlay"
        }
      ></div>
    </>
  );
};

export default HeaderTwo;
