import HomePage from "./Landing_page/home/HomePage";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Landing_page/signup/Signup";
import PricingPage from "./Landing_page/pricing/PricingPage";
import ProductPage from "./Landing_page/product/ProductPage";
import SupportPage from "./Landing_page/support/SupportPage";
import AboutPage from "./Landing_page/about/AboutPage";
import NavBar from "./Landing_page/Navbar";
import Footer from "./Landing_page/Footer";
import NotFound from "./Landing_page/Notfound";
import Login from "./Landing_page/login/Login";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/pricing" element={<PricingPage />}></Route>
        <Route path="/product" element={<ProductPage />}></Route>
        <Route path="/support" element={<SupportPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
