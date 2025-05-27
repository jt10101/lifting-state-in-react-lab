// src/components/IngredientList/IngredientList.jsx
import { useState } from "react";

const IngredientList = (prop) => {
  const addIngredient = prop.addIngredient;

  return (
    <>
      <li style={{ backgroundColor: prop.color }}>
        {prop.name}
        <button onClick={addIngredient}>+</button>
      </li>
    </>
  );
};

export default IngredientList;
