import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const HeroSlide = () => {
  const dataImage = [
    {
      id: 1,
      imageUrl: "hero_slide/hero-slide-1.jpg",
    },
    {
      id: 2,
      imageUrl: "hero_slide/hero-slide-2.jpg",
    },
    {
      id: 3,
      imageUrl: "hero_slide/hero-slide-3.jpg",
    },
    {
      id: 4,
      imageUrl: "hero_slide/hero-slide-4.jpg",
    },
    {
      id: 5,
      imageUrl: "hero_slide/hero-slide-5.jpg",
    },
    {
      id: 6,
      imageUrl: "hero_slide/hero-slide-6.jpg",
    },
  ];

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

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
      {dataImage.map((item) => (
        <SwiperSlide>
          <img
            src={PF + item.imageUrl}
            alt={item.imageUrl}
            className=" h-[80vh] lg:h-[80vh] md:h-[80vh] w-full object-cover object-top  rounded-md text-white text-4xl "
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlide;
