import React, { useState } from "react";

import NoItem from "../components/NoItem";
import CartList from "../components/CartList";
import Breadcrumbs from "../components/Breadcrumbs";
import FormPayment from "../components/FormPayment";
import Notification from "../components/Notification";

import { useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { cartBreadcrumbs } from "../utils/data";

const CartPage = () => {
  const [showNotif, setShowNotif] = useState(false);
  const [showBadNotif, setShowBadNotif] = useState(false);
  const orderedItems = useSelector((state) => state.carts);

  return (
    <>
      <Header noNavigation />
      <div className="md:px-20 lg:px-20 px-5 my-[80px] w-full">
        <Breadcrumbs previousPath={cartBreadcrumbs} activePath={"Cart"} />
        <div className="w-full flex flex-col md:flex-row lg:flex-row justify-evenly items-start">
          {orderedItems.length !== 0 ? (
            <CartList orderedItems={orderedItems} />
          ) : (
            <NoItem />
          )}
          <FormPayment
            orderedItems={orderedItems}
            setShowNotif={setShowNotif}
            setShowBadNotif={setShowBadNotif}
          />
        </div>
      </div>
      {showNotif && (
        <Notification>
          <p className="text-sm md:text-md lg:text-md text-green-400 font-semibold">
            Payment Succesfull
          </p>
          <p className="text-xs md:text-sm lg:text-sm text-green-400">
            Your item is on delivery.
          </p>
        </Notification>
      )}
      {showBadNotif && (
        <Notification bad>
          <p className="text-sm md:text-md lg:text-md text-red-400 font-semibold">
            Payment failed
          </p>
          <p className="text-xs md:text-sm lg:text-sm text-red-400">
            You are insufficient balance, please top up on My Balance.
          </p>
        </Notification>
      )}
      <Footer />
    </>
  );
};

export default CartPage;
