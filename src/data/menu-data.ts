import { MenuItem, MobileMenuItemType } from "@/interFace/interFace";

export const MenuData: MenuItem[] = [
  {
    id: 1,
    hasDropdown: false,
    active: true,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    hasDropdown: false,
    title: "Explore Readings",
    link: "/explore-reading",
    pluseInco: false,
  },
  {
    id: 3,
    hasDropdown: false,
    title: "Start Reading",
    link: "/start-reading",
  }
];

// mobile menu

export const menuItems: MobileMenuItemType[] = [
  {
    id: 1,
    label: "Home",
    subMenu: true,
    href: ""
  },
  {
    id: 2,
    label: "Explore Readings",
    subMenu: false,
    href: "/explore-reading"
  },
  {
    id: 3,
    label: "Start Readings",
    subMenu: true,
    href: "/start-reading"
  },
  { 
    id: 7, 
    label: "Forum", 
    href: "/forum", 
    subMenu: false 
  },
  { 
    id: 8, 
    label: "Contact", 
    href: "/contact", 
    subMenu: false 
  },
];
