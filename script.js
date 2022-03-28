let vodkaBtnEl = document.getElementById('vodka-button')
let tequilaBtnEl = document.getElementById('tequila-button')
let whiskeyBtnEl = document.getElementById('whiskey-button')
let rumBtnEl = document.getElementById('rum-button')
let displayDrinkEl = document.getElementById('display-drink-container')


const vodka = ['Bloody Mary', 'Screw Driver', 'Cosmopolitan', 'Espresso Martini', 'Moscow Mule', 'White Russian']
const tequila = ['Margarita', 'Paloma', 'Tequila Sunrise']
const whiskey = ['Sazerac', 'Whiskey Sour', 'Hot Toddy', 'Manhattan', 'Old Fashioned', 'Bourbon Peach Punch']
const rum = ['Daiquiri', 'Mai Tai', 'Pina Colada', 'Dark N Stormy', 'Jungle Bird', 'Coquito', 'Painkiller', 'Mojito']

// Vodka Button
vodkaBtnEl.addEventListener('click', function () {
    displayDrinkEl.textContent = vodka[Math.floor(Math.random() * vodka.length)]
})
// Tequila Button
tequilaBtnEl.addEventListener('click', function () {
    displayDrinkEl.textContent = tequila[Math.floor(Math.random() * tequila.length)]
})
// Whiskey Button
whiskeyBtnEl.addEventListener('click', function () {
    displayDrinkEl.textContent = whiskey[Math.floor(Math.random() * whiskey.length)]
})
// Rum Button
rumBtnEl.addEventListener('click', function () {
    displayDrinkEl.textContent = rum[Math.floor(Math.random() * rum.length)]
})

