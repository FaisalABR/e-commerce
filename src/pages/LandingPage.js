import React, { useRef } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSlide from "../components/HeroSlide";
import Service from "../components/Service";
import CurratedList from "../components/CurratedList";
import Newsletter from "../components/Newsletter";
import Featured from "../components/Featured";

const LandingPage = () => {
  const serviceRef = useRef(null);
  const curratedRef = useRef(null);
  const featuredRef = useRef(null);

  const scrollToService = () => {
    serviceRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCurrated = () => {
    curratedRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToFeature = () => {
    featuredRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header
        scrollToService={scrollToService}
        scrollToCurrated={scrollToCurrated}
        scrollToFeature={scrollToFeature}
      />
      <div className="my-[80px] w-full px-20">
        <HeroSlide />
        <Service ref={serviceRef} />
        <CurratedList ref={curratedRef} />
        <Featured ref={featuredRef} />
        <Newsletter />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
