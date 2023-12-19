import React, { useState } from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Aside from "../components/Aside";
import ProductCard from "../components/ProductCard";
import Notification from "../components/Notification";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { catalogBreadcrumbs } from "../utils/data";

const Category = () => {
  const { category } = useParams();
  const [showNotif, setShowNotif] = useState(false);

  const products = useSelector((state) =>
    state.products.filter((item) => item.category.includes(category))
  );

  return (
    <>
      <Header noNavigation />
      <div className="my-[80px] lg:px-20 md:px-10 px-5">
        <Breadcrumbs previousPath={catalogBreadcrumbs} activePath={category} />
        <div className="w-full  flex justify-between">
          <Aside />
          <section className="w-9/12  overflow-scroll-y grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 md:gap-10 lg:gap-10 gap-5 px-4">
            {products.map((item) => (
              <ProductCard data={item} setShowNotif={setShowNotif} />
            ))}
          </section>
        </div>
      </div>
      {showNotif && (
        <Notification>
          <p className="text-sm md:text-md lg:text-md text-green-400 font-semibold">
            Successfully Added to Cart
          </p>
          <p className="text-xs md:text-sm lg:text-sm text-green-400">
            Please check your cart page
          </p>
        </Notification>
      )}
      <Footer />
    </>
  );
};

export default Category;
