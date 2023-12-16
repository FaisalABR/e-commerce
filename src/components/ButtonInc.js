import React from "react";

const ButtonInc = ({ handleIncClick, muteIncrement }) => {
  return (
    <button
      className={`md:px-3 md:py-2 lg:px-3 lg:py-2 px-2 py-1 border-2 rounded-sm ${
        muteIncrement ? "bg-white text-my-navy" : "bg-my-navy text-white"
      }`}
      onClick={handleIncClick}
      disabled={muteIncrement}
    >
      +
    </button>
  );
};

export default ButtonInc;
