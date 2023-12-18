import React, { forwardRef } from "react";

import CurratedItem from "./CurratedItem";

import { curratedData } from "../utils/data";

const CurratedList = forwardRef((props, ref) => {
  return (
    <section data-aos="flip-up" className="my-10" ref={ref}>
      <h1 className="lg:text-3xl font-bold md:text-2xl text-2xl">
        Currated Products
      </h1>
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 lg:gap-10 md:gap-10 gap-5 my-10 ">
        {/* currated items */}
        {curratedData.map((item) => (
          <CurratedItem key={item.id} curracy={item.curracy} path={item.path} />
        ))}
      </div>
    </section>
  );
});

export default CurratedList;
