import axios from "axios";
import { productListRequested } from "../actions";

const products =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== productListRequested.type) return next(action);

    const { url, onSuccess, onError } = action.payload;

    next(action);

    try {
      const { data } = await axios.get(url);
      if (onSuccess) dispatch({ type: onSuccess, payload: data });
    } catch (error) {
      if (onError) dispatch({ type: onError, payload: error.message });
    }
  };

export default products;
