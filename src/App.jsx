// src/App.jsx
import "./App.css";
import IngredientList from "./components/IngredientList/IngredientList";
import BurgerStack from "./components/BurgerStack/BurgerStack";
import { useState } from "react";
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

const App = () => {
  const [ingredient, setIngredient] = useState(availableIngredients);
  const [stack, setStack] = useState([]);

  const addIngredient = (event) => {
    let addedBurger = { name: "", color: "" };
    Object.assign(
      addedBurger,
      { name: event.target.name },
      { color: event.target.parentElement.style.backgroundColor }
    );

    setStack([...stack, addedBurger]);
    setIngredient([
      ...ingredient.filter((ingredient) => ingredient.name != addedBurger.name),
    ]);
  };

  const removeIngredient = (event) => {
    let removedBurger = { name: "", color: "" };
    Object.assign(
      removedBurger,
      { name: event.target.name },
      { color: event.target.parentElement.style.backgroundColor }
    );

    setStack([
      ...stack.filter((ingredient) => ingredient.name != removedBurger.name),
    ]);
    setIngredient([...ingredient, removedBurger]);
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <ul>
          {ingredient.map((ingredient) => (
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
            <BurgerStack
              key={stack.name}
              name={stack.name}
              color={stack.color}
              removeIngredient={removeIngredient}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};
export default App;
