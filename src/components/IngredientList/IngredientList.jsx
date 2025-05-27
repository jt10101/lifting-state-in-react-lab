// src/components/IngredientList/IngredientList.jsx

const IngredientList = (prop) => {
  return (
    <>
      <li style={{ backgroundColor: prop.color }}>
        {prop.name}
        <button>+</button>
      </li>
    </>
  );
};

export default IngredientList;
