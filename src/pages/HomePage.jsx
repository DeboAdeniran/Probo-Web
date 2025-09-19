import React from "react";
import MainLayout from "../components/layout/MainLayout";
import WhyProboLayout from "../components/layout/WhyProboLayout";
import FeaturesLayout from "../components/layout/FeaturesLayout";
import TestimonialLayout from "../components/layout/TestimonialLayout";
import GetStarted from "../components/layout/GetStarted";
import FooterLayout from "../components/layout/FooterLayout";

function HomePage() {
  return (
    <div>
      <MainLayout />
      <WhyProboLayout />
      <FeaturesLayout />
      <TestimonialLayout />
      <GetStarted />
      <FooterLayout />
    </div>
  );
}

export default HomePage;
