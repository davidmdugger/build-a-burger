import React from "react";
import classes from "./BuildControl.css";

const BuildControl = props => {
  const { ingredient, addIng, removeIng, disabled } = props;

  return (
    <div className={classes.BuildControl}>
      <div className={classes.Ingredient}>{ingredient}</div>
      <button onClick={removeIng} className={classes.Less} disabled={disabled}>
        &minus;
      </button>
      <button onClick={addIng} className={classes.More}>
        &#43;
      </button>
    </div>
  );
};

export default BuildControl;
