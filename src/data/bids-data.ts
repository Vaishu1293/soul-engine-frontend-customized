import profile1 from "../../public/assets/img/profile/profile7.jpg"
import profile4 from "../../public/assets/img/profile/profile11.jpg"
import profile6 from "../../public/assets/img/profile/profile6.jpg"
import profile7 from "../../public/assets/img/profile/profile42.jpg"
import profile8 from "../../public/assets/img/profile/profile8.jpg"
import profile9 from "../../public/assets/img/profile/profile9.jpg"
import art25 from "../../public/assets/img/art/HaloweenScarecrow.jpg";
import art12 from "../../public/assets/img/art/fgbndfjibdf.jpg";
import art8 from "../../public/assets/img/art/DancingBread.jpg";
import art2 from "../../public/assets/img/art/art76.jpg";
import art3 from "../../public/assets/img/art/art3.jpg";
import art5 from "../../public/assets/img/art/art63.jpg";
import art9 from "../../public/assets/img/art/AbstarctMotion.jpg";
import art18 from "../../public/assets/img/art/art67.jpg";
import art16 from "../../public/assets/img/art/artImageSix.jpg";
import art14 from "../../public/assets/img/art/art30.jpg";
import art17 from "../../public/assets/img/art/art17.jpg";
import art15 from "../../public/assets/img/art/CartoonBird.jpg";
import art4 from "../../public/assets/img/art/art70.jpg";
import art26 from "../../public/assets/img/art/art73.jpg";
import art27 from "../../public/assets/img/art/art44.jpg";
import { bidsDataType } from "@/interFace/interFace";

export const bidsData:bidsDataType[] = [
  {
    id: 1,
    profilePic: profile1,
    name: "Jenny Wilson",
    artistid: "@jenny",
    date: "06/20/2021",
    time: "9:58am",
    bidsItem: [
      {
        img: art25,
      },
      {
        img: art12,
      },
    ],
    status: "Accepted",
    price: "3.58 ETH",
    oldPrice: "352.342 USD",
  },
  {
    id: 2,
    profilePic: profile8,
    name: "Darrell Steward",
    artistid: "@darrell",
    date: "06/20/2021",
    time: "9:58am",
    bidsItem: [
      {
        img: art8,
      },
      {
        img: art3,
      },
      {
        img: art5,
      },
      {
        img: art9,
      },
    ],
    status: "Accepted",
    price: "3.58 ETH",
    oldPrice: "352.342 USD",
  },
  {
    id: 3,
    profilePic: profile4,
    name: "Floyd Miles",
    artistid: "@floyd",
    date: "06/20/2021",
    time: "9:58am",
    bidsItem: [
      {
        img: art2,
      },
      {
        img: art18,
      },
      {
        img: art16,
      },
      
    ],
    status: "Pending",
    price: "3.58 ETH",
    oldPrice: "352.342 USD",
  },
  {
    id: 4,
    profilePic: profile6,
    name: "Marvin McKinney",
    artistid: "@marvin",
    date: "06/20/2021",
    time: "9:58am",
    bidsItem: [
      {
        img: art26,
      },
     
    ],
    status: "Accepted",
    price: "3.58 ETH",
    oldPrice: "352.342 USD",
  },
 
  {
    id: 5,
    profilePic: profile7,
    name: "Robert Fox",
    artistid: "@robert",
    date: "06/20/2021",
    time: "9:58am",
    bidsItem: [
      {
        img: art14,
      },
      {
        img: art17,
      },
    
    ],
    status: "Accepted",
    price: "3.58 ETH",
    oldPrice: "352.342 USD",
  },
  {
    id: 6,
    profilePic: profile9,
    name: "Guy Hawkins",
    artistid: "@hawkins",
    date: "06/20/2021",
    time: "9:58am",
    bidsItem: [
      {
        img: art27,
      },
      {
        img: art15,
      },
      {
        img: art4,
      },
    
    ],
    status: "Pending",
    price: "3.58 ETH",
    oldPrice: "352.342 USD",
  },
];
