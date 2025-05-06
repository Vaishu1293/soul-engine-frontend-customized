import React, { useState } from 'react';
interface propsType {
    menuOpen2: boolean;
    setMenuOpen2: React.Dispatch<React.SetStateAction<boolean>>;
  }


const SidebarMenuForm = ({ setMenuOpen2, menuOpen2 }:propsType) => {
    return (
        <>
            <div className="fix">
                <div className={menuOpen2 ? "sidebar-category-filter-wrapper open" : "sidebar-category-filter-wrapper sidebar-menu-form-wrap"}>
                    <form action="#">
                        <div className="sidebar-category-filter sidebar-menu-form">
                            <h4>Change Password</h4>
                            <div className="single-input-unit">
                                <input type="password" placeholder="Current Password" />
                            </div>
                            <div className="single-input-unit">
                                <input type="password" placeholder="New Password" />
                            </div>
                            <div className="single-input-unit">
                                <input type="password" placeholder="Confirm Password" />
                            </div>
                            <div className='text-center'>
                                <button className="fill-btn">Update Password</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="offcanvas-overlay" onClick={() => { setMenuOpen2(!menuOpen2) }}></div>
        </>
    );
};

export default SidebarMenuForm;