import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ _id, imageUrl, name, price }) => {
  return (
    <div className="card p-0 mx-2 my-2" style={{ width: "15rem" }}>
      <Link to={`/product/${_id}`}>
        <img className="card-img-top" src={imageUrl} alt=""></img>
      </Link>

      <div className="card-body p-0">
        <h5 className="card-title p-2">{name}</h5>
        <p className="card-text p-2">${price}</p>
        <button href="/#" className="btn btn-primary w-100">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
