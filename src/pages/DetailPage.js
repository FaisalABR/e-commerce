import React from "react";

import MainLayout from "../main-layout/MainLayout";

import Breadcrumbs from "../components/Breadcrumbs";
import ProductCard from "../components/ProductCard";

const DetailPage = () => {
  return (
    <MainLayout>
      <div className="my-[80px] px-20">
        <Breadcrumbs />
        <section className="w-full flex  gap-10">
          {/* photo products */}
          <div className="w-6/12 h-[70vh] bg-blue-300"></div>
          {/* info products */}
          <div className="w-6/12 h-[80vh] ">
            <div className="mb-6">
              <h1 className="font-bold text-4xl mb-4">Autumn Dress</h1>
              <p className="font-semibold text-2xl">Rp200.000</p>
            </div>
            <hr />
            <div className="w-full flex items-start justify-between my-6">
              {/* size */}
              <div className="w-6/12">
                <h1 className="text-lg mb-2">Available Size</h1>
                <div className="flex gap-3 flex-wrap">
                  <button className="w-[45px] h-[45px] rounded-md border-2 bg-my-navy text-white font-semibold">
                    S
                  </button>
                  <button className="w-[45px] h-[45px] rounded-md border-2 bg-white text-my-navy font-semibold">
                    M
                  </button>
                  <button className="w-[45px] h-[45px] rounded-md border-2 bg-white text-my-navy font-semibold">
                    L
                  </button>
                  <button className="w-[45px] h-[45px] rounded-md border-2 bg-white text-my-navy font-semibold">
                    XL
                  </button>
                  <button className="w-[45px] h-[45px] rounded-md border-2 bg-white text-my-navy font-semibold">
                    XXL
                  </button>
                  <button className="w-[45px] h-[45px] rounded-md border-2 bg-white text-my-navy font-semibold">
                    XXXL
                  </button>
                </div>
              </div>
              {/* color */}
              <div className="w-6/12">
                <h1 className="text-lg mb-2">Available Color</h1>
                <div className="flex gap-3 flex-wrap">
                  <button className="w-[45px] h-[45px] rounded-md border-2 bg-my-navy text-white">
                    S
                  </button>
                  <button className="w-[45px] h-[45px] rounded-md border-2 bg-white text-my-navy">
                    M
                  </button>
                  <button className="w-[45px] h-[45px] rounded-md border-2 bg-white text-my-navy">
                    L
                  </button>
                </div>
              </div>
            </div>
            <hr />
            {/* Products Amount */}
            <div className="mt-6">
              <h1 className="font-bold text-lg">
                Last 1 left{" "}
                <span className="font-normal">- make it yours!</span>
              </h1>
              <div className="flex items-center gap-10 my-3">
                {/* inc/dec products */}
                <div className="flex items-center ">
                  <button className="p-3 border-2 rounded-sm">-</button>
                  <div className="p-3 border-2 rounded-sm">1</div>
                  <button className="p-3 border-2 rounded-sm ">+</button>
                </div>
                <button className="px-3 py-2 bg-my-navy rounded-md text-white">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full">
          <h1 className="text-3xl font-bold">Related Products</h1>

          <div className="grid grid-cols-4 gap-10 my-6">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default DetailPage;
