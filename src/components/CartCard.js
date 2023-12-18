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
    <div className="w-full border-2 md:px-7 lg:px-7 px-2 md:py-3 lg:py-3 py-2 flex items-center justify-between rounded-md shadow-md  my-5">
      {/* item ordered information */}
      <div className="flex items-center">
        {data.isPaid !== true ? (
          <input
            type="checkbox"
            value={data.price}
            id={data.id}
            checked={data.isChecked}
            onChange={() => handleChangeCheck(data.id)}
          />
        ) : (
          <></>
        )}
        <div className="md:w-[70px] md:h-[70px] lg:w-[70px] lg:h-[70px] w-[50px] h-[50px]  rounded-md bg-cyan-300"></div>
        <div className="mx-2">
          <p className="font-bold md:text-lg lg:text-lg text-md line-clamp-1">
            {data.name}
          </p>
          <p className="md:text-sm lg:text-sm text-xs">
            {IDR.format(data.price * data.productAmount)}
          </p>
          {data.isPaid ? (
            <div className="w-max my-2 md:px-2 lg:px-2 px-1 md:text-md lg:text-md text-xs font-bold py-1 rounded-md text-green-400 border-[1px] border-green-400">
              <p>On Delivery</p>
            </div>
          ) : (
            <div className="w-max my-2 md:px-2 lg:px-2 px-1 lg:text-md text-xs font-bold py-1 rounded-md text-yellow-400 border-[1px] border-yellow-400">
              <p>Waiting Payment</p>
            </div>
          )}
        </div>
      </div>
      {/* action button */}
      <div className="flex items-center gap-3">
        <div className="flex items-center">
          {data.isPaid !== true ? (
            <ButtonDec
              handleDecClick={() => {
                decAmount(data.id);
              }}
              muteDecrement={muteDecrement}
            />
          ) : (
            <></>
          )}
          <div className="md:px-3 md:py-2 lg:px-3 lg:py-2 px-2 py-1 border-2 rounded-sm">
            {data.productAmount}
          </div>
          {data.isPaid !== true ? (
            <ButtonInc
              handleIncClick={() => {
                incAmount(data.id);
              }}
            />
          ) : (
            <></>
          )}
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
