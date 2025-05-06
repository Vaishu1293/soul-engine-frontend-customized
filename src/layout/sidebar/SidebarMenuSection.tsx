"use client";
import React, { useState } from "react";
import Link from "next/link";
import logoOne from "../../../public/assets/img/logo/logo.png";
import logoTwo from "../../../public/assets/img/logo/logo-2.png";
import profile6 from "../../../public/assets/img/profile/profile17.jpg";
import profile7 from "../../../public/assets/img/profile/profile10.jpg";
import profile8 from "../../../public/assets/img/profile/profile2.jpg";
import profile9 from "../../../public/assets/img/profile/profile5.jpg";
import listIconTwo from "../../../public/assets/img/shape/list-icon-2.png";
import Image from "next/image";
import { menuItems } from "@/data/menu-data";

interface propsType {
  menuOpen1: boolean;
  setMenuOpen1: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarMenuSection = ({ setMenuOpen1, menuOpen1 }: propsType) => {
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
        <div
          className={
            menuOpen1 ? "menu2-side-bar-wrapper open" : "menu2-side-bar-wrapper dashboard-sidebar-menu sidebar-menu-scrollbar"
          }
        >
          <div className="menu2-side-bar">
            <div className="side-info-content">
              <div className="offset-widget offset-logo mb-25">
                <div className="row align-items-center">
                  <div className="col-9">
                    <div className="header-logo header1-logo">
                      <Link className="logo-bb" href="/">
                        <Image src={logoTwo} alt="logo-img" />
                      </Link>
                      <Link className="logo-bw" href="/">
                        <Image src={logoOne} alt="logo-img" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mm-menu mb-60">
              <ul>
                { menuItems.map((menuItem, index) => (
                  <li
                    key={index}
                    className={menuId === menuItem.id && menuItem.subMenu === true && activeMenu  ? "has-droupdown active" : menuItem.subMenu === false ? "" : "has-droupdown" }>
                    <Link
                      href={menuItem.subMenu ? "" : menuItem.href }
                      onClick={() => {
                        if (menuItem.subMenu) {
                          openMobileMenu(menuItem.id);
                        }else{
                          setSideMenuOpen2(!sideMenuOpen2)
                        }
                      }}                      
                      >
                      {menuItem.label}
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
                            <Link onClick={()=>setSideMenuOpen2(!sideMenuOpen2)} href={subMenuItem.href}>
                              {subMenuItem.label}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </li>
                ))}

                   
              </ul>
              </div>
              <div className="menu2-sidebar-widget">
                <h5 className="menu2-sidebar-widget-title mb-15">Top Seller</h5>
                <div className="sidebar-creators-list">
                  <div className="creator-single creator-single-short">
                    <div className="creator-wraper">
                      <div className="creator-inner">
                        <div className="artist">
                          <div className="profile-img pos-rel">
                            <Link href="/creators">
                              <Image
                                width={40}
                                height={40}
                                style={{ width: "100%", height: "auto" }}
                                src={profile7}
                                alt="profile-img"
                              />
                            </Link>
                            <div className="profile-verification verified">
                              <i className="fas fa-check"></i>
                            </div>
                          </div>
                          <div className="creator-name-id">
                            <h4 className="artist-name">
                              <Link href="/creators">Stive Machman</Link>
                            </h4>
                            <div className="artist-id">@machman</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="creator-single creator-single-short">
                    <div className="creator-wraper">
                      <div className="creator-inner">
                        <div className="artist">
                          <div className="profile-img pos-rel">
                            <Link href="/creators">
                              <Image
                                width={40}
                                height={40}
                                style={{ width: "100%", height: "auto" }}
                                src={profile8}
                                alt="profile-img"
                              />
                            </Link>
                            <div className="profile-verification verified">
                              <i className="fas fa-check"></i>
                            </div>
                          </div>
                          <div className="creator-name-id">
                            <h4 className="artist-name">
                              <Link href="/creators">Jobanico Mina</Link>
                            </h4>
                            <div className="artist-id">@mina</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="creator-single creator-single-short">
                    <div className="creator-wraper">
                      <div className="creator-inner">
                        <div className="artist">
                          <div className="profile-img pos-rel">
                            <Link href="/creators">
                              <Image
                                width={40}
                                height={40}
                                style={{ width: "100%", height: "auto" }}
                                src={profile6}
                                alt="profile-img"
                              />
                            </Link>
                            <div className="profile-verification verified">
                              <i className="fas fa-check"></i>
                            </div>
                          </div>
                          <div className="creator-name-id">
                            <h4 className="artist-name">
                              <Link href="/creators">Jeffery Hayes</Link>
                            </h4>
                            <div className="artist-id">@Jerryfo</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="creator-single creator-single-short">
                    <div className="creator-wraper">
                      <div className="creator-inner">
                        <div className="artist">
                          <div className="profile-img pos-rel">
                            <Link href="/creators">
                              <Image
                                width={40}
                                height={40}
                                style={{ width: "100%", height: "auto" }}
                                src={profile9}
                                alt="profile-img"
                              />
                            </Link>
                            <div className="profile-verification verified">
                              <i className="fas fa-check"></i>
                            </div>
                          </div>
                          <div className="creator-name-id">
                            <h4 className="artist-name">
                              <Link href="/creators">Broke Lesner</Link>
                            </h4>
                            <div className="artist-id">@broke</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu2-sidebar-widget mt-35">
                <div className="work-process-single pos-rel">
                  <div className="work-process-content">
                    <div className="process-icon">
                      <Image
                        width={100}
                        height={100}
                        style={{ width: "auto", height: "100%" }}
                        src={listIconTwo}
                        alt="img"
                      />
                    </div>
                    <h4 className="process-title">
                      <Link href="#">Create and sell your NFTs</Link>
                    </h4>
                    <div className="work-process-btn">
                      <Link className="fill-btn" href="/upload">
                        Create Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas-overlay"onClick={() => {setMenuOpen1(!menuOpen1)}}
      ></div>
      <div className="offcanvas-overlay-white"></div>
    </div>
  );
};

export default SidebarMenuSection;
