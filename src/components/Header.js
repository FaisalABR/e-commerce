import React, { useEffect, useRef, useState } from "react";

import { GoPerson } from "react-icons/go";
import { RiShoppingCartLine } from "react-icons/ri";

import { Link, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

const Header = ({
  scrollToService,
  scrollToCurrated,
  scrollToFeature,
  noNavigation,
}) => {
  const [bgActive, setBgActive] = useState(false);
  const [query, setQuery] = useState("");

  const { pathname } = useLocation();

  const headerRef = useRef();

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const onQueryHandleChange = (e) => {
    setQuery(e.target.value);
  };

  const productAmount = carts.length;

  return (
    <nav
      ref={headerRef}
      className={`${
        bgActive ? "bg-my-navy py-7 text-white" : "py-8"
      } fixed top-0 left-0 right-0 h-[30px] flex items-center justify-between  md:px-20 lg:px-20 px-5 text-my-navy z-50 transition-all`}
    >
      <div className="font-bold text-2xl">
        <Link to="/">DripShop</Link>
      </div>
      <div>
        {noNavigation ? (
          <></>
        ) : (
          <ul className="hidden gap-8 font-medium md:flex lg:flex">
            <li
              className=" transition-all cursor-pointer hover:text-indigo-800"
              onClick={scrollToService}
            >
              Service
            </li>
            <li
              className=" transition-all cursor-pointer hover:text-indigo-300"
              onClick={scrollToCurrated}
            >
              Currated
            </li>
            <li
              className=" transition-all cursor-pointer hover:text-indigo-300"
              onClick={scrollToFeature}
            >
              Featured
            </li>
          </ul>
        )}
      </div>
      <div className="flex items-center gap-3">
        <input
          type="text"
          className="hidden md:flex lg:flex h-[25px] bg-[#F2F3F7] focus:outline-none rounded-md p-4 "
          placeholder="search your items.."
          value={query}
          onChange={onQueryHandleChange}
        />
        <div className="flex gap-5 items-center">
          <GoPerson />
          <div className="relative cursor-pointer">
            <Link to="/cart">
              <RiShoppingCartLine />
            </Link>
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
