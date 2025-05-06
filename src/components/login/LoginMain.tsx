"use client"
import React from "react";
import ThemeChanger from "../home/ThemeChanger";
import LoginContent from "./LoginContent";
import { ThemeProvider } from "next-themes";

const LoginMain = () => {
  return (
    <>
    <ThemeProvider defaultTheme="dark">
      <ThemeChanger />
      <LoginContent/>
    </ThemeProvider>
    </>
  );
};

export default LoginMain;
