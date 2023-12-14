import React from "react";

import { IDR } from "../utils/data";

const PriceList = ({ data }) => {
  return (
    <div className="flex justify-between items-center my-2">
      <p className="font-semibold">{data.name}</p>
      <p className="font-light">{IDR.format(data.price)}</p>
    </div>
  );
};

export default PriceList;
