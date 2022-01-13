import { useState, useEffect } from "react";
import axios from "axios";

export const useFecthProducts = () => {
  const [status, setStatus] = useState("idle");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setStatus("loading");
      try {
        const { data } = await axios.get("/api/products");
        setStatus("success");
        setProducts(data);
      } catch (e) {
        setStatus("error");
      }
    };
    fetchProducts();
  }, []);

  return { products, status };
};
