import React, { useState } from "react";
import { useSelector } from "react-redux";

import Breadcrumbs from "../components/Breadcrumbs";
import Aside from "../components/Aside";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Notification from "../components/Notification";
import { catalogBreadcrumbs } from "../utils/data";

const Catalog = () => {
  const [query, setQuery] = useState("");
  const [showNotif, setShowNotif] = useState(false);
  const onQueryHandleChange = (e) => {
    setQuery(e.target.value);
  };
  const allProducts = useSelector((state) => state.products);
  const searchProduct = allProducts.filter((item) =>
    item.name.toLowerCase().includes(query)
  );

  console.log(searchProduct);

  return (
    <>
      <Header noNavigation={true} />
      <div className="my-[80px] lg:px-20 md:px-10 px-5">
        {/* Breadcrumbs */}
        <Breadcrumbs
          previousPath={catalogBreadcrumbs}
          activePath={"all products"}
        />
        <div className="w-full h-max flex ">
          {/* aside */}
          <Aside />
          {/* Products */}
          <div className="w-9/12 flex flex-col px-4">
            <input
              type="text"
              className="w-6/12 md:flex lg:flex h-[25px] bg-[#F2F3F7] focus:outline-none rounded-md p-4 my-3"
              placeholder="search your items.."
              value={query}
              onChange={onQueryHandleChange}
            />
            <section className="w-full  overflow-scroll-y grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 md:gap-10 lg:gap-10 gap-5">
              {query
                ? searchProduct.map((item, i) => (
                    <ProductCard
                      key={i}
                      data={item}
                      setShowNotif={setShowNotif}
                    />
                  ))
                : allProducts.map((item, i) => (
                    <ProductCard
                      key={i}
                      data={item}
                      setShowNotif={setShowNotif}
                    />
                  ))}
            </section>
          </div>
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

export default Catalog;
