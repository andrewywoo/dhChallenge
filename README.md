# Daily Harvest Challenge

This is a challenge presented by Daily Harvest. Given two json files containing products and ingredients, I was asked to write a function that returns all products that has the ingredient "Organic Banana".

Originally, I wrote a simple javascript function that runs off of node.js and can still be found in this repository labeled "sortByIngredients.js" inside the root folder. This can still be tested using 'node sortByIngredients.js'. Inside, you can find the full thought process of the solution, but to make things simple I'll include a summary here. I wrote out a memoization function utilizing a closure to cache any previously searched on ingredient to cut down on time complexity.

Later, I thought to build out an app in React that utilizes the solution to sort by any ingredient. Below are instructions to run the application. I have also deployed the application on GitHub pages. This can be viewed by clicking on this link https://andrewywoo.github.io/dhChallenge or the link in the project description.

To satisy the challenge please use the dropdown box and select "Organic Banana."

### How do I know that a cache is being used?

I've added a console log inside the cache function that prints out the cache everytime an ingredient search is triggered. If it pulls from cache it will print out 'Pulled from cache' else it will say 'Pulled from sort function.'

Open up Dev tools with F12 and click on the console tab to see what's currently in the cache.

The function used to sort through the product list is located in /src/containers/Products/Products.js - line 35 - 59.

## Requirements

[Node.js](https://nodejs.org) (includes [npm](https://www.npmjs.com/))

```
$ node -v; npm -v
v11.3.0
6.5.0
```

## Installation

To install the react project please clone the repository:

```
$ git clone https://github.com/andrewywoo/dhChallenge.git
$ cd dhChallenge
$ npm install
```

## How to Start Application

To start the React application, please run the following command:

```
$ npm start
```

the project will be listening to port 3000.
After project has been loaded, view application on https://localhost:3000

## Languages and Tools

### Javascript

- [React](https://reactjs.org/) Used to build out Reactive Single Page Application
- [Axios](https://github.com/axios/axios) Used for making http request and automatic transform of JSON data

### HTML

### CSS

- [FlexFlow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow)

### Visual Studio Code

- [Prettier](https://github.com/prettier/prettier-vscode) Opinionated code formatter
- [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets) Autocomplete for boiler plate React.
