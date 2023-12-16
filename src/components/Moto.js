import React from "react";

const Moto = () => {
  return (
    <div className="w-full my-10">
      <div className="flex items-center justify-between ">
        <h1 className="font-bold md:text-2xl lg:text-3xl text-md">
          We Provide best <br /> customer experinces
        </h1>
        <div className="flex items-center">
          <div className="h-[80px] w-[2px] bg-my-navy lg:mx-2 md:mx-2 mx-6"></div>
          <p className="font-base lg:text-lg md:text-lg text-xs px-4 text-dark-grey">
            We ensure our customers have the best shopping experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Moto;
