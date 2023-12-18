import React, { useState } from "react";
import { useSelector } from "react-redux";

import Breadcrumbs from "../components/Breadcrumbs";
import Aside from "../components/Aside";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { catalogBreadcrumbs } from "../utils/data";

const Catalog = () => {
  const [query, setQuery] = useState("");
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
                    <ProductCard key={i} data={item} />
                  ))
                : allProducts.map((item, i) => (
                    <ProductCard key={i} data={item} />
                  ))}
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Catalog;
