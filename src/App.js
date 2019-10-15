import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Products from "./containers/Products/Products";

const App = () => {
  const [ingredients, setIngredients] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("./ingredients.json").then(res => {
      setIngredients(res.data.ingredients);
    });
    axios.get("./products.json").then(res => {
      setProducts(res.data.products);
    });
  }, []);

  let productsContainer;

  if (products.length === 0 || ingredients.length === 0) {
    productsContainer = <div>Loading...</div>;
  } else {
    productsContainer = (
      <Products products={products} ingredients={ingredients}></Products>
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
};

export default App;
