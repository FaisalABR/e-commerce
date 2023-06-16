import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const HeroSlide = () => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="h-[80vh] w-full bg-dark-grey flex items-center justify-center rounded-md text-white text-4xl">
          1
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[80vh] w-full bg-dark-grey flex items-center justify-center rounded-md text-white text-4xl">
          2
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[80vh] w-full bg-dark-grey flex items-center justify-center rounded-md text-white text-4xl">
          3
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[80vh] w-full bg-dark-grey flex items-center justify-center rounded-md text-white text-4xl">
          4
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[80vh] w-full bg-dark-grey flex items-center justify-center rounded-md text-white text-4xl">
          5
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[80vh] w-full bg-dark-grey flex items-center justify-center rounded-md text-white text-4xl">
          6
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlide;
