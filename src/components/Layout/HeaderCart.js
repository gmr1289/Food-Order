import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCart.css";
import CartContext from "../../store/CartContext";

const HeaderCart = (props) => {
  const cartctx = useContext(CartContext);

  const NoOfItems = cartctx.items.reduce((no, item) => {
    return no + item.amount;
  }, 0);

  return (
    <button className="button" onClick={props.onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{NoOfItems}</span>
    </button>
  );
};

export default HeaderCart;
