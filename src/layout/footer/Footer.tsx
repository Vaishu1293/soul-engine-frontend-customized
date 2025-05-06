import React from "react";
import Link from "next/link";
import logoOne from "../../../public/assets/img/logo/logo-2.png";
import logoTwo from "../../../public/assets/img/logo/logo.png";
import Image from "next/image";
import { getCurrentYear } from "@/utils/dateUtils";

const Footer = () => {
  const currentYear = getCurrentYear();
  return (
    <footer className="footer1-bg">
      <section className="footer-area footer-area1 piland-noise-bg pt-100 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget footer1-widget footer1-widget1 mb-40">
                <div className="footer-logo mb-30">
                  <Link className="logo-bb" href="/">
                    <Image src={logoOne} priority alt="logo-img" />
                  </Link>
                  <Link className="logo-bw" href="/">
                    <Image
                      src={logoTwo}
                      priority
                      alt="logo-img"
                    />
                  </Link>
                </div>
                <p className="mb-35">
                  We provide one-stop solutions for all IT items; your bliss is
                  just a click away. Star Tech trusts in quality client
                </p>
                <div className="social__links footer__social">
                  <ul>
                    <li>
                      <Link href="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget footer1-widget footer1-widget2 mb-40">
                <div className="footer-widget-title">
                  <h4>Trade & Guidelines</h4>
                </div>
                <ul>
                  <li>
                    <Link href="/terms">
                      Proper Guidelines
                    </Link>
                  </li>
                  <li>
                    <Link href="/explore-arts">
                      Buy Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/wallet-connect">
                      Wallet Connect
                    </Link>
                  </li>
                  <li>
                    <Link href="/live-auction">
                      Live Auction
                    </Link>
                  </li>
                  <li>
                    <Link href="/live-bids">
                      Live Bids
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget footer1-widget footer1-widget3 mb-40 ">
                <div className="footer-widget-title">
                  <h4>Exclusive Artwork</h4>
                </div>
                <ul>
                  <li>
                    <Link href="/explore-arts">
                      3D Artworks
                    </Link>
                  </li>
                  <li>
                    <Link href="/explore-arts">
                      Upload Category
                    </Link>
                  </li>
                  <li>
                    <Link href="/art-ranking">
                      Art Ranking
                    </Link>
                  </li>
                  <li>
                    <Link href="/my-collection">
                      My Collection
                    </Link>
                  </li>
                  <li>
                    <Link href="/my-wallet">
                      My Wallet
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget footer1-widget footer1-widget4 mb-40 ">
                <div className="footer-widget-title">
                  <h4>Newsletter</h4>
                </div>
                <p>Subscribe to our newsletter and stay updated with the latest news and updates!</p>
                <form className="subscribe-form subscribe-form-copyright1">
                  <input type="text" placeholder="Enter email" />
                  <button type="submit"><i className="fas fa-paper-plane"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="piland-copyright-area">
        <div className="container">
          <div className="piland-copyright text-center">
            <p>© {currentYear} All rights reserved | Design & Develop by{" "}
              <Link href="https://themeforest.net/user/bdevs">BDevs</Link></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
