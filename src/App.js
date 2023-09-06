import "./assets/css/main.css";
import Footer from "./includes/Footer";
import Header from "./includes/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import $ from "jquery";

function App() {

  const dispatch = useDispatch();


  const currentPage = useSelector((state) => state.constant.currentPage);
  const PageTitles = useSelector((state) => state.constant.currentPageTitle);

  useEffect(() => {
    // updating page titles
    $("#app-title").text(PageTitles);
  });

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/details" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />

          {/* 404 */}
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
