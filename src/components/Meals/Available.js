import React from "react";
import Card from "../UI/Card";
import "./Available.css";
import MealsItem from "./MealItem/MealsItem";
const Available = () => {
  const dummy = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];

  return (
    <section className="meals">
      <Card>
        <ul>
          {dummy.map((data) => (
            <MealsItem
              key={data.id}
              id={data.id}
              name={data.name}
              description={data.description}
              price={data.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default Available;
