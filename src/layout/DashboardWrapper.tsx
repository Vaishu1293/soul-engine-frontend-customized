//@refresh
"use client";
import React, { useEffect } from "react";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import { ThemeProvider } from "next-themes";
import BacktoTop from "@/utils/BacktoTop";
import useLoading from "@/hooks/useLoading";
import { animationCreate } from "@/utils/utils";
import Preloader from "@/utils/Preloader";
import HeaderThree from "./header/HeaderThree";
import FooterThree from "./footer/FooterThree";
interface WrapperProps {
  children: React.ReactNode;
}

const DashboardWrapper: React.FC<WrapperProps> = ({ children }) => {
  const isLoading = useLoading(true, 100);
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 2000);
  }, []);

  return (
    <>
     
     {
      isLoading ?
      <>
      <Preloader/>
      </>
      :
      <>
       <ThemeProvider defaultTheme="dark">
        <BacktoTop/>
        <HeaderThree />
        {children}
        <FooterThree />
      </ThemeProvider>
      </>
     }
    </>
  );
};

export default DashboardWrapper;
