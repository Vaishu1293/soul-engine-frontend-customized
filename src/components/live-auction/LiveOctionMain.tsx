import React from "react";
import Breadcrumbs from "@/utils/Breadcrumbs";
import ThemeChanger from "../home/ThemeChanger";
import LiveOctions from "./LiveOctions";

const LiveOctionMain = () => {
  return (
    <>
      <ThemeChanger />

      <Breadcrumbs
        breadcrumbTitle="Live Octions"
        breadcrumbSubTitle="Live Octions"
      />
      <LiveOctions />
    </>
  );
};

export default LiveOctionMain;
