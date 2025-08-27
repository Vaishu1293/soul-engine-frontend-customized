import ReadingsPageMain from "@/components/daily-readings/ReadingsPageMain";
import DashboardWrapper from "@/layout/DashboardWrapper";
import React from "react";

const DailyReadingsPage = () => {
  return (
    <>
      <DashboardWrapper>
        <main>
          <ReadingsPageMain/>
        </main>
      </DashboardWrapper>
    </>
  );
};

export default DailyReadingsPage;