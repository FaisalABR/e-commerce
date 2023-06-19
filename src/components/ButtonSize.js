import React from "react";

const ButtonSize = ({ data, select, onSelected }) => {
  return (
    <button
      key={data.id}
      className={` w-[45px] h-[45px] rounded-md border-2 ${
        select ? "bg-my-navy text-white" : " bg-white text-my-navy"
      } font-semibold transition-all duration-300`}
      onClick={onSelected}
    >
      {data.size}
    </button>
  );
};

export default ButtonSize;
