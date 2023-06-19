import React from "react";

const ButtonColor = ({ data, select, onSelected }) => {
  let bgColor;

  switch (data.color) {
    case "#FFD89C":
      bgColor = "bg-[#FFD89C]";
      break;
    case "#9BCDD2":
      bgColor = "bg-[#9BCDD2]";
      break;
    default:
      bgColor = "";
  }

  return (
    <button
      key={data.id}
      className={`size w-[35px] h-[35px] rounded-full bg-red-300 border-[5px]  ${bgColor} ${
        select ? "border-my-navy" : ""
      } font-semibold transition-all duration-300`}
      onClick={onSelected}
    ></button>
  );
};

export default ButtonColor;
