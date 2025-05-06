import RegisterForm from "@/form/RegisterForm";
import React from "react";
import bgImg from "../../../public/assets/img/bg/sign-up-social-bg1.jpg"
import gmail from "../../../public/assets/img/svg-icon/gmail.svg"
import facebook from "../../../public/assets/img/svg-icon/facebook.svg"
import twitter from "../../../public/assets/img/svg-icon/twitter.svg";
import signUpImg from '../../../public/assets/img/bg/sign-up-bg-2.jpg';
import Image from "next/image";
import Link from "next/link";

const SignUpContent = () => {
  return (
    <>
      <section
        className="sign-up-area login-area-2"
        style={{ backgroundImage:`url(${signUpImg.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="sign-up-wrapper pos-rel mb-40 wow fadeInUp">
                <div className="sign-up-inner">
                  <div className="sign-up-content">
                    <h4>Create Account</h4>
                    <p className="mb-35">
                      {`It's`} easy to create an account for Non-fungible tokens and
                      sale your any items independently online securely in the
                      world.
                    </p>
                    <RegisterForm/>
                  </div>
                </div>
                <div className="sign-up-with-social">
                  <div
                    className="sign-up-with-social-bg"
                    style={{ backgroundImage: `url(${bgImg.src})`}}
                  ></div>
                  <div className="sign-up-with-social-content">
                    <div className="text-or">Or</div>
                    <div className="sign-up-media">
                      <Link href="#" className="sign-up-media-single">
                        <Image
                          src={gmail}
                          priority
                          alt="media-img"
                          style={{ width: "auto", height: "auto" }}
                        />{" "}
                        Signup with Email
                      </Link>
                      <Link href="#" className="sign-up-media-single">
                        <Image
                          src={facebook}
                          alt="media-img"
                          style={{ width: "auto", height: "auto" }}
                        />{" "}
                        Signup with Facebook
                      </Link>
                      <Link href="#" className="sign-up-media-single">
                        <Image
                        style={{ width: "auto", height: "auto" }}
                          src={twitter}
                          alt="media-img"
                        />{" "}
                        Signup with Twitter
                      </Link>
                    </div>
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

export default SignUpContent;
