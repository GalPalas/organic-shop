import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "pages/home/Home";
import Header from "components/header/Header";
import ShoppingCart from "pages/shoppingCart/ShoppingCart";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
