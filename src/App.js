import "./styles.css";

import { Routes, Route } from "react-router-dom";

// BELOW COMPONENTS
import Home from "./component/home";
import Navbar from "./component/navbar";
import Products from "./component/products";
import Product from "./component/product";
import Cart from "./component/cart";

export default function App() {
  return (
    <>
    
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/products" element={<Products/>} />
        <Route exact path="/products/:id" element={<Product/>} />
        <Route exact path="/cart" element={<Cart/>} />
      </Routes>
    </>
  );
}
