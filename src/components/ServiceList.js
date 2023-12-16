import React from "react";

import { serviceData } from "../utils/data";

import ServiceItem from "./ServiceItem";

const ServiceList = () => {
  return (
    <div className="grid w-full md:grid-cols-4 lg:grid-cols-4 grid-cols-2 lg:gap-5 md:gap-5 gap-3">
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
