// src/App.jsx

import "./App.css";
import IngredientList from "./components/IngredientList/IngredientList";
import BurgerStack from "./components/BurgerStack/BurgerStack";
import { useState } from "react";

const App = () => {
  const availableIngredients = [
    { name: "Kaiser Bun", color: "saddlebrown" },
    { name: "Sesame Bun", color: "sandybrown" },
    { name: "Gluten Free Bun", color: "peru" },
    { name: "Lettuce Wrap", color: "olivedrab" },
    { name: "Beef Patty", color: "#3F250B" },
    { name: "Soy Patty", color: "#3F250B" },
    { name: "Black Bean Patty", color: "#3F250B" },
    { name: "Chicken Patty", color: "burlywood" },
    { name: "Lettuce", color: "lawngreen" },
    { name: "Tomato", color: "tomato" },
    { name: "Bacon", color: "maroon" },
    { name: "Onion", color: "lightyellow" },
    { name: "Cheddar Cheese", color: "#FDE18B" },
    { name: "Swiss Cheese", color: "#F1E1A8" },
  ];

  const [stack, setStack] = useState([]);
  const addIngredient = (event) => {
    availableIngredients.filter(
      (ingredient) => ingredient.name != event.target.name
    );
    let addedBurger = { name: "", color: "" };
    addedBurger.name = event.target.name;

    let newstack = [...stack, addedBurger];
    setStack(newstack);
    // console.log(addedBurger);
  };

  const removeIngredient = (event) => {};

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <ul>
          {availableIngredients.map((ingredient) => (
            <IngredientList
              key={ingredient.name}
              name={ingredient.name}
              color={ingredient.color}
              addIngredient={addIngredient}
            />
          ))}
        </ul>
        <ul>
          {stack.map((stack) => (
            <IngredientList
              key={stack.name}
              name={stack.name}
              // color={ingredient.color}
              // addIngredient={addIngredient}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};
export default App;
