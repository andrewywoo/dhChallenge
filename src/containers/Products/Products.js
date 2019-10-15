import React, { useState } from "react";
import CardList from "../../components/CardList/CardList";
import SearchBar from "../../components/SearchBar/SearchBar";

const Products = props => {
  const productList = useIngredientSearch(props.products);

  return (
    <>
      <SearchBar
        ingredients={props.ingredients}
        onSearchByIngredientsHandler={productList.onSearch}
      ></SearchBar>
      <CardList products={productList.list}></CardList>
    </>
  );
};

//custom hook to sort product list by ingredient
function useIngredientSearch(products) {
  const [list, setList] = useState(products);

  //O(n) solution for search on ingredient
  function sortByIngredient(ingredient) {
    //filter out producs that match ingredient id
    let result = products.filter(p => {
      return p.ingredient_ids.includes(ingredient);
    });

    return result;
  }

  function ingredientSearch(e) {
    const ingredientId = +e.target.value;
    if (e.target.value === "All") {
      setList(products);
    } else {
      setList(sortByIngredient(ingredientId));
    }
  }

  return {
    list,
    onSearch: ingredientSearch
  };
}

export default Products;
