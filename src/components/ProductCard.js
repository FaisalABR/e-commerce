import React from "react";

import { IconContext } from "react-icons";
import { BsCartPlusFill } from "react-icons/bs";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { IDR } from "../utils/data";
import { useDispatch } from "react-redux";

import { cartAdded } from "../utils/reducer/cartSlice";

const ProductCard = ({ data, setShowNotif }) => {
  const { category } = useParams();

  const defaultSize = 1;
  const defaultColor = 1;
  const defaultAmount = 1;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      cartAdded(
        data.name,
        data.id,
        defaultAmount,
        data.price,
        defaultSize,
        defaultColor,
        data.imageUrl
      )
    );

    setShowNotif(true);
    setTimeout(() => {
      setShowNotif(false);
    }, 4000);
  };

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div data-aos="fade-up">
      {/* Pathnya akan dynamic */}
      <Link to={`/products/${category}/${data?.id}`}>
        <img
          src={PF + data.imageUrl}
          alt={data.name}
          className="h-[200px] md:h-[250px] lg:h-[300px] bg-emerald-400 mb-5 rounded-md object-cover w-full"
        />
      </Link>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold md:text-sm lg:text-sm text-xs line-clamp-1 capitalize">
            {data?.name}
          </h1>
          <p className="text-xs mt-2">{IDR.format(data?.price)}</p>
        </div>
        <div
          className="w-[45px] h-[45px] bg-my-navy rounded-md cursor-pointer flex justify-center items-center transition-all hover:bg-red-400"
          onClick={handleAddToCart}
        >
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
