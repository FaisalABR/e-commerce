import React from "react";

const Newsletter = () => {
  return (
    <section className="text-center my-24 w-full flex flex-col items-center">
      <h1 className="font-bold lg:text-2xl md:text-2xl text-xl ">
        Subscribe to our newsletter to get updates <br /> to our latest
        collections
      </h1>
      <p className="text-dark-grey font-semibold md:text-sm lg:text-sm text-xs my-5 lg:my-3 md:my-3">
        Get 20% off on your first order just by subscribing to our newsletter
      </p>
      <div className="md:w-5/12 lg:w-5/12 w-10/12  my-2">
        <input
          type="email"
          className="h-[25px] md:w-8/12 lg:w-8/12 w-9/12 bg-[#F2F3F7] focus:outline-none rounded-md p-4 "
          placeholder="Enter your email..."
        />
        <button className="lg:w-4/12 md:w-4/12 w-3/12 rounded-md bg-my-navy  py-1 text-white md:text-md lg:text-md text-sm font-semibold">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
