import React from "react";
import { IoIosArrowForward } from "react-icons/io";

import { Link, useParams } from "react-router-dom";

const asideNav = [
  {
    id: 5,
    display: "All Products",
    path: "products",
  },
  {
    id: 1,
    display: "Women",
    path: "women",
  },
  {
    id: 2,
    display: "Men",
    path: "men",
  },
  {
    id: 3,
    display: "Kids",
    path: "kids",
  },
  {
    id: 4,
    display: "Casual",
    path: "casual",
  },
];

const Aside = () => {
  const { category } = useParams();

  const active = asideNav.findIndex((e) => e.path === category);

  return (
    <div className="w-3/12 h-[1200px]">
      <aside className="w-full border-[1px] rounded-md border-my-grey shadow-md lg:px-5 md:px-5 px-1 py-2 h-fit sticky top-20">
        {asideNav.map((item, i) => (
          <Link
            to={`${
              item.display === "All Products"
                ? "/products"
                : `/products/${item.path}`
            }`}
          >
            <div
              className={`${
                active === i ? "bg-my-grey" : ""
              } flex items-center justify-between cursor-pointer lg:px-2  md:px-2 px-1 py-2 rounded-md my-3 `}
            >
              <h1 className="font-semibold lg:text-lg md:text-md text-xs">
                {item.display}
              </h1>
              <IoIosArrowForward />
            </div>
          </Link>
        ))}
      </aside>
    </div>
  );
};

React.memo(Aside);
export default Aside;
