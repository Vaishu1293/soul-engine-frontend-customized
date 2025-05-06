import { MenuItem, MobileMenuItemType } from "@/interFace/interFace";

export const MenuData:MenuItem[] = [
  {
    id: 1,
    hasDropdown: true,
    active: true,
    title: "Home",
    link: "/",
    submenus: [
      { title: "Home Style 1", link: "/" },
      { title: "Home Style 2", link: "/home-two" },
      { title: "Home Style 3", link: "/home-three" },
    ],
  },
  {
    id: 2,
    hasDropdown: false,
    title: "Explore",
    link: "/explore-arts",
    pluseInco: false,
  },
  {
    id: 3,
    hasDropdown: false,
    title: "Creators",
    link: "/creators",
  },
  {
    id: 4,
    title: "Pages",
    hasDropdown: true,
    megaMenu: true,
    link: "",
    pages: true,
    mega_menus: [
      {
        id: 5,
        title: "Creator",
        link: "/creator-profile",
        hasDropdown: true,
        submenus: [
          { id: 6, title: "Creator Profile", link: "/creator-profile" },
          {id: 7, title: "Creator Personal Info",link: "/profile"},
        ],
      },
      {
        id: 8,
        title: "Art",
        link: "/art-details",
        hasDropdown: true,
        submenus: [
          { id: 9, title: "Art Details", link: "/art-details" },
          { id: 10, title: "Upload Category", link: "/upload-category" },
          { id: 11, title: "Upload", link: "/upload" },
          { id: 12, title: "Live Auction", link: "/live-auction" },
        ],
      },
      {
        id: 12,
        hasDropdown: false,
        title: "FAQ",
        link: "/faq",
      },
      {
        id: 13,
        hasDropdown: false,
        title: "Wallet Connect",
        link: "/wallet-connect",
      },
      {
        id: 14,
        hasDropdown: false,
        title: "Activity",
        link: "/activity",
      },
      {
        id: 15,
        hasDropdown: false,
        title: "Ranking",
        link: "/art-ranking",
      },
      {
        id: 16,
        hasDropdown: false,
        title: "Register",
        link: "/register",
      },
      {
        id: 17,
        hasDropdown: false,
        title: "Login",
        link: "/login",
      },
      {
        id: 18,
        hasDropdown: false,
        title: "Terms",
        link: "/terms",
      },
      {
        id: 19,
        hasDropdown: false,
        title: "404 page",
        link: "/error-404",
      },
      {
        id: 20,
        hasDropdown: false,
        title: "Forum",
        link: "/forum",
      },
      {
        id: 21,
        hasDropdown: false,
        title: "Contact",
        link: "/contact",
      },
    ],
  },
  {
    id: 22,
    hasDropdown: true,
    active: true,
    title: "Dashboard",
    link: "/",
    submenus: [
      { title: "Dashboard", link: "/dashboard" },
      { title: "Profile", link: "/profile" },
      { title: "Live Bids", link: "/live-bids" },
      { title: "My Collection", link: "/my-collection" },
      { title: "My Wallet", link: "/my-wallet" },
      { title: "Settings", link: "/payment-method" }
    ],
  },
];

// mobile menu

export const menuItems: MobileMenuItemType[] = [
  {
    id: 1,
    label: "Home",
    subMenu: true,
    href: "",
    subMenuItems: [
      { label: "Home Style 1", href: "/" },
      { label: "Home Style 2", href: "/home-two" },
      { label: "Home Style 3", href: "/home-three" },
    ],
  },
  { id: 2, label: "Explore", subMenu: false, href: "/explore-arts" },
  {
    id: 3,
    href: "",
    label: "Creator",
    subMenu: true,
    subMenuItems: [
      { label: "Creators", href: "/creators" },
      { label: "Creator Profile", href: "/creator-profile" },
      {
        label: "Creator Personal Info",
        href: "/profile",
      },
    ],
  },
  {
    id: 4,
    href: "",
    label: "Art",
    subMenu: true,
    subMenuItems: [
      { label: "Art Details", href: "/art-details" },
      { label: "Upload Category", href: "/upload-category" },
      { label: "Upload", href: "/upload" },
      { label: "Live Auction ", href: "/live-auction" },
    ],
  },
  {
    id: 5,
    href: "",
    subMenu: true,
    label: "Pages",
    subMenuItems: [
      { label: "FAQ", href: "/faq" },
      { label: "Register", href: "/register" },
      { label: "Login", href: "/login" },
      { label: "Terms", href: "/terms" },
      { label: "Wallet Connect", href: "/wallet-connect" },
      { label: "Activity", href: "/activity" },
      { label: "Ranking", href: "/art-ranking" },
      { label: "404 page", href: "/error-404" },
    ],
  },
  {
    id: 6,
    href: "#",
    subMenu: true,
    label: "Dashboard",
    subMenuItems: [
      { label: "Dashboard", href: "/dashboard" },
      { label: "Profile", href: "/profile" },
      { label: "Live Bids", href: "/live-bids" },
      { label: "My Collection", href: "/my-collection" },
      { label: "My Wallet", href: "/my-wallet" },
      { label: "Settings", href: "/payment-method" }
    ],
  },
  { id: 7, label: "Forum", href: "/forum", subMenu: false },
  { id: 8, label: "Contact", href: "/contact", subMenu: false },
];
