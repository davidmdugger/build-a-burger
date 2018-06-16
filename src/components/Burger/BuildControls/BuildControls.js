import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.css";

const BuildControls = props => {
  const { ingredients, ingredientAdded, ingredientRemoved, disabled } = props;
  const BuildControlRender = Object.keys(ingredients).map((ing, i) => {
    return (
      <BuildControl
        ingredient={ing}
        key={i}
        addIng={() => ingredientAdded(ing)}
        removeIng={() => ingredientRemoved(ing)}
        disabled={disabled[ing]}
      />
    );
  });

  return <div className={classes.BuildControls}>{BuildControlRender}</div>;
};

export default BuildControls;
