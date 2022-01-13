import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { OAuth2Client } from "google-auth-library";
import userRouter from "./routers/user.js";
import productsRouter from "./routers/products.js";

dotenv.config();
const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);

const app = express();
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URL ||
    "mongodb+srv://Gal:KfjZDmQibBb0Xybu@store.dvf8b.mongodb.net/GalOrganicStore?retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => {
  console.log("conneted to database");
});

app.use("/api/products", productsRouter);
app.use("/api/users", userRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

/*----------------------------------------------------------------------------------------- */
const users = [];

function upsert(array, item) {
  const i = array.findIndex((_item) => _item.email === item.email);
  if (i > -1) array[i] = item;
  else array.push(item);
}

app.post("/api/google-login", async (req, res) => {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });
  const { name, email, picture } = ticket.getPayload();
  upsert(users, { name, email, picture });
  res.status(201);
  res.json({ name, email, picture });
});
/*----------------------------------------------------------------------------------------- */

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `Server is ready at http://localhost:${process.env.PORT || 5000}`
  );
});
