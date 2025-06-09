"use client";

import { useFormik } from "formik";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { register_schema } from "@/utils/validation-schema";
import ErrorMessage from "@/utils/ErrorMessage";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const RegisterForm = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(null);
  const [checkingUsername, setCheckingUsername] = useState(false);

  const { handleChange, handleSubmit, handleBlur, errors, values, touched, setFieldError } = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
      confrimpassword: "",
    },
    validationSchema: register_schema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const result = await response.json();

        if (response.status === 201) {
          localStorage.setItem("soul_token", result.token);
          localStorage.setItem("soul_user", JSON.stringify(result.user));
          toast.success("Registration successful!");
          resetForm();
          setTimeout(() => router.push("/complete-profile"), 1000);
        } else if (response.status === 409) {
          toast.error("User already registered. Please login.");
          setTimeout(() => router.push("/login"), 1000);
        } else {
          throw new Error(result.error || "Unexpected error");
        }
      } catch (err) {
        console.error(err);
        toast.error("Registration error!");
      }
    },
  });

  const checkUsernameAvailability = async (username: string) => {
    setCheckingUsername(true);
    try {
      const response = await fetch("http://localhost:5000/api/auth/check-username", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
      });

      const result = await response.json();
      setUsernameAvailable(result.available);
      if (!result.available) {
        setFieldError("username", "Username is already taken.");
      }
    } catch (err) {
      setUsernameAvailable(null);
    }
    setCheckingUsername(false);
  };

  return (
    <form onSubmit={handleSubmit} className="sign-up-form" action="#">
      <div className="row">
        <div className="col-md-6">
          <div className="single-input-unit">
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your first name"
              defaultValue={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.name && <ErrorMessage error={errors.name} />}
          </div>
        </div>

        <div className="col-md-6">
          <div className="single-input-unit">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Your last name"
              defaultValue={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.lastname && <ErrorMessage error={errors.lastname} />}
          </div>
        </div>

        <div className="col-md-6">
          <div className="single-input-unit">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
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
              onChange={(e) => {
                handleChange(e);
                setUsernameAvailable(null);
              }}
              onBlur={(e) => {
                handleBlur(e);
                checkUsernameAvailability(values.username);
              }}
              required
            />
            {checkingUsername && <small>Checking...</small>}
            {usernameAvailable === false && <small className="text-danger">Username not available</small>}
            {usernameAvailable && <small className="text-success">Username available</small>}
            {touched.username && <ErrorMessage error={errors.username} />}
          </div>
        </div>

        <div className="col-md-6">
          <div className="single-input-unit">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              autoComplete="true"
            />
            {touched.password && <ErrorMessage error={errors.password} />}
          </div>
        </div>

        <div className="col-md-6">
          <div className="single-input-unit">
            <label htmlFor="confrimpassword">Confirm Password</label>
            <input
              type="password"
              name="confrimpassword"
              id="confrimpassword"
              placeholder="********"
              value={values.confrimpassword}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              autoComplete="off"
            />
            {touched.confrimpassword && <ErrorMessage error={errors.confrimpassword} />}
            {values.password !== values.confrimpassword && touched.confrimpassword && (
              <small className="text-danger">Passwords do not match</small>
            )}
          </div>
        </div>
      </div>

      <div className="sign-up-btn">
        <button className="fill-btn" type="submit" disabled={usernameAvailable === false}>
          Create Account
        </button>
        <div className="note">
          Already have an account? <Link className="text-btn" href="/login">Sign In</Link>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
