import React from "react";

const Footer = () => {
  return (
    <div className=" w-full  bg-my-grey md:px-20 lg:px-20 px-5 py-8 mt-10 relative bottom-0">
      <div className="flex md:flex-row lg:flex-row flex-col md:items-center lg:items-center items-start justify-between gap-10 py-10">
        <div>
          <p className="text-3xl font-bold">DripShop</p>
          <p className="text-xs text-dark-grey my-2">
            Specializing in providing high quality, <br /> and comfort products
          </p>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row gap-10">
          <div>
            <h1 className="font-bold">SHOP</h1>
            <ul className=" text-dark-grey text-xs">
              <li className="my-2">All Collections</li>
              <li className="my-2">Winter Edition</li>
              <li className="my-2">Discount</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold">SHOP</h1>
            <ul className=" text-dark-grey text-xs">
              <li className="my-2">All Collections</li>
              <li className="my-2">Winter Edition</li>
              <li className="my-2">Discount</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold">SHOP</h1>
            <ul className=" text-dark-grey text-xs">
              <li className="my-2">All Collections</li>
              <li className="my-2">Winter Edition</li>
              <li className="my-2">Discount</li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="font-bold">PAYMENT METHOD</h1>
          <div></div>
        </div>
      </div>
      <hr className="border-[1px] border-solid border-dark-grey mt-11" />
      <div>
        <p className="text-center my-2 text-dark-grey font-medium text-sm">
          This project is for practice purpose
        </p>
      </div>
    </div>
  );
};

export default Footer;
