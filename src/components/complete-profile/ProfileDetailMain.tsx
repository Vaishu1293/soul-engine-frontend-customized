"use client"
import React from "react";
import ThemeChanger from "../home/ThemeChanger";
import { ThemeProvider } from "next-themes";
import ProfileDetailContent from "./ProfileDetailContent";

const ProfileDetailMain = () => {
  return (
    <>
      <ThemeProvider defaultTheme="dark">
        <ThemeChanger />
        <ProfileDetailContent/>
      </ThemeProvider>
    </>
  );
};

export default ProfileDetailMain;
