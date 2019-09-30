"use strict";
const fs = require("fs");

//ingredients and products in a real app would probably be read in asychronously using a get request
const ingredientsJson = JSON.parse(fs.readFileSync("ingredients.json"));
const productsJson = JSON.parse(fs.readFileSync("products.json"));

/*

Thought process of possible solutions:

A straight O(n) solution would be to loop through product list and see if the ingredients id is in the ingredients array.
Depending on how this function would be used (I'm thinkin more of a front end sort to display products as cards), 
it would probably be time consuming to always loop through the existing list for each search.

One solution is on loadup create a map with ingredients as the key and the products associated as an array.
This solution might take a long time depending on number of products and ingredients.

Another solution is to store the sorted ingredients inside a cache. 
For each sorted on ingredient, the next time it is searched it will be O(1) time complexity.

*/

//closure to implement cachce for sortByIngredient
function memoize(func) {
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

//O(n) solution for search on ingredient
function sortByIngredient(ingredient) {
  const ingredients = ingredientsJson.ingredients;
  const products = productsJson.products;

  //grab ingredient id
  let ingredientId;
  for (let i of ingredients) {
    if (i.name === ingredient) {
      ingredientId = i.id;
      break;
    }
  }

  let result = products.filter(p => {
    return p.ingredient_ids.includes(ingredientId);
  });

  return result;
}

let memoizedSort = memoize(sortByIngredient);

//below is the call that completes the challenge proposed.
//Please let me know if this satisfies the assignment.
console.log(memoizedSort("Organic Banana"));

//O(1) on subsequent run because of cached result;
//console.log(memoizedSort("Organic Banana"));
