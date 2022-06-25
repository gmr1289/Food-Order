import React, { useContext } from "react";
import "./MealsItem.css";
import ItemForm from "./ItemForm";
import CartContext from "../../../store/CartContext";

const MealsItem = (props) => {
  const cartctx = useContext(CartContext);
  const CartUpdate = (amount) => {
    cartctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">$ {props.price.toFixed(2)}</div>
      </div>
      <div>
        <ItemForm AddtoCart={CartUpdate} />
      </div>
    </li>
  );
};

export default MealsItem;
