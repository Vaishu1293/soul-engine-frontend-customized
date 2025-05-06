import UserDashboardMain from "@/components/dashboard/UserDashboardMain";
import DashboardWrapper from "@/layout/DashboardWrapper";
import React from "react";

const DashboardPage = () => {
  return (
    <>
      <DashboardWrapper>
        <main>
          <UserDashboardMain />
        </main>
      </DashboardWrapper>
    </>
  );
};

export default DashboardPage;