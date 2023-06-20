import React from "react";

const ButtonDec = ({ muteDecrement, handleDecClick }) => {
  return (
    <button
      className={`px-3 py-2 border-2 rounded-sm ${
        muteDecrement ? "bg-white text-my-navy" : "bg-my-navy text-white"
      }`}
      onClick={handleDecClick}
      disabled={muteDecrement}
    >
      -
    </button>
  );
};

export default ButtonDec;
