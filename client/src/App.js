import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "pages/home/Home";
import Login from "pages/login/Login";
import SignIn from "pages/signin/SignIn";
import Header from "components/header/Header";
import Register from "pages/register/Register";
import ShoppingCart from "pages/shoppingCart/ShoppingCart";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
