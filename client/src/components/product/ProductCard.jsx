import React from "react";

const ProductCard = ({ data }) => {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-3">
          <ul class="list-group">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
          </ul>
        </div>
        <div className="col-9">
          <div className="card-deck">
            <div className="row">
              {data.products.map((product) => (
                <div
                  className="card p-0 mx-2 my-2"
                  key={product._id}
                  style={{ width: "15rem" }}
                >
                  <a href={`/product/${product._id}`}>
                    <img
                      className="card-img-top"
                      src={product.imageUrl}
                      alt=""
                    ></img>
                  </a>

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
      </div>
    </div>
  );
};

export default ProductCard;
