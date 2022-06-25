import React, { useContext } from "react";
import Modal from "../UI/Modal";
import "./Cart.css";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useContext(CartContext);

  const order = cartItems.total > 0;

  const amt = cartItems.total.toFixed(2);

  const Itemadd = (item) => {
    cartItems.addItem({ ...item, amount: 1 });
  };

  const Itemremove = (id) => {
    cartItems.removeItem(id);
  };

  return (
    <Modal>
      <ul className="cart-items">
        {cartItems.items.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              onAdd={Itemadd.bind(null, item)}
              onRemove={Itemremove.bind(null, item.id)}
            />
          );
        })}
      </ul>
      <div className="total">
        <span>Total Amount</span>

        <span>$ {amt}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.click}>
          Close
        </button>
        {order && <button className="button">Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
