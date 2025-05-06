import ProfileMain from "@/components/profile/ProfileMain";
import DashboardWrapper from "@/layout/DashboardWrapper";
import React from "react";

const ProfilePage = () => {
  return (
    <>
      <DashboardWrapper>
        <main>
          <ProfileMain />
        </main>
      </DashboardWrapper>
    </>
  );
};

export default ProfilePage;