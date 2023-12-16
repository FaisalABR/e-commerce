import React from "react";
import { useSelector } from "react-redux";

import Breadcrumbs from "../components/Breadcrumbs";
import Aside from "../components/Aside";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Catalog = () => {
  const allProducts = useSelector((state) => state.products);

  console.log(allProducts);

  return (
    <>
      <Header noNavigation={true} />
      <div className="my-[80px] lg:px-20 md:px-10 px-5">
        {/* Breadcrumbs */}
        <Breadcrumbs />
        <div className="w-full h-max flex ">
          {/* aside */}
          <Aside />
          {/* Products */}
          <section className="w-9/12  overflow-scroll-y grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 md:gap-10 lg:gap-10 gap-5 px-4">
            {allProducts.map((item, i) => (
              <ProductCard key={i} data={item} />
            ))}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Catalog;
