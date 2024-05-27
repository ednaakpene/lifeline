import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/products/products";
import Serve from "../../components/serv/Serve";
import Footer from "../../components/footer/Footer";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Serve />
      <Footer />
    </>
  );
};

export default Landing;
