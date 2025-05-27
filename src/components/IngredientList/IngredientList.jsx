// src/components/IngredientList/IngredientList.jsx
import { useState } from "react";

const IngredientList = (prop) => {
  const addIngredient = prop.addIngredient;
  //   const [ingredientList, setIngredientList] = useState(prop);
  //   setIngredientList(addIngredient);
  return (
    <>
      <li style={{ backgroundColor: prop.color }}>
        {prop.name}
        <button name={prop.name} onClick={addIngredient}>
          +
        </button>
      </li>
    </>
  );
};

export default IngredientList;
