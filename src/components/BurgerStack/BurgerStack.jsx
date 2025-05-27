// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (prop) => {
  // const removeIngredient = prop.removeIngredient;

  return (
    <>
      <li style={{ backgroundColor: prop.color }}>
        {prop.name}
        <button name={prop.name}>+</button>
      </li>
    </>
  );
};

export default BurgerStack;
