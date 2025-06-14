"use client";

import Link from "next/link";
import React from "react";
import { useFormik } from "formik";
import { login_schema } from "@/utils/validation-schema";
import ErrorMessage from "@/utils/ErrorMessage";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import Image from "next/image";
import gmail from "../../public/assets/img/svg-icon/gmail.svg";
import facebook from "../../public/assets/img/svg-icon/facebook.svg";
import twitter from "../../public/assets/img/svg-icon/twitter.svg";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter()
  // Manual login handler
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    values,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validationSchema: login_schema,
    onSubmit: async (values) => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const result = await res.json();

        if (res.status === 200) {
          toast.success("Login successful!");
          localStorage.setItem("soul_token", result.token);
          localStorage.setItem("soul_user", JSON.stringify(result.user));
          resetForm();
          setTimeout(() => router.push("/dashboard"), 1000);
        } else {
          toast.error(result.error || "Invalid credentials.");
        }
      } catch (error) {
        console.error("Login error:", error);
        toast.error("Login failed.");
      }
    },
  });

  // Social login
  const handleSocialSignIn = async (provider: string) => {
    await signIn(provider, {
      callbackUrl: "/dashboard", // 👈 Change as needed
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="login-form" action="#">
        <div className="row">
          <div className="col-md-12">
            <div className="single-input-unit">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                placeholder="Enter Your Email"
              />
              {touched.email && <ErrorMessage error={errors.email} />}
            </div>
          </div>

          <div className="col-md-6">
            <div className="single-input-unit">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.username && <ErrorMessage error={errors.username} />}
            </div>
          </div>

          <div className="col-md-6">
            <div className="single-input-unit">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                placeholder="Password"
                id="password"
                autoComplete="true"
              />
              {touched.password && <ErrorMessage error={errors.password} />}
            </div>
          </div>
        </div>

        <div className="login-btn">
          <button className="fill-btn" type="submit">
            Sign in Account
          </button>
          <div className="note">
            Not yet registered?{" "}
            <Link className="text-btn" href="/register">
              Sign up
            </Link>
          </div>
        </div>
      </form>

      {/* SOCIAL SIGN-IN SECTION */}
      <div className="social-login-divider">
        <span>Or</span>
      </div>
      <div className="sign-up-media-login">
        <button
          onClick={() => handleSocialSignIn("google")}
          className="sign-up-media-single"
          type="button"
        >
          <Image src={gmail} alt="gmail" />
          Sign in with Gmail
        </button>
        <button
          onClick={() => handleSocialSignIn("facebook")}
          className="sign-up-media-single"
          type="button"
        >
          <Image src={facebook} alt="facebook" />
          Sign in with Facebook
        </button>
        <button
          onClick={() => handleSocialSignIn("twitter")}
          className="sign-up-media-single"
          type="button"
        >
          <Image src={twitter} alt="twitter" />
          Sign in with Twitter
        </button>
      </div>
    </>
  );
};

export default LoginForm;
