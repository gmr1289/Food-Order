import React, { useRef } from "react";
import "./ItemForm.css";

const ItemForm = (props) => {
  const amountref = useRef();

  const SubmitHandler = (event) => {
    event.preventDefault();
    let enteredamount = amountref.current.value;
    enteredamount = +enteredamount;
    if (enteredamount > 0 && enteredamount < 6) {
      props.AddtoCart(enteredamount);
    }
  };

  return (
    <form className="form">
      <div className="input">
        <label htmlFor="Amount">Amount</label>
        <input
          ref={amountref}
          id="Amount"
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        />
      </div>
      <button onClick={SubmitHandler}>+ Add </button>
    </form>
  );
};

export default ItemForm;
