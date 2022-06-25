import React, { useContext } from "react";
import Modal from "../UI/Modal";
import "./Cart.css";
import CartContext from "../../store/CartContext";

const Cart = (props) => {
  const cartItems = useContext(CartContext);
  const order = cartItems.total > 0 ? true : false;
  const amt = cartItems.total.toFixed(2);

  return (
    <Modal>
      <ol>
        {cartItems.items.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <li>
                {item.name} amount : {item.amount} price :{item.price}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
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
