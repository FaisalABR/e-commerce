import React from "react";

import { IconContext } from "react-icons";
import { BsCartPlusFill } from "react-icons/bs";

import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  return (
    <div>
      {/* Pathnya akan dynamic */}
      <Link to="/products/man/123">
        <div className="h-[300px] bg-emerald-400 mb-5 rounded-md"></div>
      </Link>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-sm">{data.name}</h1>
          <p className="text-xs mt-2">Rp{data.price}</p>
        </div>
        <div className="w-[45px] h-[45px] bg-my-navy rounded-md cursor-pointer flex justify-center items-center">
          <IconContext.Provider
            value={{
              color: "white",
              size: "1.5em",
              className: "global-class-name",
            }}
          >
            <div>
              <BsCartPlusFill />
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
