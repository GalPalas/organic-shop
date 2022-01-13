import { Link } from "react-router-dom";
import { useFecthProducts } from "components/hooks/useFecthProducts";

const ProductCard = () => {
  const { products, status } = useFecthProducts();

  if (status === "idle" || status === "loading") {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {status === "success" && products.length ? (
        <div className="container p-5">
          <div className="row">
            <div className="col-3">
              <ul className="list-group">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
              </ul>
            </div>
            <div className="col-9">
              <div className="card-deck">
                <div className="row">
                  {products.map((product) => (
                    <div
                      className="card p-0 mx-2 my-2"
                      key={product._id}
                      style={{ width: "15rem" }}
                    >
                      <Link to={`/product/${product._id}`}>
                        <img
                          className="card-img-top"
                          src={product.imageUrl}
                          alt=""
                        ></img>
                      </Link>

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
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default ProductCard;
