import React from "react";

import MainLayout from "../main-layout/MainLayout";

import Breadcrumbs from "../components/Breadcrumbs";
import Aside from "../components/Aside";
import ProductCard from "../components/ProductCard";

const Catalog = () => {
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
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default Catalog;
