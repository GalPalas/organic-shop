import React from "react";

const ProductCard = ({ data }) => {
  return (
    <div className="container p-5">
      <div className="card-deck">
        <div className="row">
          {data.products.map((product) => (
            <div
              className="card p-0 mx-2 my-2"
              key={product._id}
              style={{ width: "15rem" }}
            >
              <img className="card-img-top" src={product.imageUrl} alt=""></img>
              <div className="card-body p-0">
                <h5 className="card-title p-2">{product.name}</h5>
                <p className="card-text p-2">${product.price}</p>
                <button href="/#" className="btn btn-primary w-100">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
