import React from 'react';
import Link from 'next/link';
import thumb1 from "../../../public/assets/img/bids/oc-category-1.jpg"
import thumb2 from "../../../public/assets/img/bids/oc-category-2.jpg"
import thumb3 from "../../../public/assets/img/bids/oc-category-3.jpg"
import thumb4 from "../../../public/assets/img/bids/oc-category-4.jpg"
import thumb5 from "../../../public/assets/img/bids/oc-category-5.jpg"
import thumb6 from "../../../public/assets/img/bids/oc-category-6.jpg"
import thumb7 from "../../../public/assets/img/bids/oc-category-7.jpg"
import thumb8 from "../../../public/assets/img/bids/oc-category-8.jpg"
import Image from 'next/image';

const BrowseCategorySection = () => {

    const BrowseCategoryList = [
        {
            BrowseCategoryTitle: 'Charming 3D',
            BrowseCategoryImage: thumb1
        },
        {
            BrowseCategoryTitle: 'Audio-Visual Masterpieces',
            BrowseCategoryImage: thumb2
        },
        {
            BrowseCategoryTitle: 'Exclusive Collectibles',
            BrowseCategoryImage: thumb3
        },
        {
            BrowseCategoryTitle: 'Illuminating Abstract',
            BrowseCategoryImage: thumb4
        },
        {
            BrowseCategoryTitle: 'Premium Mockup',
            BrowseCategoryImage: thumb5
        },
        {
            BrowseCategoryTitle: 'Literary Treasures',
            BrowseCategoryImage: thumb6
        },
        {
            BrowseCategoryTitle: 'Interactive Game',
            BrowseCategoryImage: thumb7
        },
        {
            BrowseCategoryTitle: 'Vivid Digital Portraits',
            BrowseCategoryImage: thumb8
        },
    
    ];


    return (
        <section className="oc-category-area piland-noise-bg pt-110 pb-70">
         <div className="container">
            <div className="row wow fadeInUp">
               <div className="col-lg-12">
                  <div className="section-title1 pos-rel text-center mb-40">
                     <h2 className="section-main-title1">Choose a Category</h2>
                     <p>Here’s why Piland is the ideal platform for selling your NFT collection</p>
                  </div>
               </div>
            </div>
            {BrowseCategoryList &&
            <div className="row wow fadeInUp">
                {BrowseCategoryList.map( (BrowseCategorySection, num) => (
               <div key={num} className="col-xl-3 col-lg-3 col-sm-6">
                  <div className="oc-category mb-55">
                     <div className="oc-category-img">
                        <Link href="/explore-arts"><Image src={BrowseCategorySection.BrowseCategoryImage} style={{width:"auto", height:"auto"}} alt="img not found"/></Link>
                     </div>
                     <h5 className="oc-category-title"><Link href="/explore-arts">{BrowseCategorySection.BrowseCategoryTitle}</Link></h5>
                  </div>
               </div>
                ))}
            </div>
            }
         </div>
      </section>
    );
};

export default BrowseCategorySection;