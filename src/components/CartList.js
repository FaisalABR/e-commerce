import React from "react";
import CartCard from "./CartCard";

const CartList = ({ orderedItems }) => {
  return (
    <div className="lg:w-8/12 md:w-8/12 w-full flex flex-col justify-center">
      {orderedItems.map((item) => (
        <CartCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default CartList;
