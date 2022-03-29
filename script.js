let vodkaBtnEl = document.getElementById('vodka-button')
let tequilaBtnEl = document.getElementById('tequila-button')
let whiskeyBtnEl = document.getElementById('whiskey-button')
let rumBtnEl = document.getElementById('rum-button')
let displayDrinkEl = document.getElementById('display-drink-container')
let displayCocktailEl = document.getElementById('display-cocktail-container')


// Liqour Types and Cocktails 
const vodka = {
    liqourName: 'Vodka',
    cocktails: ['Bloody Mary', 'Screw Driver', 'Cosmopolitan', 'Espresso Martini', 'Moscow Mule', 'White Russian'],
  };
const tequila = {
    liqourName: 'Tequila',
    cocktails: ['Margarita', 'Paloma', 'Tequila Sunrise']
};
const whiskey = {
    liqourName: 'Whiskey',
    cocktails: ['Sazerac', 'Whiskey Sour', 'Hot Toddy', 'Manhattan', 'Old Fashioned', 'Bourbon Peach Punch']
};
const rum = {
    liqourName: 'Rum',
    cocktails: ['Daiquiri', 'Mai Tai', 'Pina Colada', 'Dark N Stormy', 'Jungle Bird', 'Coquito', 'Painkiller', 'Mojito']
};
const liqourDrinks = [vodka, tequila, whiskey, rum]


// Functions to get Random Drinks onClick  

function getRandomDrink() {
    // Gets Random Liqour
    randomLiqour = Math.floor(Math.random()*liqourDrinks.length)
    displayDrinkEl.textContent = liqourDrinks[`${randomLiqour}`].liqourName
    // Gets Random Cocktail from Liqour 
    randomDrink = Math.floor(Math.random()*liqourDrinks[`${randomLiqour}`].cocktails.length)
    displayCocktailEl.textContent = liqourDrinks[`${randomLiqour}`].cocktails[`${randomDrink}`]
}

function getVodkaDrink() {
    randomDrink = Math.floor(Math.random()*liqourDrinks[0].cocktails.length)
    console.log(randomDrink)
    displayDrinkEl.textContent = 'Vodka'
    displayCocktailEl.textContent = liqourDrinks[0].cocktails[`${randomDrink}`]
}

function getTequilaDrink() {
    randomDrink = Math.floor(Math.random()*liqourDrinks[1].cocktails.length)
    console.log(randomDrink)
    displayDrinkEl.textContent = 'Tequila'
    displayCocktailEl.textContent = liqourDrinks[1].cocktails[`${randomDrink}`]
}

function getWhiskeyDrink() {
    randomDrink = Math.floor(Math.random()*liqourDrinks[2].cocktails.length)
    console.log(randomDrink)
    displayDrinkEl.textContent = 'Whiskey'
    displayCocktailEl.textContent = liqourDrinks[2].cocktails[`${randomDrink}`]
}

function getRumDrink() {
    randomDrink = Math.floor(Math.random()*liqourDrinks[3].cocktails.length)
    console.log(randomDrink)
    displayDrinkEl.textContent = 'Rum'
    displayCocktailEl.textContent = liqourDrinks[3].cocktails[`${randomDrink}`]
}