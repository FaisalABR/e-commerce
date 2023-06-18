import React, { useState } from "react";

import MainLayout from "../main-layout/MainLayout";

import Breadcrumbs from "../components/Breadcrumbs";
import ProductCard from "../components/ProductCard";
import ButtonSize from "../components/ButtonSize";
import ButtonColor from "../components/ButtonColor";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { productId } = useParams();
  const [isSelectSize, setIsSelectSize] = useState(0);

  const product = useSelector((state) =>
    state.products.find(
      (product) => parseInt(product.id) === parseInt(productId)
    )
  );

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
              <h1 className="font-bold text-4xl mb-4">{product?.name}</h1>
              <p className="font-semibold text-2xl">Rp{product?.price}</p>
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
                    <ButtonColor data={item} />
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
            {}
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
