import React, { forwardRef } from "react";

import CurratedItem from "./CurratedItem";

import { curratedData } from "../utils/data";

const CurratedList = forwardRef((props, ref) => {
  return (
    <section className="my-10" ref={ref}>
      <h1 className="text-3xl font-bold">Currated Products</h1>
      <div className="w-full grid grid-cols-4 gap-10 my-10">
        {/* currated items */}
        {curratedData.map((item) => (
          <CurratedItem key={item.id} curracy={item.curracy} path={item.path} />
        ))}
      </div>
    </section>
  );
});

export default CurratedList;
