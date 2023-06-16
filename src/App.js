import "./App.css";

import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Catalog from "./pages/Catalog";
import Category from "./pages/Category";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<Catalog />} />
        <Route path="/products/:category" element={<Category />} />
        <Route path="/products/:category/:productId" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
