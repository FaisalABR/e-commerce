import React, { useEffect, useRef, useState } from "react";

import { GoPerson } from "react-icons/go";
import { RiShoppingCartLine } from "react-icons/ri";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Header = () => {
  const headerRef = useRef();
  const [bgActive, setBgActive] = useState(false);

  const carts = useSelector((state) => state.carts);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        setBgActive(true);
      } else {
        setBgActive(false);
      }
    };

    window.addEventListener("scroll", shrinkHeader);

    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  });

  const productAmount = carts.length;

  return (
    <nav
      ref={headerRef}
      className={`${
        bgActive ? "bg-my-navy py-7 text-white" : "py-8"
      } fixed top-0 left-0 right-0 h-[30px] flex items-center justify-between  px-20 text-my-navy z-50 transition-all`}
    >
      <div className="font-bold text-2xl">
        <Link to="/">DripShop</Link>
      </div>
      <div>
        <ul className="flex gap-8 font-medium">
          <li className=" transition-all cursor-pointer hover:text-indigo-800">
            Shop
          </li>
          <li className=" transition-all cursor-pointer hover:text-indigo-300">
            Shop
          </li>
          <li className=" transition-all cursor-pointer hover:text-indigo-300">
            Shop
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <input
          type="text"
          className="h-[25px] bg-[#F2F3F7] focus:outline-none rounded-md p-4 "
          placeholder="search your items.."
        />
        <div className="flex gap-5 items-center">
          <GoPerson />
          <div className="relative cursor-pointer">
            <RiShoppingCartLine />
            {/* badge */}
            {productAmount > 0 && (
              <span className="absolute bottom-2 left-2 w-[22px] h-[22px] bg-red-500 text-white rounded-full text-xs font-semibold flex items-center justify-center">
                {productAmount}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
