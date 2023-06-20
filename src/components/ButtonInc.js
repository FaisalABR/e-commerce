import React from "react";

const ButtonInc = ({ handleIncClick, muteIncrement }) => {
  return (
    <button
      className={`px-3 py-2 border-2 rounded-sm ${
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
