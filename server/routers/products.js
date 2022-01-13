import express from "express";
import data from "../data.js";

const productsRouter = express.Router();

productsRouter.get("/", (req, res) => {
  res.send(data.products);
});

export default productsRouter;
