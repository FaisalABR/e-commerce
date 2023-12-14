import React from "react";

import { serviceData } from "../utils/data";

import ServiceItem from "./ServiceItem";

const ServiceList = () => {
  return (
    <div className="grid w-full grid-cols-4 gap-5">
      {/* items-service*/}
      {serviceData.map((item) => (
        <ServiceItem
          title={item.title}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default ServiceList;
