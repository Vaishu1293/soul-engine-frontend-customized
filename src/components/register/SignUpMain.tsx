"use client"
import React from "react";
import ThemeChanger from "../home/ThemeChanger";
import SignUpContent from "./SignUpContent";
import { ThemeProvider } from "next-themes";

const SignUpMain = () => {
  return (
    <>
      <ThemeProvider defaultTheme="dark">
        <ThemeChanger />
        <SignUpContent />
      </ThemeProvider>
    </>
  );
};

export default SignUpMain;
