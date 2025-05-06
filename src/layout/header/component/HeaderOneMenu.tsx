import { MenuData } from "@/data/menu-data";
import Link from "next/link";
import React from "react";

const HeaderOneMenu = () => {
  return (
    <>
      <ul>
        {MenuData.map((menuItem) => (
          <li
            key={menuItem.id}
            className={menuItem.hasDropdown ? "menu-item-has-children" : ""}
          >
            <Link href={menuItem.link}>{menuItem.title}</Link>
            {menuItem.submenus && (
              <ul className="sub-menu">
                {menuItem.submenus.map((submenuItem) => (
                  <li key={submenuItem.title}>
                    <Link href={submenuItem.link}>{submenuItem.title}</Link>
                  </li>
                ))}
              </ul>
            )}
            {menuItem.megaMenu === true && menuItem.mega_menus && menuItem.mega_menus.length > 0 && (
              <ul className="sub-menu last-children">
                {menuItem.mega_menus.map((submenuItem) => (
                  <li
                    key={submenuItem.title}
                    className={submenuItem.hasDropdown ? "menu-item-has-children" : ""}
                  >
                    <Link href={submenuItem.link}>{submenuItem.title}</Link>
                    {submenuItem.submenus && (
                      <ul className="sub-menu">
                        {submenuItem.submenus.map((submenu) => (
                          <li key={submenu.title}>
                            <Link href={submenu.link}>{submenu.title}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}

          </li>
        ))}
      </ul>
    </>
  );
};

export default HeaderOneMenu;
