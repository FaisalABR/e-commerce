import React from "react";

const ButtonColor = ({ data, select, onSelected }) => {
  return (
    <button
      key={data.id}
      className={`size w-[45px] h-[45px] rounded-md border-2 bg-[${
        data.color
      }] ${
        select && "border-my-navy"
      } font-semibold transition-all duration-300`}
      onClick={onSelected}
    ></button>
  );
};

export default ButtonColor;
