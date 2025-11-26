'use client';

import React from "react";
import ThemeChanger from "../home/ThemeChanger";
import { ThemeProvider } from "next-themes";
import TarotDrawContainer from "./tarotDrawContainer";

const TarotDrawMain = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <ThemeChanger />
      <TarotDrawContainer/>
    </ThemeProvider>
  );
};

export default TarotDrawMain;
