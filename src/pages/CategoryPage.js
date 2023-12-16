import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Aside from "../components/Aside";
import ProductCard from "../components/ProductCard";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Category = () => {
  const { category } = useParams();

  const products = useSelector((state) =>
    state.products.filter((item) => item.category.includes(category))
  );

  return (
    <>
      <Header noNavigation />
      <div className="my-[80px] lg:px-20 md:px-10 px-5">
        <Breadcrumbs />
        <div className="w-full  flex justify-between">
          <Aside />
          <section className="w-9/12  overflow-scroll-y grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 md:gap-10 lg:gap-10 gap-5 px-4">
            {products.map((item) => (
              <ProductCard data={item} />
            ))}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Category;
