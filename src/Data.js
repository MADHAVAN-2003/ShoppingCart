import React, { createContext, useState } from "react";
import App from "./App";

export const Context = createContext();

function Data() {
  const MenProducts = [
    {
      name: "Wrogn Shirts",
      size: "M",
      price: "$50",
    },
    {
      name: "H&M Shirts",
      size: "M",
      price: "$50",
    },
    {
      name: "Denim Shirts",
      size: "M",
      price: "$50",
    },
    {
      name: "Roadstar Shirts",
      size: "M",
      price: "$50",
    },
  ];
  const WomenProducts = [
    {
      name: " Saree",
      color: "Orange",
      price: "$50",
    },
    {
      name: "PartyWear",
      color: "Violet",
      price: "$50",
    },
    {
      name: "Chutidar",
      color: "Meroon",
      price: "$50",
    },
    {
      name: "Jeans",
      color: "Pink",
      price: "$50",
    },
  ];

  const [cart, setCart] = useState([]);

  return (
    <Context.Provider value={{ MenProducts, WomenProducts, cart, setCart }}>
      <App />
    </Context.Provider>
  );
}

export default Data;
