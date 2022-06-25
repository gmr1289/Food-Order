import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCart = { items: [], total: 0 };

const cartReducer = (state, action) => {
  if (action.type === "add") {
    const upditem = state.items.concat(action.item);
    const updtotal = state.total + action.item.price * action.item.amount;
    return { items: upditem, total: updtotal };
  }
  return defaultCart;
};

const CartProvider = (props) => {
  const [cartState, dispatchAction] = useReducer(cartReducer, defaultCart);

  const add = (item) => {
    dispatchAction({ type: "add", item: item });
  };

  const remove = (id) => {};

  const cartContext = {
    items: cartState.items,
    total: cartState.total,
    addItem: add,
    removeItem: remove,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
