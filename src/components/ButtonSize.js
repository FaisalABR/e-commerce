import React from "react";

const ButtonSize = ({ data, select, onSelected }) => {
  return (
    <button
      key={data.id}
      className={` lg:w-[45px] lg:h-[45px] md:w-[45px] md:h-[45px] w-[40px] h-[40px] rounded-md border-2 ${
        select ? "bg-my-navy text-white" : " bg-white text-my-navy"
      } font-semibold transition-all duration-300`}
      onClick={onSelected}
    >
      {data.size}
    </button>
  );
};

export default ButtonSize;
