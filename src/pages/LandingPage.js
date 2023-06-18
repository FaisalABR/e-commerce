import React from "react";

import MainLayout from "../main-layout/MainLayout";
import HeroSlide from "../components/HeroSlide";
import ProductCard from "../components/ProductCard";

import { GrDiamond } from "react-icons/gr";
import { FaTruckMoving } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  MdOutlineSentimentVerySatisfied,
  MdOutlineWarehouse,
} from "react-icons/md";
import { IconContext } from "react-icons";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Mousewheel, Keyboard } from "swiper";

const LandingPage = () => {
  const products = useSelector((state) => state.products);

  return (
    <MainLayout>
      <div className="my-[80px] w-full px-20">
        <HeroSlide />
        {/* Services */}
        <section className="w-full">
          {/* motto */}
          <div className="w-full my-10">
            <div className="flex items-center justify-between ">
              <h1 className="font-bold text-2xl">
                We Provide best <br /> customer experinces
              </h1>
              <div className="flex items-center">
                <div className="h-[80px] w-[2px] bg-my-navy"></div>
                <p className="font-base text-xs px-4 text-dark-grey">
                  We ensure our customers have the best shopping experience
                </p>
              </div>
            </div>
          </div>
          {/* service */}
          <div className="grid w-full grid-cols-4 gap-5">
            {/* items-service */}
            <div className="">
              <div className="w-[90px] h-[90px] rounded-md bg-my-grey my-1 flex justify-center items-center">
                <IconContext.Provider
                  value={{
                    size: "2em",
                    className: "global-class-name",
                  }}
                >
                  <div>
                    <GrDiamond />
                  </div>
                </IconContext.Provider>
              </div>
              <h1 className="font-bold text-md text-my-navy my-2">
                Original Products
              </h1>
              <p className="text-xs text-dark-grey">
                We provide money back guarantee if the product are not original
              </p>
            </div>
            {/* items-service */}
            <div className="">
              <div className="w-[90px] h-[90px] rounded-md bg-my-grey my-1 flex justify-center items-center">
                <IconContext.Provider
                  value={{
                    size: "2em",
                    className: "global-class-name",
                  }}
                >
                  <div>
                    <MdOutlineSentimentVerySatisfied />
                  </div>
                </IconContext.Provider>
              </div>
              <h1 className="font-bold text-md text-my-navy my-2">
                Satisfaction Guarantee
              </h1>
              <p className="text-xs text-dark-grey">
                Exchange the product you've purchased if it doesn't fit you
              </p>
            </div>
            {/* items-service */}
            <div className="">
              <div className="w-[90px] h-[90px] rounded-md bg-my-grey my-1 flex justify-center items-center">
                <IconContext.Provider
                  value={{
                    size: "2em",
                    className: "global-class-name",
                  }}
                >
                  <div>
                    <MdOutlineWarehouse />
                  </div>
                </IconContext.Provider>
              </div>
              <h1 className="font-bold text-md text-my-navy my-2">
                New Arrival Everyday
              </h1>
              <p className="text-xs text-dark-grey">
                We updates our collections almost everyday
              </p>
            </div>
            {/* items-service */}
            <div className="">
              <div className="w-[90px] h-[90px] rounded-md bg-my-grey my-1 flex justify-center items-center">
                <IconContext.Provider
                  value={{
                    size: "2em",
                    className: "global-class-name",
                  }}
                >
                  <div>
                    <FaTruckMoving />
                  </div>
                </IconContext.Provider>
              </div>
              <h1 className="font-bold text-md text-my-navy my-2">
                Fast and Free Shipping
              </h1>
              <p className="text-xs text-dark-grey">
                We offer fast and free shipping for our loyal customers
              </p>
            </div>
          </div>
        </section>
        {/* Currated picks */}
        <section className="my-10">
          <h1 className="text-3xl font-bold">Currated Products</h1>
          <div className="w-full grid grid-cols-4 gap-10 my-10">
            {/* currated items */}
            <div className="h-[250px] bg-my-red rounded-md flex items-end justify-center">
              <div className="w-9/12 py-3 px-3 my-2 flex items-center justify-between bg-my-grey  rounded-md cursor-pointer">
                <p className="font-semibold text-sm">Best Seller</p>
                <AiOutlineArrowRight />
              </div>
            </div>
            <Link to="/products/man">
              <div className="h-[250px] bg-my-red rounded-md flex items-end justify-center">
                <div className="w-10/12 py-3 px-3 my-2 flex items-center justify-between bg-my-grey rounded-md cursor-pointer">
                  <p className="font-semibold text-sm">Shop Men</p>
                  <AiOutlineArrowRight />
                </div>
              </div>
            </Link>
            <Link to="/products/woman">
              <div className="h-[250px] bg-my-red rounded-md flex items-end justify-center">
                <div className="w-10/12 py-3 px-3 my-2 flex items-center justify-between bg-my-grey rounded-md cursor-pointer">
                  <p className="font-semibold text-sm">Shop Women</p>
                  <AiOutlineArrowRight />
                </div>
              </div>
            </Link>
            <div className="h-[250px] bg-my-red rounded-md flex items-end justify-center">
              <div className="w-10/12 py-3 px-3 my-2 flex items-center justify-between bg-my-grey rounded-md cursor-pointer">
                <p className="font-semibold text-sm">Shop Casual</p>
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
        </section>
        {/* Featured Products */}
        <section className="my-5">
          <h1 className="text-3xl font-bold my-8">Featured Products</h1>

          <div className="w-full ">
            <Swiper
              spaceBetween={100}
              slidesPerView={3}
              mousewheel={true}
              keyboard={true}
              modules={[Mousewheel, Keyboard]}
              className="mySwiper"
            >
              {/* Features products item */}
              {products.map((item, i) => (
                <SwiperSlide>
                  <ProductCard key={i} data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        {/* Newsletter */}
        <section className="text-center my-24 w-full flex flex-col items-center">
          <h1 className="font-bold text-2xl">
            Subscribe to our newsletter to get updates <br /> to our latest
            collections
          </h1>
          <p className="text-dark-grey font-semibold text-sm my-3">
            Get 20% off on your first order just by subscribing to our
            newsletter
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
      </div>
    </MainLayout>
  );
};

export default LandingPage;
