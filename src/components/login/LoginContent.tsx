import LoginFrom from "@/form/LoginFrom";
import React from "react";
import signUpImg from '../../../public/assets/img/bg/sign-up-bg.jpg';

const LoginContent = () => {
  return (
    <>
      <section
        className="login-area login-area-2"
        style={{ backgroundImage:`url(${signUpImg.src})` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-lg-8">
              <div className="login-wrapper pos-rel mb-40 wow fadeInUp">
                <div className=" login-inner">
                  <div className="login-content">
                    <h4>Sign in Account</h4>
                        <LoginFrom/>
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

export default LoginContent;
