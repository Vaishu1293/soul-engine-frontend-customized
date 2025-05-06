import { StaticImageData } from "next/image";
import React from 'react';

// context api data type
export interface AppContextType {
  sideMenuOpen: boolean;
  toggleSideMenu: () => void;
  scrollDirection: string;
  setScrollDirection: React.Dispatch<React.SetStateAction<string>> | undefined;
  inputValue:string;
  setInputValue:React.Dispatch<React.SetStateAction<string>>;
  setSideMenuOpen:React.Dispatch<React.SetStateAction<boolean>>;
  filterType:string;
  setFilterType:React.Dispatch<React.SetStateAction<string>>;
}
//home-categories type
export interface categoriesType{
  id:number;
  icon:()=> JSX.Element;
  title:string;
  description:string;
}


//counter_data type
export interface counterType{
  id?:number;
  icon?:()=> JSX.Element;
  countNum?: number;
  countPlus?:string;
  description?:string;
}



export interface ProductType {
  id?: number;
  wrapperClass?: string;
  img: StaticImageData;
  tag?: string;
  featureClass?: string;
  bid?: string;
  share?: string;
  volume?: string;
  report?: string;
  profileImage: StaticImageData;
  currentBid?: string;
  activity?: string;
  name?: string;
  count?: string;
  title?: string;
  artistId?: string;
  price: string;
  hours?: string;
  days?: string;
  bids?: string;
  coverImage?: StaticImageData;
  create?: string;
  createNumber?: string;
  follower?: string;
  followerNumber?: string;
  followed?: string;
  followedNumber?: string;
  follow?: string;
  day?:number,
  min?:number
}

export interface IdType{
  id:number;
}

export interface Activity {
  img: StaticImageData;
  divClass: string;
  icon: string;
  name: string;
  octionName: string;
  author: string;
  time: string;
}

export interface ActivityDataType {
  id: number;
  tabId: string;
  ariaLabelledby: string;
  activityWrapper: Activity[];
}
export interface ActivityNavType {
  id:number;
  navId:string;
  target:string;
  button:string;
}

// 
interface Tag {
  tag: string;
}

interface ViewMember {
  img: StaticImageData;
}

interface QuestionAnswer {
  profileImg: StaticImageData;
  artistName: string;
  date: string;
  time: string;
  comment: string;
  like: number;
  likeTitle: string;
}

interface ForumPost {
  showComment: boolean;
  creatorImg: StaticImageData;
  name: string;
  date: string;
  time: string;
  postQuestion: string;
  postDetails: string;
  tags: Tag[];
  like: number;
  likeTitle: string;
  comment: number;
  commentTitle: string;
  shereTitle: string;
  shere: number;
  viewMember: ViewMember[];
  views: number;
  viewTitle: string;
  questionAnswer?: QuestionAnswer[];
}

export interface ForumDataType {
  id: number;
  tabId: string;
  navId: string;
  forumPost: ForumPost[];
}
export interface CategoryNavType {
  id: number;
  navId:string;
  tabId:string;
  title:string;
  itemNumber:string;
  icon:string;
}

export interface MobileMenuItemType {
  id:number;
  label: string;
  subMenu: boolean;
  subMenuItems?: {
    label: string;
    href: string;
  }[];
  href: string;
}

export interface DashboardMenuItemType {
  id:number;
  label: string;
  subMenu: boolean;
  subMenuItems?: {
    label: string;
    href: string;
  }[];
  href: string;
  icon: string;
}
//Bids data
interface BidItem {
  img: StaticImageData;
};

export interface bidsDataType  {
  id: number; 
  profilePic: StaticImageData; 
  name: string; 
  artistid: string;
  date: string; 
  time: string; 
  bidsItem: BidItem[]; 
  status: string; 
  price: string; 
  oldPrice: string;
};

// Define the interface for a submenu item
interface SubMenuItem {
  id?: number; 
  title: string; 
  link: string; 
}

// Define the interface for a mega menu item
interface MegaMenuItem {
  id: number;
  title: string;
  link: string; 
  hasDropdown?: boolean; 
  submenus?: SubMenuItem[]; 
}

// Define the interface for the main menu item
export interface MenuItem {
  id: number;
  hasDropdown: boolean; 
  title: string; 
  link: string; 
  active?: boolean; 
  pluseInco?: boolean;
  submenus?: SubMenuItem[]; 
  megaMenu?: boolean; 
  mega_menus?: MegaMenuItem[];
  pages?: boolean; 
}
// Define the interface for the creator profile
export interface CreatorProfile {
  id: number;
  coverImage: StaticImageData; 
  profileImage: StaticImageData; 
  name: string;
  artistId: string;
  create: string;
  createNumber: string | number;
  follower: string;
  followerNumber: string | number;
  followed: string;
  followedNumber: string | number;
  follow: string;
}
// Define the interface for the accordion item
export interface AccordionItem {
  accordingId: string;
  collpseId: string;
  faqTitle: string;
  faqDetails: string;
}
// Define the interface for the accordion data item
export interface TabAccordionData {
  id: number;
  tabId: string;
  AccordionId: string;
  accordion: AccordionItem[];
}
// Define the interface for the Top Creator Type
export interface TopCreatorType{
  TopCreatorTitle: string;
  TopCreatorImage: StaticImageData,
  TopCreatorCat: string;
  TopCreatorNumber: string;
  TopCreatorBtn: string;
}
// Define the interface for the Top Seller Type
export interface TopSellerType{
  TopSellerTitle: string;
  TopSellerImage: StaticImageData,
  TopSellerCat: string;
  TopSellerNumber: string;
  TopSellerBtn: string;
}
// Define the interface for the work process Type
export interface WorkProcessDataType{
  WorkProcessStep:string;
  WorkProcessImage:StaticImageData;
  WorkProcessTitle:string;
  WorkProcessDesc:string;
  WorkProcessLink:string;
}
// Define the interface for the wallet connect data Type
export interface WalletConnectData {
  walletTitle: string;
  walletImage: StaticImageData;
  walletDesc: string;
  walletBtn: string;
}

//Define the interface for the dashboard payment method
export interface PaymentMethod {
    id: number;
    type: string;
    cardNumber: string | null;
    expiry: string | null;
    image: StaticImageData;
}

export interface PaymentMethodEditModalProps {
    isOpen: boolean;
    method: PaymentMethod | null;
    onClose: () => void;
    onSave: (updatedMethod: PaymentMethod) => void;
}
//Define the interface for the popular collection
export interface PopulartCollectionType{
  id:number,
  popularTitle:string;
  wrapperClass:string;
  Imglink:string;
  titleLink:string;
  popularImage1:StaticImageData;
  popularImage2:StaticImageData;
  popularImage3:StaticImageData;
  popularBtnNumber:number;
  popularBtn:string;
  popularShare:string;
}
//Define the interface for the explore art data
export interface exploreArtDataType {
  id: number;
  artImage: StaticImageData; 
  profileImage: StaticImageData; 
  placeBid: string;
  name: string;
  artistId: string;
  astronut: string;
  currentBid: string;
  price: string;
  type: string;
  day: number;
  min: number;
}