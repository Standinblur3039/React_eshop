import "./App.css";
import Header from "./1Header_Comps.js/Header";
import Home from "./2Home_Comps.js/Home";
import Checkout from "./4Checkout_Comps/Checkout";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Checkout" element={<Checkout />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
