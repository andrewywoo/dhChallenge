import React from "react";
import "./SearchBar.css";

const searchBar = props => {
  return (
    <>
      <label for="ingredients">Search By Ingredients</label>
      <select
        className="searchBar"
        name="ingredients"
        onChange={props.onSearchByIngredientsHandler.bind(this)}
      >
        <option value="All">All</option>
        {props.ingredients.map(i => (
          <option key={i.id} value={i.id}>
            {i.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default searchBar;
