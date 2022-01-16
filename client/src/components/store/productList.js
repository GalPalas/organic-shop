import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { productListRequested } from "./actions";

const productList = createSlice({
  name: "productList",
  initialState: {
    status: "idle",
    products: [],
  },
  reducers: {
    productListSuccess: (productsList, action) => {
      productsList.products = action.payload;
      productsList.status = "success";
    },
    productListFailed: (productsList, action) => {
      productsList.error = action.payload;
      productsList.status = "error";
    },
  },
});

export const { productListSuccess, productListFailed } = productList.actions;
export default productList.reducer;

/* Put productsList data in store (State) */
export const fetchProducts = () => (dispatch) => {
  return dispatch(
    productListRequested({
      url: "/api/products",
      onSuccess: productListSuccess.type,
      onError: productListFailed.type,
    })
  );
};

export const productsInStore = () =>
  createSelector(
    (state) => state.entities.productsList,
    (productsList) => productsList
  );
