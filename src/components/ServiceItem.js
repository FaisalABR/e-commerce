import React from "react";

import { GrDiamond } from "react-icons/gr";
import { FaTruckMoving } from "react-icons/fa";
import {
  MdOutlineSentimentVerySatisfied,
  MdOutlineWarehouse,
} from "react-icons/md";
import { IconContext } from "react-icons";

const ServiceItem = ({ title, description, icon }) => {
  const renderIcon = (icon) => {
    switch (icon) {
      case "diamond":
        return <GrDiamond />;
      case "truck":
        return <FaTruckMoving />;
      case "smile":
        return <MdOutlineSentimentVerySatisfied />;
      case "warehouse":
        return <MdOutlineWarehouse />;
      default:
        return <></>;
    }
  };
  return (
    <div data-aos="fade-up" className="">
      <div className="w-[90px] h-[90px] rounded-md bg-my-grey my-1 flex justify-center items-center">
        <IconContext.Provider
          value={{
            size: "2em",
            className: "global-class-name",
          }}
        >
          <div>{renderIcon(icon)}</div>
        </IconContext.Provider>
      </div>
      <h1 className="font-bold text-md text-my-navy my-2">{title}</h1>
      <p className="text-xs text-dark-grey">{description}</p>
    </div>
  );
};

export default ServiceItem;
