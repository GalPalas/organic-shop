import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, productsInStore } from "components/store/productList";
import Spinner from "components/shared/Spinner";
import Categories from "components/Categories.jsx";
import ProductCard from "components/ProductCard";

const ProductsGrid = () => {
  const dispatch = useDispatch();

  const { products, status } = useSelector(productsInStore());

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      {status === "success" && products.length ? (
        <div className="container p-5">
          <div className="row">
            <div className="col-3">
              <Categories />
            </div>
            <div className="col-9">
              <div className="card-deck">
                <div className="row">
                  {products.map((product) => (
                    <ProductCard key={product._id} {...product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default ProductsGrid;
