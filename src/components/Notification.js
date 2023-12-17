import React from "react";

const Notification = (props) => {
  return (
    <div className="fixed z-50 top-20 right-3 lg:top-20 lg:right-10 md:px-5 lg:px-5 px-2 py-3  border-2 bg-white border-green-400 rounded-md ">
      {props.children}
    </div>
  );
};

export default Notification;
