import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "components/header/Header";
import HomeScreen from "components/screens/HomeScreen";
import ProductScreen from "components/screens/ProductScreen";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/product/:id" element={<ProductScreen />}></Route>
          <Route path="/" element={<HomeScreen />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
