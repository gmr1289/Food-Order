import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCart = { items: [], total: 0 };

const cartReducer = (state, action) => {
  if (action.type === "add") {
    const updtotal = state.total + action.item.price * action.item.amount;
    const itemExistIndex = state.items.findIndex(
      (item) => action.item.id === item.id
    );

    const itemExist = state.items[itemExistIndex];

    let upditems;
    if (itemExist) {
      const upditem = {
        ...itemExist,
        amount: itemExist.amount + action.item.amount,
      };
      upditems = [...state.items];
      upditems[itemExistIndex] = upditem;
    } else {
      upditems = state.items.concat(action.item);
    }
    console.log(state.items);
    return { items: upditems, total: updtotal };
  }

  if (action.type === "remove") {
    const itemExistIndex = state.items.findIndex(
      (item) => action.id === item.id
    );

    const itemExist = state.items[itemExistIndex];
    const updtotal = state.total - itemExist.price;
    let upditems;

    if (itemExist.amount === 1) {
      upditems = state.items.filter((item) => item.id !== action.id);
    } else {
      const upditem = { ...itemExist, amount: itemExist.amount - 1 };
      upditems = [...state.items]; 
      upditems[itemExistIndex] = upditem;
    }
    return { items: upditems, total: updtotal };
  }

  return defaultCart;
};

const CartProvider = (props) => {
  const [cartState, dispatchAction] = useReducer(cartReducer, defaultCart);

  const add = (item) => {
    dispatchAction({ type: "add", item: item });
  };

  const remove = (id) => {
    dispatchAction({ type: "remove", id: id });
  };

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
