import React from "react";
import { useSelector } from "react-redux";

import MainLayout from "../main-layout/MainLayout";

import Breadcrumbs from "../components/Breadcrumbs";
import Aside from "../components/Aside";
import ProductCard from "../components/ProductCard";

const Catalog = () => {
  const allProducts = useSelector((state) => state.products);

  console.log(allProducts);

  return (
    <MainLayout>
      <div className="my-[80px] px-20">
        {/* Breadcrumbs */}
        <Breadcrumbs />
        <div className="w-full flex ">
          {/* aside */}
          <Aside />
          {/* Products */}
          <section className="w-9/12  overflow-scroll-y grid grid-cols-3 gap-10 px-4">
            {allProducts.map((item, i) => (
              <ProductCard key={i} data={item} />
            ))}
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default Catalog;
