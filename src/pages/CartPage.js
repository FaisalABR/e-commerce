import React from "react";

import MainLayout from "../main-layout/MainLayout";

import NoItem from "../components/NoItem";
import CartList from "../components/CartList";
import Breadcrumbs from "../components/Breadcrumbs";
import FormPayment from "../components/FormPayment";

import { useSelector } from "react-redux";

const CartPage = () => {
  const orderedItems = useSelector((state) => state.carts);

  return (
    <MainLayout>
      <div className="px-20 my-[80px] w-full">
        <Breadcrumbs />
        <div className="w-full flex justify-evenly items-start">
          {orderedItems.length !== 0 ? (
            <CartList orderedItems={orderedItems} />
          ) : (
            <NoItem />
          )}
          <FormPayment orderedItems={orderedItems} />
        </div>
      </div>
    </MainLayout>
  );
};

export default CartPage;
