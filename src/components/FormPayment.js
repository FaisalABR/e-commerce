import React from "react";

import PriceList from "./PriceList";
import { IDR } from "../utils/data";

import { confirmPayment } from "../utils/reducer/paymentSlice";
import { handlePaidList } from "../utils/reducer/cartSlice";

import { useDispatch } from "react-redux";

export default function FormPayment({ orderedItems }) {
  const checkedItems = orderedItems.filter((item) => item.isChecked === true);

  const dispatch = useDispatch();

  const totalPrice = checkedItems.reduce((acc, item) => {
    return acc + item.price * item.productAmount;
  }, 0);

  const handlePay = (id) => {
    dispatch(confirmPayment({ totalPrice }));
    // dispatch(handlePaidList())
  };

  let isCheckingExist = checkedItems.length === 0;
  return (
    <div className="w-3/12 rounded-md shadow-2xl border-2 px-4 py-2 my-5">
      {isCheckingExist ? (
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
      <button
        className="w-full rounded-md bg-my-navy  py-2 text-white text-md font-semibold hover:bg-red-500 transition-all"
        disabled={isCheckingExist}
        onClick={handlePay}
      >
        Pay
      </button>
    </div>
  );
}
