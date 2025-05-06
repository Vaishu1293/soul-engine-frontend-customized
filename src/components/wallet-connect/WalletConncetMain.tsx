"use client"
import React from "react";
import Link from "next/link";
import ThemeChanger from "../home/ThemeChanger";
import Breadcrumbs from "@/utils/Breadcrumbs";
import Image from "next/image";
import { walletConnect } from "@/data/wallet-connect-data";
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";

const WalletConnectMain = () => {
  useFlashlightAnimation();
  return (
    <main>
      <ThemeChanger />
      <Breadcrumbs
        breadcrumbTitle="Connect Wallet"
        breadcrumbSubTitle="Connect Wallet"
      />

      <section className="connect-wallet-area pt-0 pb-40">
        <div className="container">
          <div className="connect-wallet-wrapper">
            {walletConnect && (
              <div className="row">
                {walletConnect.map((WalletConnectMain, num) => (
                  <div key={num} className="col-xl-4 col-lg-4 col-md-6">
                    <div className="box-card-single box-card-wallet light-effect-bottom mb-40 wow fadeInUp">
                      <div className="box-card-inner text-center">
                        <div className="box-card-icon">
                          <Image
                            width={50}
                            height={50}
                            style={{ width: "auto", height: "auto" }}
                            src={WalletConnectMain?.walletImage}
                            alt="Img Not Found"
                          />
                        </div>
                        <h4 className="box-card-title">
                          {WalletConnectMain.walletTitle}
                        </h4>
                        <p>{WalletConnectMain.walletDesc}</p>
                        <div className="box-card-btn">
                          <Link href="#" className="fill-btn-lightblue">
                            {WalletConnectMain.walletBtn}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="wallet-wrapper-note text-center wow fadeInUp">
              <div className="note">
                Need help to collect wallet?{" "}
                <Link className="text-btn" href="/contact">
                  Contact Support
                </Link>{" "}
                or Lean how to collect wallet visiting to our{" "}
                <Link className="text-btn" href="/faq">
                  FAQ page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WalletConnectMain;
