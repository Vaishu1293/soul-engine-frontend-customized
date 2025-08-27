import { DashboardMenuItemType } from "@/interFace/interFace";

export const DashboardMenu: DashboardMenuItemType[] = [
  {
    id: 1,
    subMenu: false,
    label: "Dashboard",
    href: "/dashboard",
    icon: "flaticon-home", // ✓ homepage/dashboard
  },
  {
    id: 2,
    subMenu: false,
    label: "Daily Reflection Readings",
    href: "/readings?type=daily-readings",
    icon: "flaticon-calendar", // ✓ daily schedule
  },
  {
    id: 3,
    subMenu: false,
    label: "Timeline Readings",
    href: "/readings?type=timeline-readings",
    icon: "flaticon-newspaper", // ✓ story/journal/timeline
  },
  {
    id: 4,
    subMenu: false,
    label: "Tree of Life (Quarterly)",
    href: "/readings?type=tree-of-life",
    icon: "flaticon-cloud-computing", // ✱ symbolic abstraction
  },
  {
    id: 5,
    subMenu: false,
    label: "Cletic Cross (Monthly)",
    href: "/readings?type=cletic-cross",
    icon: "flaticon-add-2", // ✓ cross-like icon
  },
  {
    id: 6,
    subMenu: false,
    label: "Revelation (Weekly)",
    href: "/readings?type=revelation",
    icon: "flaticon-information", // ✓ insight/message
  },
  {
    id: 7,
    subMenu: false,
    label: "Ask Queries",
    href: "/ask-queries",
    icon: "flaticon-chat", // ✓ ask/chat
  },
  {
    id: 8,
    subMenu: false,
    label: "History",
    href: "/history",
    icon: "flaticon-clock-circular-outline", // ✓ time/history
  },
  {
    id: 9,
    subMenu: false,
    label: "Profile",
    href: "/profile",
    icon: "flaticon-account", // ✓ user/profile
  },
  {
    id: 10,
    subMenu: false,
    label: "Settings",
    href: "/settings",
    icon: "flaticon-settings", // ✓ gear/settings
  },
  {
    id: 11,
    subMenu: false,
    label: "Log Out",
    href: "/",
    icon: "flaticon-logout", // ✓ logout
  },
  // {
  //   id: 6,
  //   label: "Settings",
  //   subMenu: true,
  //   href: "",
  //   icon: "flaticon-notification",
  //   subMenuItems: [
  //     { label: "Payment Method", href: "/payment-method" },
  //     { label: "Notification", href: "/notification" },
  //     { label: "Appearence", href: "/appearence" },
  //     { label: "site Setting", href: "/site-setting" },
  //   ],
  // },
];
