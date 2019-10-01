import React, { Component } from "react";
import CardList from "../../components/CardList/CardList";
import SearchBar from "../../components/SearchBar/SearchBar";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: props.products
    };

    this.onSearchByIngredientsHandler = this.onSearchByIngredientsHandler.bind(
      this
    );
    this.sortByIngredient = this.sortByIngredient.bind(this);
    this.memoizedSortByIngredient = this.memoize(this.sortByIngredient);
  }

  onSearchByIngredientsHandler(event) {
    const ingredientId = +event.target.value;

    if (event.target.value === "All") {
      this.setState({
        ...this.state,
        productList: this.props.products
      });
    } else {
      this.setState({
        ...this.state,
        productList: this.memoizedSortByIngredient(ingredientId)
      });
    }
  }

  //O(n) solution for search on ingredient
  sortByIngredient(ingredient) {
    const products = this.props.products;
    //filter out producs that match ingredient id
    let result = products.filter(p => {
      return p.ingredient_ids.includes(ingredient);
    });

    return result;
  }

  //closure to implement cachce for sortByIngredient
  memoize(func) {
    let cache = {};
    return function(...args) {
      let key = JSON.stringify(...args);
      console.log("cache", cache);
      if (cache[key]) {
        return cache[key];
      } else {
        cache[key] = func(...args);
        return cache[key];
      }
    };
  }

  render() {
    let productList = this.state.productList;

    return (
      <>
        <SearchBar
          ingredients={this.props.ingredients}
          onSearchByIngredientsHandler={this.onSearchByIngredientsHandler}
        ></SearchBar>
        <CardList products={productList}></CardList>
      </>
    );
  }
}

export default Products;
