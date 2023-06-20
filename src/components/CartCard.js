import React from "react";

import { BsTrash } from "react-icons/bs";

import ButtonDec from "./ButtonDec";
import ButtonInc from "./ButtonInc";

const CartCard = ({ data }) => {
  let IDR = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
    maximumSignificantDigits: 3,
  });
  return (
    <div className="border-2 px-7 py-3 flex items-center justify-between rounded-md shadow-md w-8/12 my-5">
      {/* item ordered information */}
      <div className="flex items-center">
        <div className="w-[70px] h-[70px] rounded-md bg-cyan-300"></div>
        <div className="mx-2">
          <h1 className="font-bold text-lg">{data.name}</h1>
          <p className="text-sm">{IDR.format(data.price)}</p>
        </div>
      </div>
      {/* action button */}
      <div className="flex items-center gap-3">
        <div className="flex items-center">
          <ButtonDec />
          <div className="px-3 py-2 border-2 rounded-sm">
            {data.productAmount}
          </div>
          <ButtonInc />
        </div>
        <BsTrash className="cursor-pointer" />
      </div>
    </div>
  );
};

export default CartCard;
