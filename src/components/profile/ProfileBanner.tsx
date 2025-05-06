import React from 'react';
import cover4 from "../../../public/assets/img/profile/profile-cover/profile-cover4.jpg"
import profile1 from "../../../public/assets/img/profile/profile7.jpg"
import Image from 'next/image';

const ProfileBanner = () => {
    return (
        <div className="creator-info-details mb-20 wow fadeInUp">
            <div className="creator-cover-img pos-rel">
                <div className="change-photo"><i className="flaticon-photo-camera"></i></div>
                <Image src={cover4} priority alt="cover-img" />
            </div>
            <div className="creator-img-name">
                <div className="profile-img pos-rel">
                    <div className="change-photo"><i className="flaticon-photo-camera"></i></div>
                    <Image src={profile1} priority alt="profile-img" />
                </div>
                <div className="creator-name-id">
                    <h4 className="artist-name pos-rel">
                        Kallaban Joy
                        <span className="profile-verification verified">
                            <i className="fas fa-check"></i>
                        </span>
                    </h4>
                    <div className="artist-id">@Kalla.ban</div>
                </div>
            </div>
        </div>
    );
};

export default ProfileBanner;

