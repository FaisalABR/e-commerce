import React from "react";

import { IconContext } from "react-icons";
import { BsCartPlusFill } from "react-icons/bs";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { IDR } from "../utils/data";

const ProductCard = ({ data }) => {
  const { category } = useParams();

  return (
    <div>
      {/* Pathnya akan dynamic */}
      <Link to={`/products/${category}/${data?.id}`}>
        <div className="h-[200px] md:h-[250px] lg:h-[300px] bg-emerald-400 mb-5 rounded-md"></div>
      </Link>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold md:text-sm lg:text-sm text-xs line-clamp-2">
            {data?.name}
          </h1>
          <p className="text-xs mt-2">{IDR.format(data?.price)}</p>
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
