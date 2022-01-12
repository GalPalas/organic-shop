import React from "react";
import ProductCard from "components/product/ProductCard";
import data from "../../data.js";

const Home = () => {
  return (
    <div className="container">
      <ProductCard data={data} />
    </div>
  );
};

export default Home;
