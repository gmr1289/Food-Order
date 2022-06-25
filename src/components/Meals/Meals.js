import React from "react";
import Available from "./Available";
import MealSummary from "./MealSummary";

const Meals = () => {
  return (
    <h3>
      <MealSummary />
      <Available />
    </h3>
  );
};

export default Meals;
