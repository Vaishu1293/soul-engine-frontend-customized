
import artImgSeven from "../../public/assets/img/art/artImgSeven.jpg"
import artImgEight from "../../public/assets/img/art/gif-img5.gif"
import art7 from "../../public/assets/img/art/art7.jpg"
import art10 from "../../public/assets/img/art/art10.jpg"
import art6 from "../../public/assets/img/art/art6.jpg"
import art51 from "../../public/assets/img/art/art51.jpg"
import art18 from "../../public/assets/img/art/art18.jpg"
import art24 from "../../public/assets/img/art/art24.jpg"
import art21 from "../../public/assets/img/art/art21.jpg"
import art22 from "../../public/assets/img/art/art22.jpg"
import art1 from "../../public/assets/img/art/art1.jpg"
import art2 from "../../public/assets/img/art/art2.jpg"
import art61 from "../../public/assets/img/art/art61.jpg"
import art62 from "../../public/assets/img/art/art62.jpg"
import profileFour from "../../public/assets/img/profile/profile4.jpg"
import profileTwo from "../../public/assets/img/profile/profile8.jpg"
import profileThree from "../../public/assets/img/profile/profile3.jpg"
import profileFive from "../../public/assets/img/profile/profile11.jpg"
import profileSix from "../../public/assets/img/profile/profile6.jpg"
import profileSeven from "../../public/assets/img/profile/profile7.jpg"
import profileEight from "../../public/assets/img/profile/profile8.jpg"
import profileNine from "../../public/assets/img/profile/profile9.jpg"
import profileTen from "../../public/assets/img/profile/profile4.jpg"
import profile11 from "../../public/assets/img/profile/profile11.jpg"
import profile12 from "../../public/assets/img/profile/profile24.jpg"
import profile13 from "../../public/assets/img/profile/profile25.jpg"
import profile15 from "../../public/assets/img/profile/profile18.jpg"
import profile14 from "../../public/assets/img/profile/profile21.jpg"
import profile16 from "../../public/assets/img/profile/profile22.jpg"
import profile17 from "../../public/assets/img/profile/profile17.jpg"
import profile18 from "../../public/assets/img/profile/profile18.jpg"
import profile19 from "../../public/assets/img/profile/profile19.jpg"
import profile20 from "../../public/assets/img/profile/profile20.jpg"
import profile21 from "../../public/assets/img/profile/profile21.jpg"
import profile22 from "../../public/assets/img/profile/profile22.jpg"
import profile23 from "../../public/assets/img/profile/profile23.jpg"
import profile24 from "../../public/assets/img/profile/profile24.jpg"
import profile25 from "../../public/assets/img/profile/profile25.jpg"
import { ProductType } from "@/interFace/interFace"

// home artwork section image
import art63 from "../../public/assets/img/art/art63.jpg";
import art64 from "../../public/assets/img/art/art64.jpg";
import art65 from "../../public/assets/img/art/art65.jpg";
import art66 from "../../public/assets/img/art/gif-img1.gif";
import art67 from "../../public/assets/img/art/art67.jpg";
import art68 from "../../public/assets/img/art/art68.jpg";
//home two product img
import art69 from "../../public/assets/img/art/art13.jpg"
import art70  from "../../public/assets/img/art/art30.jpg"
import art71  from "../../public/assets/img/art/gif-img2.gif"
import art72  from "../../public/assets/img/art/art41.jpg"
import art73  from "../../public/assets/img/art/art42.jpg"
import art74  from "../../public/assets/img/art/git-img4.gif"
import art75  from "../../public/assets/img/art/art44.jpg"
import art76  from "../../public/assets/img/art/art45.jpg"
//home there img
import art77 from "../../public/assets/img/art/art70.jpg"
import art78  from "../../public/assets/img/art/art71.jpg"
import art79  from "../../public/assets/img/art/gif-img3.gif"  
import art80  from "../../public/assets/img/art/art73.jpg"
import art81  from "../../public/assets/img/art/art74.jpg"
import art82  from "../../public/assets/img/art/art75.jpg"
import art83  from "../../public/assets/img/art/art76.jpg"
import art84  from "../../public/assets/img/art/art77.jpg"
import AbstarctMotion  from "../../public/assets/img/art/AbstarctMotion.jpg"
import HaloweenScarecrow  from "../../public/assets/img/art/HaloweenScarecrow.jpg"
import CartoonBird  from "../../public/assets/img/art/CartoonBird.jpg"
import DancingBread  from "../../public/assets/img/art/DancingBread.jpg"

