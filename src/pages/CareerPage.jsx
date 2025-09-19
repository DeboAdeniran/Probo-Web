import React from "react";
import CareerMainLayout from "../components/layout/CareerMainLayout";
import BenefitsLayout from "../components/layout/BenefitsLayout";
import OpenRolesLayout from "../components/layout/OpenRolesLayout";
import GetStarted from "../components/layout/GetStarted";
import FooterLayout from "../components/layout/FooterLayout";

function CareerPage() {
  return (
    <div>
      <CareerMainLayout />
      <BenefitsLayout />
      <OpenRolesLayout />
      <GetStarted />
      <FooterLayout />
    </div>
  );
}

export default CareerPage;
