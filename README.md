# Daily Harvest Challenge

This is a challenge presented by Daily Harvest. Given two json files containing products and ingredients, I was asked to write a function that returns all products that has the ingredient "Organic Banana".

Originally, I wrote a simple javascript function that runs off of node.js and can be found in the root labeled "sortByIngredients.js". This can still be tested using 'node sortByIngredients.js'. Inside, you can find the full thought process of the solution, but to make things simple I'll include a summary here. I wrote out a memoization function utilizing a closure to cache any previously searched on ingredient to cut down on time complexity.

Later, I thought to build out an app in React that utilizes the solution to sort by any ingredient. Below are instructions to run the application.

## Requirements

Node.js (includes NPM)

```
$ node -v; npm -v
v11.3.0
6.5.0
```

## Installation

To install the react project please clone the repository:

```
$ git clone
$ cd dailyharvest
$ npm install
```

## Usage

```terminal
node sortByIngredients.js
```
