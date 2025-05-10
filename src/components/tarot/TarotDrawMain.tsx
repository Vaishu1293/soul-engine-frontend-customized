"use client";

import React from "react";
import ThemeChanger from "../home/ThemeChanger";
import { ThemeProvider } from "next-themes";
import TarotDrawContent from "./TarotDrawPageContent";


const TarotDrawMain = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <ThemeChanger />
      <TarotDrawContent />
    </ThemeProvider>
  );
};

export default TarotDrawMain;
