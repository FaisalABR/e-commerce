import { useEffect } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import CatalogPage from "./pages/CatalogPage";
import CategoryPage from "./pages/CategoryPage";
import DetailPage from "./pages/DetailPage";
import CartPage from "./pages/CartPage";
import BalancePage from "./pages/BalancePage";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<CatalogPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products/:category" element={<CategoryPage />} />
        <Route path="/products/:category/:productId" element={<DetailPage />} />
        <Route path="/balance" element={<BalancePage />} />
      </Routes>
    </>
  );
}

export default App;
