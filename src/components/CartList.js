import React from "react";
import CartCard from "./CartCard";

const CartList = ({ orderedItems }) => {
  return (
    <div className="w-8/12 flex flex-col justify-center">
      {orderedItems.map((item) => (
        <CartCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default CartList;
