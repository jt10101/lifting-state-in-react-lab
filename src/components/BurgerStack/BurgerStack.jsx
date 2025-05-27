// src/components/BurgerStack/BurgerStack.jsx
import { useState } from "react";
const BurgerStack = (prop) => {
  const removeIngredient = prop.removeIngredient;
  const [burgerStack, setBurgerStack] = useState({});
  return (
    <>
      {/* <li style={{ backgroundColor: prop.color }}>
        {prop.name}
        <button onClick={addIngredient}>+</button>
      </li> */}
    </>
  );
};

export default BurgerStack;
