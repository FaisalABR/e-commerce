import React from "react";

import { BsTrash } from "react-icons/bs";

import ButtonDec from "./ButtonDec";
import ButtonInc from "./ButtonInc";

import { IDR } from "../utils/data";

import {
  decrementAmount,
  incrementAmount,
  deleteCartList,
  handleCheckList,
} from "../utils/reducer/cartSlice";
import { useDispatch } from "react-redux";

const CartCard = ({ data }) => {
  const dispatch = useDispatch();

  const decAmount = (id) => {
    dispatch(decrementAmount({ id }));
  };

  const incAmount = (id) => {
    dispatch(incrementAmount({ id }));
  };

  const deleteCart = (id) => {
    dispatch(deleteCartList({ id }));
  };

  const handleChangeCheck = (id) => {
    dispatch(handleCheckList({ id }));
  };
  const muteDecrement = data.productAmount === 1;

  console.log(data.id);
  return (
    <div className="border-2 px-7 py-3 flex items-center justify-between rounded-md shadow-md w-8/12 my-5">
      {/* item ordered information */}
      <div className="flex items-center">
        <input
          type="checkbox"
          value={data.price}
          id={data.id}
          checked={data.isChecked}
          onChange={() => handleChangeCheck(data.id)}
        />
        <div className="w-[70px] h-[70px] rounded-md bg-cyan-300"></div>
        <div className="mx-2">
          <h1 className="font-bold text-lg">{data.name}</h1>
          <p className="text-sm">
            {IDR.format(data.price * data.productAmount)}
          </p>
        </div>
      </div>
      {/* action button */}
      <div className="flex items-center gap-3">
        <div className="flex items-center">
          <ButtonDec
            handleDecClick={() => {
              decAmount(data.id);
            }}
            muteDecrement={muteDecrement}
          />
          <div className="px-3 py-2 border-2 rounded-sm">
            {data.productAmount}
          </div>
          <ButtonInc
            handleIncClick={() => {
              incAmount(data.id);
            }}
          />
        </div>
        <BsTrash
          className="cursor-pointer"
          onClick={() => deleteCart(data.id)}
        />
      </div>
    </div>
  );
};

export default CartCard;
