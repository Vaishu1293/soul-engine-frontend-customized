import React from "react";
import signUpImg from '../../../public/assets/img/bg/sign-up-bg-2.jpg';
import CompleteProfileForm from "@/form/CompleteProfileForm";

const ProfileDetailContent = () => {
  return (
    <>
  <section
    className="sign-up-area login-area-2"
    style={{ backgroundImage: `url(${signUpImg.src})` }}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="sign-up-wrapper pos-rel mb-40 wow fadeInUp">
            <div className="sign-up-inner">
              <div className="sign-up-content">
                <h4>Complete Your Profile</h4>
                <p className="mb-35">
                  Please fill in your birth details, interest area, and situation description to personalize your Soul-Engine readings.
                </p>
                <CompleteProfileForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  );
};

export default ProfileDetailContent;
