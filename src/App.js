import "./App.css";

import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import CatalogPage from "./pages/CatalogPage";
import CategoryPage from "./pages/CategoryPage";
import DetailPage from "./pages/DetailPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<CatalogPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products/:category" element={<CategoryPage />} />
        <Route path="/products/:category/:productId" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
