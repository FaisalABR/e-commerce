import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";

import ProductCard from "../components/ProductCard";

import "swiper/css";

import { Mousewheel, Keyboard } from "swiper";

const Featured = () => {
  const products = useSelector((state) => state.products);

  return (
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
  );
};

export default Featured;
