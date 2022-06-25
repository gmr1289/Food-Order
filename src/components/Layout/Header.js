import React from "react";
import "./Header.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCart from "./HeaderCart";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className="header">
        <h1>React Meals</h1>
        <HeaderCart onClick={props.click}/>
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="media cannot be loaded" />
      </div>
    </React.Fragment>
  );
};

export default Header;
