import React from "react";

import MainLayout from "../main-layout/MainLayout";

import Breadcrumbs from "../components/Breadcrumbs";
import Aside from "../components/Aside";
import ProductCard from "../components/ProductCard";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Category = () => {
  const { category } = useParams();

  const products = useSelector((state) =>
    state.products.filter((item) => item.category.includes(category))
  );

  return (
    <MainLayout>
      <div className="my-[80px] px-20">
        {/* Breadcrumbs */}
        <Breadcrumbs />
        <div className="w-full  flex justify-between">
          {/* aside */}
          <Aside />
          {/* Products */}
          <section className="w-9/12  overflow-scroll-y grid grid-cols-3 gap-10 px-4">
            {products.map((item) => (
              <ProductCard data={item} />
            ))}
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default Category;
