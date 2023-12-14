import React from "react";

const Moto = () => {
  return (
    <div className="w-full my-10">
      <div className="flex items-center justify-between ">
        <h1 className="font-bold text-2xl">
          We Provide best <br /> customer experinces
        </h1>
        <div className="flex items-center">
          <div className="h-[80px] w-[2px] bg-my-navy"></div>
          <p className="font-base text-xs px-4 text-dark-grey">
            We ensure our customers have the best shopping experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Moto;
