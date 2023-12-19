import React, { useRef, useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSlide from "../components/HeroSlide";
import Service from "../components/Service";
import CurratedList from "../components/CurratedList";
import Newsletter from "../components/Newsletter";
import Featured from "../components/Featured";
import Notification from "../components/Notification";

const LandingPage = () => {
  const serviceRef = useRef(null);
  const curratedRef = useRef(null);
  const featuredRef = useRef(null);
  const [showNotif, setShowNotif] = useState(false);

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
      <div className="my-[80px] w-full md:px-20 lg:px-20 px-5">
        <HeroSlide />
        <Service ref={serviceRef} />
        <CurratedList ref={curratedRef} />
        <Featured ref={featuredRef} setShowNotif={setShowNotif} />
        <Newsletter />
      </div>
      {showNotif && (
        <Notification>
          <p className="text-sm md:text-md lg:text-md text-green-400 font-semibold">
            Successfully Added to Cart
          </p>
          <p className="text-xs md:text-sm lg:text-sm text-green-400">
            Please check your cart page
          </p>
        </Notification>
      )}
      <Footer />
    </>
  );
};

export default LandingPage;
