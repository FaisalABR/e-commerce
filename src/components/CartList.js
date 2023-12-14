import React from "react";
import CartCard from "./CartCard";

const CartList = ({ orderedItems }) => {
  return (
    <div className="flex flex-col">
      {orderedItems.map((item) => (
        <CartCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default CartList;
