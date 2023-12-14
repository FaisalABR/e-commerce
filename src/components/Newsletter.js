import React from "react";

const Newsletter = () => {
  return (
    <section className="text-center my-24 w-full flex flex-col items-center">
      <h1 className="font-bold text-2xl">
        Subscribe to our newsletter to get updates <br /> to our latest
        collections
      </h1>
      <p className="text-dark-grey font-semibold text-sm my-3">
        Get 20% off on your first order just by subscribing to our newsletter
      </p>
      <div className="w-5/12 my-2">
        <input
          type="email"
          className="h-[25px] w-8/12 bg-[#F2F3F7] focus:outline-none rounded-md p-4 "
          placeholder="Enter your email..."
        />
        <button className="w-4/12 rounded-md bg-my-navy  py-1 text-white text-md font-semibold">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
