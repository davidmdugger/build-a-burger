import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./BurgerIngredient.css";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={classes.BreadBottom}>Bottom</div>;
        break;
      case "bread-top":
        ingredient = <div className={classes.BreadTop}>Top</div>;
        break;
      case "meat":
        ingredient = <div className={classes.Meat}>Patty</div>;
        break;
      case "cheese":
        ingredient = <div className={classes.Cheese}>Cheese</div>;
        break;
      case "lettuce":
        ingredient = <div className={classes.Lettuce}>Lettuce</div>;
        break;
      case "bacon":
        ingredient = <div className={classes.Bacon}>Bacon</div>;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
