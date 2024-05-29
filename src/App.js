import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import MensProduc from "./Components/MensProduc";
import WomensProduct from "./Components/WomensProduct";
import Cart from "./Components/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<MensProduc />} />
          <Route path="/women" element={<WomensProduct />} />
          <Route path="/cart" element={ <Cart/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
