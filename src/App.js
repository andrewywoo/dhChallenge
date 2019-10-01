import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Products from "./containers/Products/Products";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      products: []
    };
  }

  componentDidMount() {
    axios.get("./ingredients.json").then(res => {
      this.setState({ ...this.state, ingredients: res.data.ingredients });
    });
    axios.get("./products.json").then(res => {
      this.setState({ ...this.state, products: res.data.products });
    });
  }

  render() {
    let productsContainer;

    if (
      this.state.products.length === 0 ||
      this.state.ingredients.length === 0
    ) {
      productsContainer = <div>Loading...</div>;
    } else {
      productsContainer = (
        <Products
          products={this.state.products}
          ingredients={this.state.ingredients}
        ></Products>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Daily Harvest Challenge</h1>
        </header>

        {/* Products container holds search bar and product list */}
        {productsContainer}
      </div>
    );
  }
}

export default App;
