"use client";

import RegisterForm from "@/form/RegisterForm";
import React, { useEffect, useState } from "react";
import bgImg from "../../../public/assets/img/bg/sign-up-social-bg1.jpg";
import gmail from "../../../public/assets/img/svg-icon/gmail.svg";
import facebook from "../../../public/assets/img/svg-icon/facebook.svg";
import twitter from "../../../public/assets/img/svg-icon/twitter.svg";
import signUpImg from "../../../public/assets/img/bg/sign-up-bg-2.jpg";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const SignUpContent = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [clickedProvider, setClickedProvider] = useState<string | null>(null);

  // ✅ Called only if user explicitly clicked a social button
  useEffect(() => {
    const registerSocialUser = async () => {
      const provider = localStorage.getItem("soul_clicked_provider");

      if (!provider || !session?.user?.email) return;

      try {
        const res = await fetch("http://localhost:5000/api/auth/social-register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.user.email}`,
          },
          body: JSON.stringify({
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            provider,
          }),
        });

        const result = await res.json();

        if (res.status === 201) {
          // ✅ Store token securely in HTTP-only cookie
          await fetch("/api/auth/set-token", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: result.token }),
          });

          localStorage.setItem("soul_user", JSON.stringify(result.user));
          router.push("/complete-profile");

        } else if (res.status === 200) {
          toast.info("User already exists. Please log in.");
          router.push("/login");
        } else {
          throw new Error(result.error || "Unknown error");
        }
      } catch (error) {
        console.error("Social registration failed:", error);
        toast.error("Something went wrong. Please try again.");
      } finally {
        localStorage.removeItem("soul_clicked_provider");
      }
    };

    registerSocialUser();
  }, [session, router]);



  const handleSocialLogin = async (provider: string) => {
    if (status === "authenticated") {
      toast.info("You are already signed in.");
      return;
    }

    // 🔐 Save the clicked provider before signIn triggers auth flow
    localStorage.setItem("soul_clicked_provider", provider);
    await signIn(provider, { redirect: false });
  };


  return (
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
                  <h4>Create Account</h4>
                  <p className="mb-35">
                    {`It's`} easy to create an account for Non-fungible tokens and
                    sell your items independently online securely in the world.
                  </p>
                  <RegisterForm />
                </div>
              </div>
              <div className="sign-up-with-social">
                <div
                  className="sign-up-with-social-bg"
                  style={{ backgroundImage: `url(${bgImg.src})` }}
                ></div>
                <div className="sign-up-with-social-content">
                  <div className="text-or">Or</div>
                  <div className="sign-up-media">
                    <button
                      onClick={() => handleSocialLogin("google")}
                      className="sign-up-media-single"
                      type="button"
                    >
                      <Image src={gmail} alt="Gmail icon" />
                      Signup with Gmail
                    </button>
                    <button
                      onClick={() => handleSocialLogin("facebook")}
                      className="sign-up-media-single"
                      type="button"
                    >
                      <Image src={facebook} alt="Facebook icon" />
                      Signup with Facebook
                    </button>
                    <button
                      onClick={() => handleSocialLogin("twitter")}
                      className="sign-up-media-single"
                      type="button"
                    >
                      <Image src={twitter} alt="Twitter icon" />
                      Signup with Twitter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpContent;
