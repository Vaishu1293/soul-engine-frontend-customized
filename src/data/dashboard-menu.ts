import { DashboardMenuItemType } from "@/interFace/interFace";

export const DashboardMenu: DashboardMenuItemType[] = [
  {
    id: 1,
    subMenu: false,
    label: "Dashboard",
    href: "/dashboard",
    icon: "flaticon-home",
  },
  {
    id: 2,
    subMenu: false,
    label: "Profile Info",
    href: "/profile",
    icon: "flaticon-account",
  },
  {
    id: 3,
    subMenu: false,
    label: "Live Bids",
    href: "/live-bids",
    icon: "flaticon-money-bag",
  },
  {
    id: 4,
    subMenu: false,
    label: "My Wallet",
    href: "/my-wallet",
    icon: "flaticon-wallet-1",
  },
  {
    id: 5,
    subMenu: false,
    label: "My Collections",
    href: "/my-collection",
    icon: "flaticon-add-2",
  },
  {
    id: 6,
    label: "Settings",
    subMenu: true,
    href: "",
    icon: "flaticon-notification",
    subMenuItems: [
      { label: "Payment Method", href: "/payment-method" },
      { label: "Notification", href: "/notification" },
      { label: "Appearence", href: "/appearence" },
      { label: "site Setting", href: "/site-setting" },
    ],
  },
  {
    id: 7,
    subMenu: false,
    label: "Log Out",
    href: "/",
    icon: "flaticon-logout",
  }
];
