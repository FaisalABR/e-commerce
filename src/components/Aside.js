import React from "react";
import { IoIosArrowForward } from "react-icons/io";

import { Link, useParams } from "react-router-dom";

const asideNav = [
  {
    id: 1,
    display: "Woman",
    path: "woman",
  },
  {
    id: 2,
    display: "Man",
    path: "man",
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

  console.log(category);

  const active = asideNav.findIndex((e) => e.path === category);

  return (
    <aside className="w-3/12 border-[1px] rounded-md border-my-grey shadow-md px-5 py-2 h-fit">
      {asideNav.map((item, i) => (
        <Link to={`/products/${item.path}`}>
          <div
            key={item.id}
            className={`${
              active === i ? "bg-my-grey" : ""
            } flex items-center justify-between cursor-pointer  px-2 py-2 rounded-md my-3 `}
          >
            <h1 className="font-semibold text-md">{item.display}</h1>
            <IoIosArrowForward />
          </div>
        </Link>
      ))}
    </aside>
  );
};

React.memo(Aside);
export default Aside;
