import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = props => {
  const { ingredients } = props;

  const totalIngredientsCount = Object.values(ingredients).reduce(
    (sum, ing) => {
      return sum + ing;
    },
    0
  );

  let innerBurgerContent;

  if (totalIngredientsCount === 0) {
    innerBurgerContent = <p>Add Ingredients</p>;
  } else {
    // get the keys from ingredients obj
    innerBurgerContent = Object.keys(ingredients).map((ing, i) => {
      // if key's value is not 0, then create a component
      if (!(ingredients[ing] === 0)) {
        // determine how many of each ingredient to display
        return [...Array(ingredients[ing])].map((_, i) => (
          <BurgerIngredient key={ing + i} type={ing} />
        ));
      }
    });
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {innerBurgerContent}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
