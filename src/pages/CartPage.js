import React from "react";

import MainLayout from "../main-layout/MainLayout";

import CartCard from "../components/CartCard";

import { useSelector } from "react-redux";

import Breadcrumbs from "../components/Breadcrumbs";

const CartPage = () => {
  const orderedItems = useSelector((state) => state.carts);

  return (
    <MainLayout>
      <div className="px-20 my-[80px] w-full">
        <Breadcrumbs />
        {orderedItems.map((item) => (
          <CartCard key={item.cartId} data={item} />
        ))}
      </div>
    </MainLayout>
  );
};

export default CartPage;
