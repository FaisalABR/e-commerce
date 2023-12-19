import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const CurratedItem = ({ curracy, path, imageClass }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Link to={path}>
        <div
          className={`h-[250px] bg-my-red rounded-md flex items-end justify-center ${imageClass} bg-cover bg-center`}
        >
          <div className="w-10/12 py-3 px-3 my-2 flex items-center justify-between bg-my-grey rounded-md cursor-pointer">
            <p className="font-semibold text-sm">{curracy}</p>
            <AiOutlineArrowRight />
          </div>
        </div>
      </Link>
    </>
  );
};

export default CurratedItem;
