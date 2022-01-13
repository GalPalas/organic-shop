import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "pages/home/Home";
import SignIn from "pages/signin/SignIn";
import Header from "components/header/Header";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
