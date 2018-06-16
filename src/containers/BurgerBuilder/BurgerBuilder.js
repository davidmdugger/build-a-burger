import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  lettuce: 0.5,
  cheese: 0.75,
  meat: 1.75,
  bacon: 1
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    price: 4
  };

  addIngredientHandler = item => {
    const oldCount = this.state.ingredients[item];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };

    updatedIngredients[item] = updatedCount;

    const priceIncrease = INGREDIENT_PRICES[item];
    const oldPrice = this.state.price;
    const newPrice = oldPrice + priceIncrease;

    this.setState({ price: newPrice, ingredients: updatedIngredients });
  };

  removeIngredientHandler = item => {
    const oldCount = this.state.ingredients[item];
    if (oldCount < 1) return;
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };

    updatedIngredients[item] = updatedCount;

    const priceDecrease = INGREDIENT_PRICES[item];
    const oldPrice = this.state.price;
    const newPrice = oldPrice - priceDecrease;

    this.setState({ price: newPrice, ingredients: updatedIngredients });
  };

  render() {
    console.log(price);
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] < 1;
    }

    const { ingredients, price } = this.state;

    return (
      <React.Fragment>
        <h3>Your Burger Price: ${price.toFixed(2)}</h3>
        <Burger ingredients={ingredients} />
        <BuildControls
          ingredients={ingredients}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
