import { combineReducers } from "redux";
import productsReducer from "./productList";

export default combineReducers({
  productsList: productsReducer,
});
