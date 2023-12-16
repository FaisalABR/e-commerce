import React from "react";

import NoItem from "../components/NoItem";
import CartList from "../components/CartList";
import Breadcrumbs from "../components/Breadcrumbs";
import FormPayment from "../components/FormPayment";

import { useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CartPage = () => {
  const orderedItems = useSelector((state) => state.carts);

  return (
    <>
      <Header noNavigation />
      <div className="md:px-20 lg:px-20 px-5 my-[80px] w-full">
        <Breadcrumbs />
        <div className="w-full flex flex-col md:flex-row lg:flex-row justify-evenly items-start">
          {orderedItems.length !== 0 ? (
            <CartList orderedItems={orderedItems} />
          ) : (
            <NoItem />
          )}
          <FormPayment orderedItems={orderedItems} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
