import React from "react";

import MainLayout from "../main-layout/MainLayout";
import HeroSlide from "../components/HeroSlide";
import Service from "../components/Service";
import CurratedList from "../components/CurratedList";
import Newsletter from "../components/Newsletter";
import Featured from "../components/Featured";

const LandingPage = () => {
  return (
    <MainLayout>
      <div className="my-[80px] w-full px-20">
        <HeroSlide />
        <Service />
        <CurratedList />
        <Featured />
        <Newsletter />
      </div>
    </MainLayout>
  );
};

export default LandingPage;
