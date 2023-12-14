import React, { useState } from "react";

import MainLayout from "../main-layout/MainLayout";

import Breadcrumbs from "../components/Breadcrumbs";
import ProductCard from "../components/ProductCard";
import ButtonSize from "../components/ButtonSize";
import ButtonColor from "../components/ButtonColor";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Mousewheel, Keyboard } from "swiper";

import { cartAdded } from "../utils/reducer/cartSlice";
import { IDR } from "../utils/data";

const DetailPage = () => {
  const { productId } = useParams();
  const [isSelectSize, setIsSelectSize] = useState(1);
  const [isSelectColor, setIsSelectColor] = useState(1);
  const [amount, setAmount] = useState(1);

  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.products.find(
      (product) => parseInt(product.id) === parseInt(productId)
    )
  );

  // need to fixed
  const relatedProducts = useSelector((state) =>
    state.products.filter((item) => item.category.includes(product.category[0]))
  );

  const size = product.size.find((item) => item.id === isSelectSize);
  const color = product.color.find((item) => item.id === isSelectColor);

  const handleIncClick = () => {
    setAmount(amount + 1);
  };

  const handleDecClick = () => {
    setAmount(amount - 1);
  };

  const handleAddToCart = () => {
    dispatch(
      cartAdded(
        product.name,
        product.id,
        amount,
        product.price,
        size.size,
        color.color
      )
    );
  };

  const muteDecrement = amount === 1;
  const muteIncrement = amount === product.stocks;

  return (
    <MainLayout>
      <div className="my-[80px]  px-20">
        <Breadcrumbs />

        <section className="w-full flex  gap-10">
          {/* photo products */}
          <div className="w-6/12 h-[70vh] bg-blue-300"></div>
          {/* info products */}
          <div className="w-6/12 h-[80vh] ">
            <div className="mb-6">
              <h1 className="font-bold text-4xl mb-4">{product?.name}</h1>
              <p className="font-semibold text-2xl">
                {IDR.format(product?.price)}
              </p>
            </div>
            <hr />
            <div className="w-full flex items-start justify-between my-6">
              {/* size */}
              <div className="w-6/12">
                <h1 className="text-lg mb-2">Available Size</h1>
                <div className="flex gap-3 flex-wrap">
                  {product.size.map((item) => (
                    <ButtonSize
                      key={item.id}
                      data={item}
                      select={isSelectSize === item.id}
                      onSelected={() => setIsSelectSize(item.id)}
                    />
                  ))}
                </div>
              </div>
              {/* color */}
              <div className="w-6/12">
                <h1 className="text-lg mb-2">Available Color</h1>
                <div className="flex gap-3 flex-wrap">
                  {product.color.map((item) => (
                    <ButtonColor
                      data={item}
                      select={isSelectColor === item.id}
                      onSelected={() => setIsSelectColor(item.id)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <hr />
            {/* Products Amount */}
            <div className="mt-6">
              <h1 className="font-bold text-lg">
                Last {product.stocks} left{" "}
                <span className="font-normal">- make it yours!</span>
              </h1>
              <div className="flex items-center gap-10 my-3">
                {/* inc/dec products */}
                <div className="flex items-center ">
                  <button
                    className={`p-3 border-2 rounded-sm ${
                      muteDecrement
                        ? "bg-white text-my-navy"
                        : "bg-my-navy text-white"
                    }`}
                    onClick={handleDecClick}
                    disabled={muteDecrement}
                  >
                    -
                  </button>
                  <div className="p-3 border-2 rounded-sm">{amount}</div>
                  <button
                    className={`p-3 border-2 rounded-sm ${
                      muteIncrement
                        ? "bg-white text-my-navy"
                        : "bg-my-navy text-white"
                    }`}
                    onClick={handleIncClick}
                    disabled={muteIncrement}
                  >
                    +
                  </button>
                </div>
                <button
                  className="px-3 py-2 bg-my-navy rounded-md text-white"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full">
          <h1 className="text-3xl font-bold my-3">Related Products</h1>

          <div className="w-full mt-10">
            <Swiper
              spaceBetween={30}
              slidesPerView={4}
              mousewheel={true}
              keyboard={true}
              modules={[Mousewheel, Keyboard]}
              className="mySwiper"
            >
              {/* Features products item */}
              {relatedProducts.map((item, i) => (
                <SwiperSlide>
                  <ProductCard key={i} data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default DetailPage;