export const productData:ProductType[] = [
    // productData 1 - 
    {
        id: 1,
        wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
        img: art63,
        tag: 'Featured',
        featureClass: 'd-none',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profile11,
        currentBid: 'Current Bid',
        activity: 'Activity',
        name: 'Walter Russell',
        count: '2.5k+',
        title: 'Rainbow Vase',
        artistId: '@russell',
        price: '23.46 ETH',
        day:112,
        min:40
    },
    {
        id: 2,
        wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
        img: art64,
        tag: 'Featured',
        featureClass: 'd-none',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profileNine,
        artistId: '@john.874',
        title: 'Cute Girl',
        currentBid: 'Current Bid',
        price: '53.46 ETH',
        activity: 'Activity',
        name: 'John Schreffler',
        day:90,
        min:20
    },
    {
        id: 3,
        wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
        img: art65,
        tag: 'Featured',
        featureClass: 'd-none',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profileSix,
        artistId: '@jobanico',
        title: 'Colorful Bird',
        currentBid: 'Current Bid',
        price: '43.46 ETH',
        activity: 'Activity',
        name: 'Jobanico Mina',
        day:80,
        min:50
    },
    {
        id: 4,
        wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
        img: art66,
        tag: 'Featured',
        featureClass: 'd-none',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profileEight,
        artistId: '@mary.hano',
        title: 'Orange Ghost',
        currentBid: 'Current Bid',
        price: '23.66 ETH',
        activity: 'Activity',
        name: 'Mary Callahan',
        day:60,
        min:20
    },
    {
        id: 5,
        wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
        img: art67,
        tag: 'Featured',
        featureClass: 'd-none',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profile17,
        artistId: '@chess.62',
        title: 'Neon Cat',
        currentBid: 'Current Bid',
        price: '23.62 ETH',
        activity: 'Activity',
        name: 'Kenny Chess',
        day:75,
        min:45
    },
    {
        id: 6,
        wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
        img: art7,
        tag: 'Featured',
        featureClass: 'd-none',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profileSeven,
        artistId: '@stephens',
        title: 'Steampunk Robot',
        currentBid: 'Current Bid',
        price: '43.46 ETH',
        activity: 'Activity',
        name: 'Patricia Stephens',
        day:70,
        min:30
    },
    {
        id: 7,
        wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
        img: art10,
        tag: 'Featured',
        featureClass: 'd-none',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profileTen,
        artistId: '@johnson',
        title: 'Energy Cube',
        currentBid: 'Current Bid',
        price: '23.46 ETH',
        activity: 'Activity',
        name: 'Murray Johnson',
        day:50,
        min:25
    },
    {
        id: 8,
        wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
        img: art6,
        tag: 'Featured',
        featureClass: 'd-none',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profileThree,
        artistId: '@jerrifo',
        title: 'Cartoon Boy',
        currentBid: 'Current Bid',
        price: '23.46 ETH',
        activity: 'Activity',
        name: 'Jeffrey Hayes',
        day:62,
        min:39
    },
    //art details data
    {
        id: 9,
        wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
        img: art77,
        tag: 'Featured',
        featureClass: 'tag-featured',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profile11,
        artistId: '@russell',
        title: 'Motion Blend',
        currentBid: 'Current Bid',
        price: '76.46 ETH',
        activity: 'Activity',
        name: 'russell Harden',
    },
    {
        id: 10,
        wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
        img: art78,
        tag: 'Featured',
        featureClass: 'd-none',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profileNine,
        artistId: '@john',
        title: 'Skater Girl',
        currentBid: 'Current Bid',
        price: '22.46 ETH',
        activity: 'Activity',
        name: 'Murray Johnson',
    },
    {
        id: 11,
        wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
        img: art79,
        tag: 'Featured',
        featureClass: 'd-none',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profileSix,
        artistId: '@mary.hono',
        title: 'Walking Girl',
        currentBid: 'Current Bid',
        price: '79.46 ETH',
        activity: 'Activity',
        name: 'Mary',
    },
    {
        id: 12,
        wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
        img: art80,
        tag: 'Featured',
        featureClass: 'd-none',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profileTwo,
        artistId: '@jonanico',
        title: 'Tech Panda',
        currentBid: 'Current Bid',
        price: '83.46 ETH',
        activity: 'Activity',
        name: 'jonanico Tannenbaum',
    },
    //end
    {
        id: 13,
        wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
        img: art73,
        tag: 'Featured',
        featureClass: 'd-none',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profile17,
        artistId: '@chess.62',
        title: 'Dreamy Cat',
        currentBid: 'Current Bid',
        price: '26.62 ETH',
        activity: 'Activity',
        name: 'Kenny Chess',
        day:75,
        min:45
    },
    {
        id: 14,
        wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
        img: art74,
        tag: 'Featured',
        featureClass: 'd-none',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profileSeven,
        artistId: '@stephens',
        title: 'Balloon Character',
        currentBid: 'Current Bid',
        price: '43.46 ETH',
        activity: 'Activity',
        name: 'Patricia Stephens',
        day:70,
        min:30
    },
    {
        id: 15,
        wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
        img: art75,
        tag: 'Featured',
        featureClass: 'd-none',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profileTen,
        artistId: '@johnson',
        title: 'Flower Child',
        currentBid: 'Current Bid',
        price: '23.46 ETH',
        activity: 'Activity',
        name: 'Murray Johnson',
        day:50,
        min:25
    },
    {
        id: 16,
        wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
        img: art76,
        tag: 'Featured',
        featureClass: 'd-none',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profileThree,
        artistId: '@jerrifo',
        title: 'Futuristic Orb',
        currentBid: 'Current Bid',
        price: '23.46 ETH',
        activity: 'Activity',
        name: 'Jeffrey Hayes',
        day:62,
        min:39
    },
    {
        id: 17,
        wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
        img: art69,
        tag: 'Featured',
        featureClass: 'd-none',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profile11,
        currentBid: 'Current Bid',
        activity: 'Activity',
        name: 'Walter Russell',
        count: '2.5k+',
        title: 'Playful Reindeer',
        artistId: '@russell',
        price: '22.46 ETH',
        day:212,
        min:50
    },
    {
        id: 18,
        wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
        img: art70,
        tag: 'Featured',
        featureClass: 'd-none',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profileNine,
        artistId: '@john.874',
        title: 'Ape Portrait',
        currentBid: 'Current Bid',
        price: '53.46 ETH',
        activity: 'Activity',
        name: 'John Schreffler',
        day:90,
        min:20
    },
    //end
    {
        id: 19,
        wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
        img: art71,
        tag: 'Featured',
        featureClass: 'd-none',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profileSix,
        artistId: '@jobanico',
        title: 'Hotdog Buddy',
        currentBid: 'Current Bid',
        price: '43.46 ETH',
        activity: 'Activity',
        name: 'Jobanico Mina',
        day:80,
        min:50
    },
    {
        id: 20,
        wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
        img: art72,
        tag: 'Featured',
        featureClass: 'd-none',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profileEight,
        artistId: '@mary.hano',
        title: 'Eggling Chick',
        currentBid: 'Current Bid',
        price: '26.66 ETH',
        activity: 'Activity',
        name: 'Mary Callahan',
        day:60,
        min:20
    },
    {
        id: 21,
        wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
        img: art81,
        tag: 'Featured',
        featureClass: 'd-none',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profile17,
        artistId: '@chess',
        title: 'Happy Pup',
        currentBid: 'Current Bid',
        price: '23.84 ETH',
        activity: 'Activity',
        name: 'Chess',
        
    },
    {
        id: 22,
        wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
        img: art82,
        tag: 'Featured',
        featureClass: 'd-none',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profileSeven,
        artistId: '@machman',
        title: 'Jet Flyer',
        currentBid: 'Current Bid',
        price: '83.46 ETH',
        activity: 'Activity',
        name: 'Machman',
    },
    {
        id: 23,
        wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
        img: art83,
        tag: 'Featured',
        featureClass: 'tag-featured',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profileTen,
        artistId: '@stephens',
        title: 'Cool Shades',
        currentBid: 'Current Bid',
        price: '33.46 ETH',
        activity: 'Activity',
        name: 'Walter stephens',
    },
    {
        id: 24,
        wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
        img: art84,
        tag: 'Featured',
        featureClass: 'd-none',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profileThree,
        artistId: '@jerrifo',
        title: 'Burger Buddy',
        currentBid: 'Current Bid',
        price: '21.46 ETH',
        activity: 'Activity',
        name: 'Jerrifo',
    },

    // rankData 25 - 34
    {
        id: 25,
        img: art83,
        title: 'Local',
        volume: '10,4954',
        hours: '+100%',
        days: '-98.45%',
        bids: '98',
        price: '2.67 ETH',
        name: 'Stive Machman',
        count: '38.5k',
        profileImage: profileSeven,
    },
    {
        id: 26,
        img: HaloweenScarecrow,
        title: 'Local',
        volume: '10,4954',
        hours: '+100%',
        days: '-98.45%',
        bids: '97',
        price: '2.55 ETH',
        name: 'Jobanico Mina',
        count: '36.5k',
        profileImage: profileFour,
    },
    {
        id: 27,
        img: AbstarctMotion,
        title: 'Local',
        volume: '10,4954',
        hours: '+100%',
        days: '-98.45%',
        bids: '96',
        price: '3.22 ETH',
        name: 'Kallaban Joy',
        count: '32.5k',
        profileImage: profileFive,
    },
    {
        id: 28,
        img: DancingBread,
        title: 'Local',
        volume: '10,4954',
        hours: '+100%',
        days: '-98.45%',
        bids: '95',
        price: '2.30 ETH',
        name: 'John Schreffler',
        count: '31.5k',
        profileImage: profileSix,
    },
    {
        id: 29,
        img: art72,
        title: 'Local',
        volume: '10,4954',
        hours: '+100%',
        days: '-98.45%',
        bids: '94',
        price: '3.43 ETH',
        name: 'Stive Long',
        count: '30.5k',
        profileImage: profileSeven,
    },
    {
        id: 30,
        img: art75,
        title: 'Local',
        volume: '10,4954',
        hours: '+100%',
        days: '-98.45%',
        bids: '93',
        price: '2.31 ETH',
        name: 'Kenny Chess',
        count: '29.5k',
        profileImage: profileEight,
    },
    {
        id: 31,
        img: art84,
        title: 'Local',
        volume: '10,4954',
        hours: '+100%',
        days: '-98.45%',
        bids: '92',
        price: '2.78 ETH',
        name: 'Margaret Krom',
        count: '38.5k',
        profileImage: profile13,
    },
    {
        id: 32,
        img: art65,
        title: 'Local',
        volume: '10,4954',
        hours: '+100%',
        days: '-98.45%',
        bids: '91',
        price: '2.65 ETH',
        name: 'Murray Johnson',
        count: '40.5k',
        profileImage: profile14,
    },
    {
        id: 33,
        img: art1,
        title: 'Local',
        volume: '10,4954',
        hours: '+100%',
        days: '-98.45%',
        bids: '90',
        price: '2.83 ETH',
        name: 'Carol G. Johnson',
        count: '34.5k',
        profileImage: profile15,
    },
    {
        id: 34,
        img: art77,
        title: 'Local',
        volume: '10,4954',
        hours: '+100%',
        days: '-98.45%',
        bids: '93',
        price: '3.43 ETH',
        name: 'Wesley Sickler',
        count: '32.5k',
        profileImage: profile16,
    },

    // creatorProfileData 35 - 45
    {
        id: 35,
        wrapperClass: 'col-xl-4 col-lg-4 col-md-6 col-sm-6',
        img: art69,
        tag: 'Featured',
        featureClass: 'd-none',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profile11,
        currentBid: 'Current Bid',
        activity: 'Activity',
        name: 'Walter Russell',
        count: '2.5k+',
        title: 'Playful Reindeer',
        artistId: '@russell',
        price: '22.46 ETH',
        day:212,
        min:50
    },
    {
        id: 36,
        wrapperClass: 'col-xl-4 col-lg-4 col-md-6 col-sm-6',
        img: art70,
        tag: 'Featured',
        featureClass: 'd-none',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profileNine,
        artistId: '@john.874',
        title: 'Ape Portrait',
        currentBid: 'Current Bid',
        price: '53.46 ETH',
        activity: 'Activity',
        name: 'John Schreffler',
        day:90,
        min:20
    },
    {
        id: 37,
        wrapperClass: 'col-xl-4 col-lg-4 col-md-6 col-sm-6',
        img: art71,
        tag: 'Featured',
        featureClass: 'd-none',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profileSix,
        artistId: '@jobanico',
        title: 'Hotdog Buddy',
        currentBid: 'Current Bid',
        price: '43.46 ETH',
        activity: 'Activity',
        name: 'Jobanico Mina',
        day:80,
        min:50
    },
    {
        id: 38,
        wrapperClass: 'col-xl-4 col-lg-4 col-md-6 col-sm-6',
        img: art72,
        tag: 'Featured',
        featureClass: 'd-none',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profileEight,
        artistId: '@mary.hano',
        title: 'Eggling Chick',
        currentBid: 'Current Bid',
        price: '26.66 ETH',
        activity: 'Activity',
        name: 'Mary Callahan',
        day:60,
        min:20
    },
    {
        id: 39,
        wrapperClass: 'col-xl-4 col-lg-4 col-md-6 col-sm-6',
        img: art73,
        tag: 'Featured',
        featureClass: 'd-none',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profile17,
        artistId: '@chess.62',
        title: 'Dreamy Cat',
        currentBid: 'Current Bid',
        price: '26.62 ETH',
        activity: 'Activity',
        name: 'Kenny Chess',
        day:75,
        min:45
    },
    {
        id: 41,
        wrapperClass: 'col-xl-4 col-lg-4 col-md-6 col-sm-6',
        img: art74,
        tag: 'Featured',
        featureClass: 'd-none',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profileSeven,
        artistId: '@stephens',
        title: 'Balloon Character',
        currentBid: 'Current Bid',
        price: '43.46 ETH',
        activity: 'Activity',
        name: 'Patricia Stephens',
        day:70,
        min:30
    },
    //end
    {
        id: 42,
        wrapperClass: 'col-xl-4 col-lg-4 col-md-6 col-sm-6',
        img: art63,
        tag: 'Featured',
        featureClass: 'd-none',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profile11,
        currentBid: 'Current Bid',
        activity: 'Activity',
        name: 'Walter Russell',
        count: '2.5k+',
        title: 'Rainbow Vase',
        artistId: '@russell',
        price: '23.46 ETH',
        day:112,
        min:40
    },
    {
        id: 43,
        wrapperClass: 'col-xl-4 col-lg-4 col-md-6 col-sm-6',
        img: art64,
        tag: 'Featured',
        featureClass: 'd-none',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profileNine,
        artistId: '@john.874',
        title: 'Cute Girl',
        currentBid: 'Current Bid',
        price: '53.46 ETH',
        activity: 'Activity',
        name: 'John Schreffler',
        day:90,
        min:20
    },
    {
        id: 44,
        wrapperClass: 'col-xl-4 col-lg-4 col-md-6 col-sm-6',
        img: art65,
        tag: 'Featured',
        featureClass: 'd-none',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profileSix,
        artistId: '@jobanico',
        title: 'Colorful Bird',
        currentBid: 'Current Bid',
        price: '43.46 ETH',
        activity: 'Activity',
        name: 'Jobanico Mina',
        day:80,
        min:50
    },
    {
        id: 45,
        wrapperClass: 'col-xl-4 col-lg-4 col-md-6 col-sm-6',
        img: art66,
        tag: 'Featured',
        featureClass: 'd-none',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profileEight,
        artistId: '@mary.hano',
        title: 'Orange Ghost',
        currentBid: 'Current Bid',
        price: '23.66 ETH',
        activity: 'Activity',
        name: 'Mary Callahan',
        day:60,
        min:20
    },
    {
        id: 46,
        wrapperClass: 'col-xl-4 col-lg-4 col-md-6 col-sm-6',
        img: art67,
        tag: 'Featured',
        featureClass: 'd-none',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profile17,
        artistId: '@chess.62',
        title: 'Neon Cat',
        currentBid: 'Current Bid',
        price: '23.62 ETH',
        activity: 'Activity',
        name: 'Kenny Chess',
        day:75,
        min:45
    },
    // octionsliderData 46 - 48
    {
        id: 46,
        wrapperClass: 'col-xl-12',
        img: art51,
        tag: 'Featured',
        featureClass: 'tag-featured',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profileSix,
        artistId: '@jerrifo',
        title: 'Startup Concept',
        currentBid: 'Current Bid',
        price: '51.46 ETH',
        activity: 'Activity',
        name: 'Jeffrey Hayes',
    },
    {
        id: 47,
        wrapperClass: 'col-xl-12',
        img: art18,
        tag: 'Featured',
        featureClass: 'tag-featured',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profileSeven,
        artistId: '@stephens',
        title: 'Social Profile Icon',
        currentBid: 'Current Bid',
        price: '67.46 ETH',
        activity: 'Activity',
        name: 'Patricia Stephens',
    },
    {
        id: 48,
        wrapperClass: 'col-xl-12',
        img: art24,
        tag: 'Featured',
        featureClass: 'tag-featured',
        count: '2.5k+',
        bid: 'Place Bid',
        share: 'Share',
        report: 'Report',
        profileImage: profileEight,
        artistId: '@johnson',
        title: 'Easter Santa Clause',
        currentBid: 'Current Bid',
        price: '46.46 ETH',
        activity: 'Activity',
        name: 'Carol G. Johnson',
    },

// liveBids 49 - 53

{
    id: 49,
    wrapperClass: 'col-xl-12',
    img: art2,
    tag: 'Featured',
    featureClass: 'tag-featured',
    count: '2.5k+',
    bid: 'Place Bid',
    share: 'Share',
    report: 'Report',
    profileImage: profile12,
    artistId: '@murray',
    title: 'Triangle Artwork',
    currentBid: 'Current Bid',
    price: '23.46 ETH',
    activity: 'Activity',
    name: 'Murray Johnson',
},
{
    id: 50,
    wrapperClass: 'col-xl-12',
    img: art62,
    tag: 'Featured',
    featureClass: 'd-none',
    count: '2.5k+',
    bid: 'Place Bid',
    share: 'Share',
    report: 'Report',
    profileImage: profile15,
    artistId: '@yolanda',
    title: 'Thoughtful Emoji',
    currentBid: 'Current Bid',
    price: '94.46 ETH',
    activity: 'Activity',
    name: 'Yolanda Tannenbaum',
},
{
    id: 51,
    wrapperClass: 'col-xl-12',
    img: art61,
    tag: 'Featured',
    featureClass: 'd-none',
    count: '2.5k+',
    bid: 'Place Bid',
    share: 'Share',
    report: 'Report',
    profileImage: profile13,
    artistId: '@sickler',
    title: 'Geometric Balloon',
    currentBid: 'Current Bid',
    price: '79.46 ETH',
    activity: 'Activity',
    name: 'Wesley Sickler',
},
{
    id: 52,
    wrapperClass: 'col-xl-12',
    img: art22,
    tag: 'Featured',
    featureClass: 'tag-featured',
    count: '2.5k+',
    bid: 'Place Bid',
    share: 'Share',
    report: 'Report',
    profileImage: profile14,
    artistId: '@margaret',
    title: 'Pink Buddy',
    currentBid: 'Current Bid',
    price: '23.46 ETH',
    activity: 'Activity',
    name: 'Margaret Krom',
},
{
    id: 53,
    wrapperClass: 'col-xl-12',
    img: art21,
    tag: 'Featured',
    featureClass: 'd-none',
    count: '2.5k+',
    bid: 'Place Bid',
    share: 'Share',
    report: 'Report',
    profileImage: profileSix,
    artistId: '@johnson',
    title: 'Spray Art',
    currentBid: 'Current Bid',
    price: '23.46 ETH',
    activity: 'Activity',
    name: 'Murray Johnson',
},
//home theree data
{
    id: 54,
    wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
    img: art77,
    tag: 'Featured',
    featureClass: 'tag-featured',
    count: '2.5k+',
    bid: 'Place Bid',
    share: 'Share',
    report: 'Report',
    profileImage: profile11,
    artistId: '@russell',
    title: 'Motion Blend',
    currentBid: 'Current Bid',
    price: '76.46 ETH',
    activity: 'Activity',
    name: 'russell Harden',
},
{
    id: 55,
    wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
    img: art78,
    tag: 'Featured',
    featureClass: 'd-none',
    count: '2.5k+',
    bid: 'Place Bid',
    share: 'Share',
    report: 'Report',
    profileImage: profileNine,
    artistId: '@john',
    title: 'Skater Girl',
    currentBid: 'Current Bid',
    price: '22.46 ETH',
    activity: 'Activity',
    name: 'Murray Johnson',
},
{
    id: 56,
    wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
    img: art79,
    tag: 'Featured',
    featureClass: 'd-none',
    count: '2.5k+',
    bid: 'Place Bid',
    share: 'Share',
    report: 'Report',
    profileImage: profileSix,
    artistId: '@mary.hono',
    title: 'Walking Girl',
    currentBid: 'Current Bid',
    price: '79.46 ETH',
    activity: 'Activity',
    name: 'Mary',
},
{
    id: 57,
    wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
    img: art80,
    tag: 'Featured',
    featureClass: 'd-none',
    count: '2.5k+',
    bid: 'Place Bid',
    share: 'Share',
    report: 'Report',
    profileImage: profileTwo,
    artistId: '@jonanico',
    title: 'Tech Panda',
    currentBid: 'Current Bid',
    price: '83.46 ETH',
    activity: 'Activity',
    name: 'jonanico Tannenbaum',
},
{
    id: 58,
    wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
    img: art81,
    tag: 'Featured',
    featureClass: 'd-none',
    count: '2.5k+',
    bid: 'Place Bid',
    share: 'Share',
    report: 'Report',
    profileImage: profile17,
    artistId: '@chess',
    title: 'Happy Pup',
    currentBid: 'Current Bid',
    price: '23.84 ETH',
    activity: 'Activity',
    name: 'Chess',
    
},
{
    id: 59,
    wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
    img: art82,
    tag: 'Featured',
    featureClass: 'd-none',
    count: '2.5k+',
    bid: 'Place Bid',
    share: 'Share',
    report: 'Report',
    profileImage: profileSeven,
    artistId: '@machman',
    title: 'Jet Flyer',
    currentBid: 'Current Bid',
    price: '83.46 ETH',
    activity: 'Activity',
    name: 'Machman',
},
{
    id: 60,
    wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
    img: art83,
    tag: 'Featured',
    featureClass: 'tag-featured',
    count: '2.5k+',
    bid: 'Place Bid',
    share: 'Share',
    report: 'Report',
    profileImage: profileTen,
    artistId: '@stephens',
    title: 'Cool Shades',
    currentBid: 'Current Bid',
    price: '33.46 ETH',
    activity: 'Activity',
    name: 'Walter stephens',
},
{
    id: 61,
    wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
    img: art84,
    tag: 'Featured',
    featureClass: 'd-none',
    count: '2.5k+',
    bid: 'Place Bid',
    share: 'Share',
    report: 'Report',
    profileImage: profileThree,
    artistId: '@jerrifo',
    title: 'Burger Buddy',
    currentBid: 'Current Bid',
    price: '21.46 ETH',
    activity: 'Activity',
    name: 'Jerrifo',
},
// 
{
    id: 62,
    wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
    img: artImgEight,
    tag: 'Featured',
    featureClass: 'd-none',
    count: '2.5k+',
    bid: 'Place Bid',
    share: 'Share',
    report: 'Report',
    profileImage: profile18,
    artistId: '@sickler',
    title: 'Drink Dance',
    currentBid: 'Current Bid',
    price: '24.46 ETH',
    activity: 'Activity',
    name: 'Sickler',
},
{
    id: 63,
    wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
    img: artImgSeven,
    tag: 'Featured',
    featureClass: 'd-none',
    count: '2.5k+',
    bid: 'Place Bid',
    share: 'Share',
    report: 'Report',
    profileImage: profile19,
    artistId: '@yolanda',
    title: 'Toast Runner',
    currentBid: 'Current Bid',
    price: '34.25 ETH',
    activity: 'Activity',
    name: 'Yolanda',
},
{
    id: 64,
    wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
    img: art68,
    tag: 'Featured',
    featureClass: 'd-none',
    count: '2.5k+',
    bid: 'Place Bid',
    share: 'Share',
    report: 'Report',
    profileImage: profile20,
    artistId: '@murroy',
    title: 'Unicorn Dance',
    currentBid: 'Current Bid',
    price: '21.32 ETH',
    activity: 'Activity',
    name: 'Murroy',
},
{
    id: 65,
    wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
    img: art73,
    tag: 'Featured',
    featureClass: 'd-none',
    count: '2.5k+',
    bid: 'Place Bid',
    share: 'Share',
    report: 'Report',
    profileImage: profile21,
    artistId: '@sitve.lio',
    title: 'Abstract Smile',
    currentBid: 'Current Bid',
    price: '54.20 ETH',
    activity: 'Activity',
    name: 'Sitve',
},
{
    id: 66,
    wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
    img: AbstarctMotion,
    tag: 'Featured',
    featureClass: 'd-none',
    count: '2.5k+',
    bid: 'Place Bid',
    share: 'Share',
    report: 'Report',
    profileImage: profile22,
    artistId: '@candance',
    title: 'Scooter Pup',
    currentBid: 'Current Bid',
    price: '63.04 ETH',
    activity: 'Activity',
    name: 'Candance',
},
{
    id: 67,
    wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
    img: HaloweenScarecrow,
    tag: 'Featured',
    featureClass: 'd-none',
    count: '2.5k+',
    bid: 'Place Bid',
    share: 'Share',
    report: 'Report',
    profileImage: profile23,
    artistId: '@fredrick',
    title: 'Blue Astronaut',
    currentBid: 'Current Bid',
    price: '10.39 ETH',
    activity: 'Activity',
    name: 'Fredrick',
},
{
    id: 68,
    wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
    img: CartoonBird,
    tag: 'Featured',
    featureClass: 'd-none',
    count: '2.5k+',
    bid: 'Place Bid',
    share: 'Share',
    report: 'Report',
    profileImage: profile24,
    artistId: '@margaret',
    title: 'Chick Cute',
    currentBid: 'Current Bid',
    price: '45.29 ETH',
    activity: 'Activity',
    name: 'Margaret',
},
{
    id: 69,
    wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
    img: DancingBread,
    tag: 'Featured',
    featureClass: 'd-none',
    count: '2.5k+',
    bid: 'Place Bid',
    share: 'Share',
    report: 'Report',
    profileImage: profile25,
    artistId: '@candance',
    title: 'Peace Ride',
    currentBid: 'Current Bid',
    price: '32.25 ETH',
    activity: 'Activity',
    name: 'Candance',
},

//home two product data
{
    id: 70,
    wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
    img: art69,
    tag: 'Featured',
    featureClass: 'd-none',
    bid: 'Place Bid',
    share: 'Share',
    report: 'Report',
    profileImage: profile11,
    currentBid: 'Current Bid',
    activity: 'Activity',
    name: 'Walter Russell',
    count: '2.5k+',
    title: 'Playful Reindeer',
    artistId: '@russell',
    price: '22.46 ETH',
    day:212,
    min:50
},
{
    id: 71,
    wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
    img: art70,
    tag: 'Featured',
    featureClass: 'd-none',
    count: '2.5k+',
    bid: 'Place Bid',
    share: 'Share',
    report: 'Report',
    profileImage: profileNine,
    artistId: '@john.874',
    title: 'Ape Portrait',
    currentBid: 'Current Bid',
    price: '53.46 ETH',
    activity: 'Activity',
    name: 'John Schreffler',
    day:90,
    min:20
},
{
    id: 72,
    wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
    img: art71,
    tag: 'Featured',
    featureClass: 'd-none',
    count: '2.5k+',
    bid: 'Place Bid',
    share: 'Share',
    report: 'Report',
    profileImage: profileSix,
    artistId: '@jobanico',
    title: 'Hotdog Buddy',
    currentBid: 'Current Bid',
    price: '43.46 ETH',
    activity: 'Activity',
    name: 'Jobanico Mina',
    day:80,
    min:50
},
{
    id: 73,
    wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
    img: art72,
    tag: 'Featured',
    featureClass: 'd-none',
    count: '2.5k+',
    bid: 'Place Bid',
    share: 'Share',
    report: 'Report',
    profileImage: profileEight,
    artistId: '@mary.hano',
    title: 'Eggling Chick',
    currentBid: 'Current Bid',
    price: '26.66 ETH',
    activity: 'Activity',
    name: 'Mary Callahan',
    day:60,
    min:20
},
{
    id: 74,
    wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
    img: art73,
    tag: 'Featured',
    featureClass: 'd-none',
    count: '2.5k+',
    bid: 'Place Bid',
    share: 'Share',
    report: 'Report',
    profileImage: profile17,
    artistId: '@chess.62',
    title: 'Dreamy Cat',
    currentBid: 'Current Bid',
    price: '26.62 ETH',
    activity: 'Activity',
    name: 'Kenny Chess',
    day:75,
    min:45
},
{
    id: 75,
    wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
    img: art74,
    tag: 'Featured',
    featureClass: 'd-none',
    count: '2.5k+',
    bid: 'Place Bid',
    share: 'Share',
    report: 'Report',
    profileImage: profileSeven,
    artistId: '@stephens',
    title: 'Balloon Character',
    currentBid: 'Current Bid',
    price: '43.46 ETH',
    activity: 'Activity',
    name: 'Patricia Stephens',
    day:70,
    min:30
},
{
    id: 76,
    wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
    img: art75,
    tag: 'Featured',
    featureClass: 'd-none',
    count: '2.5k+',
    bid: 'Place Bid',
    share: 'Share',
    report: 'Report',
    profileImage: profileTen,
    artistId: '@johnson',
    title: 'Flower Child',
    currentBid: 'Current Bid',
    price: '23.46 ETH',
    activity: 'Activity',
    name: 'Murray Johnson',
    day:50,
    min:25
},
{
    id: 77,
    wrapperClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6',
    img: art76,
    tag: 'Featured',
    featureClass: 'd-none',
    count: '2.5k+',
    bid: 'Place Bid',
    share: 'Share',
    report: 'Report',
    profileImage: profileThree,
    artistId: '@jerrifo',
    title: 'Futuristic Orb',
    currentBid: 'Current Bid',
    price: '23.46 ETH',
    activity: 'Activity',
    name: 'Jeffrey Hayes',
    day:62,
    min:39
},
]
