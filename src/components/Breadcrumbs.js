import React from "react";

import { IoIosArrowForward } from "react-icons/io";

const Breadcrumbs = () => {
  return (
    <div className="flex flex-col px-1 md:flex-row lg:flex-row py-4 ">
      <ol className="flex items-center text-dark-grey">
        <li className="text-xs font-bold md:text-base lg:text-base cursor-pointer">
          Home
        </li>
        <span className="mx-3 text-gray-400">{<IoIosArrowForward />}</span>
        <li className="text-my-navy text-xs font-bold md:text-base lg:text-base cursor-pointer">
          Browse Products
        </li>
      </ol>
    </div>
  );
};

export default Breadcrumbs;
