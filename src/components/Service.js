import React, { forwardRef } from "react";

import Moto from "./Moto";
import ServiceList from "./ServiceList";

const Service = forwardRef((props, ref) => {
  return (
    <section className="w-full" ref={ref}>
      <Moto />
      <ServiceList />
    </section>
  );
});

export default Service;
