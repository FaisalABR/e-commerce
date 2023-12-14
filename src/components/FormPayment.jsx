import React from "react";

import PriceList from "./PriceList";
import { IDR } from "../utils/data";

export default function FormPayment({ orderedItems }) {
  const checkedItems = orderedItems.filter((item) => item.isChecked === true);

  const totalPrice = checkedItems.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return (
    <div className="w-3/12 rounded-md shadow-2xl border-2 px-4 py-2">
      {checkedItems.length === 0 ? (
        <>
          <p className="font-semibold text-dark-grey">
            No item will be paid for
          </p>
        </>
      ) : (
        checkedItems.map((item) => <PriceList data={item} />)
      )}
      <hr />
      <div className="flex justify-between my-2">
        <p className="font-semibold">Total :</p>
        <p className="font-light">{IDR.format(totalPrice)}</p>
      </div>
    </div>
  );
}
