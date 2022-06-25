import React, { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [cart, setCart] = useState(false);

  const showCart = () => {
    setCart(true);
  };

  const hideCart = () => {
    setCart(false);
  };

  return (
    <CartProvider>
      {cart && <Cart click={hideCart} />}
      <Header click={showCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
