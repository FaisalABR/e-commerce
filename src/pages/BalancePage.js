import React, { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import { useSelector, useDispatch } from "react-redux";
import { topUp } from "../utils/reducer/paymentSlice";
import { IDR } from "../utils/data";
import { balanceBreadcrumbs } from "../utils/data";

const BalancePage = () => {
  const [amount, setAmount] = useState(0);
  const balanceAmount = useSelector((state) => state.payment.balance);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  console.log(amount + balanceAmount);

  const handleTopUpButton = (amount) => {
    dispatch(topUp({ amount }));
  };

  return (
    <>
      <Header noNavigation />
      <div className="md:px-20 lg:px-20 px-5 my-[80px] w-full">
        <Breadcrumbs previousPath={balanceBreadcrumbs} activePath={"Balance"} />
        <div className="w-full md:w-7/12 lg:w-6/12 border-2 rounded-lg px-2 py-5 my-5">
          <h2 className="font-bold text-lg">Hi, Faisal</h2>
          <p>Your balance: {IDR.format(balanceAmount)}</p>
        </div>
        <div className="flex flex-col md:flex-col lg:flex-col">
          <input
            type="number"
            className="h-[25px] md:w-8/12 lg:w-6/12 w-9/12 bg-[#F2F3F7] focus:outline-none rounded-md p-4 "
            placeholder="Input your balance..."
            value={amount}
            onChange={handleChange}
          />
          <button
            className="w-[200px] mt-7  rounded-md bg-my-navy  py-3   text-white text-md font-semibold hover:bg-red-500 transition-all"
            onClick={() => handleTopUpButton(amount)}
          >
            Top Up
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BalancePage;
