let vodkaBtnEl = document.getElementById('vodka-button')
let tequilaBtnEl = document.getElementById('tequila-button')
let whiskeyBtnEl = document.getElementById('whiskey-button')
let rumBtnEl = document.getElementById('rum-button')
let displayDrinkEl = document.getElementById('display-drink-container')
let displayCocktailEl = document.getElementById('display-cocktail-container')
let displayDescriptionEl = document.getElementById('display-description-container')
let displayImageEl = document.getElementById('display-image-container')

// Liqour Types and Cocktails 
const vodka = {
    liqourName: 'Vodka',
    cocktails: ['Bloody Mary', 'Screw Driver', 'Cosmopolitan', 'Espresso Martini', 'Moscow Mule', 'White Russian'],
    description: ['combine vodka, tomato juice, lemon juice, Worcestershire sauce, pepper, and celery salt in a Highball glass. Top with your garnish of choice','made by combining vodka and orange juice in a Highball glass with ice', 'made with vodka, cranberry juice, lime, and Triple Sec', 'combination of vodka, coffee liqueur, fresh espresso, and simple syrup. Shake all ingredients together, strain into a Martini or coupe glass', 'add vodka, ginger beer, and lime juice to a copper mug with crushed ice, and garnish with a lime wedge.', 'White Russian is a simple combination of half and half (or milk), vodka, and coffee liqueur.'],
    image: ['BloodyMary.webp','ScrewDriver.webp','Cosmopolitan.webp','EspressoMartini.webp','MoscowMule.webp','WhiteRussian.webp']
  };
const tequila = {
    liqourName: 'Tequila',
    cocktails: ['Margarita', 'Paloma', 'Tequila Sunrise', 'After Hours Bloody Maria', 'Ranch Water'],
    description: ['Just combine blanco tequila with lime juice and the orange liqueur of your choice, shake with ice, and strain into a glass with ice. Garnish with a lime', 'add reposado or blanco tequila to your glass, and top with lime juice, salt, and grapefruit soda', 'add tequila and orange juice to a Highball glass, and use a spoon to sink grenadine to the bottom of the glass', 'While the classic recipe simply combines tequila with tomato juice, lemon juice, Worcestershire sauce, and pepper, this version adds chocolate-chili bitters', 'A simple combination of Topo Chico, blanco tequila, and lime juice'],
    image: ['Margarita.jpeg','Paloma.jpeg','TequilaSunrise.jpeg','AfterHoursBloodyMaria.jpeg','RanchWater.webp']
};
const whiskey = {
    liqourName: 'Whiskey',
    cocktails: ['Sazerac', 'Whiskey Sour', 'Manhattan', 'Old Fashioned', 'Bourbon Peach Punch'],
    description: ['Just add some rye, Demerara syrup, Peychaud’s bitters, and your desired amount of absinthe into a mixing glass and stir. Garnish with a lemon rind and toast to NOLA', 'whiskey (typically bourbon), simple syrup, and any kind of citrus juice.', 'made with bourbon or rye, though some more modern versions opt for bourbon. Just mix together the whiskey of your choice, sweet vermouth, some bitters, and garnish with a Maraschino cherry or an orange peel', 'healthy helping of bourbon or rye, a bit of simple syrup (or a sugar cube), and some Angostura bitters', 'This recipe uses frozen peach slices in place of ice cubes, so there’s no need to worry about a diluted drink if you’re imbibing during the afternoon of a summer scorcher. It also calls for pineapple and lemon juice, and a dash of black pepper'],
    image: ['Sazerac.webp','WhiskeySour.webp','Manhattan.webp','OldFashioned.webp','BourbonPeachPunch.webp']
};
const rum = {
    liqourName: 'Rum',
    cocktails: ['Daiquiri', 'Mai Tai', 'Pina Colada', 'Dark N Stormy', 'Jungle Bird', 'Coquito', 'Painkiller', 'Mojito'],
    description: ['combine white rum, lime juice, and simple syrup in a shaker, and strain over ice. Garnish with a lime wedge', 'It’s made with blended rum, lime juice, orgeat syrup, and orange liqueur, shaken together with ice. Serve it in a double rocks glass complete with crushed ice and a mint sprig.', 'combination of white rum, coconut cream, and pineapple juice. It’s often served frozen, but it’s also tasty shaken and served on the rocks in a Hurricane glass. Garnish with pineapple leaves and a slice of pineapple.', ' Simply add ginger beer to a Highball glass with ice, and float Goslings rum on top. Garnish with a lime wedge', 'The classic Tiki drink is made with rum, Campari, lime juice, simple syrup, and pineapple juice. It’s best served in a Highball glass with ice and a pineapple wedge garnish', 'silver rum with coconut milk, cream of coconut, evaporated milk, and sweetened condensed milk. To make it, blend all ingredients together, then shake with a tequila wash. Strain into a coupe glass, and top with a sprinkle of nutmeg.', 'the Painkiller combines rum, pineapple juice, orange juice, and cream of coconut. Serve in the cocktail glass of your choice, and garnish with a sprinkle of nutmeg, pineapple leaves, and an orange wedge', 'muddle about 10 mint leaves in a glass, then top with white rum, lime juice, and simple syrup. Add lots of crushed ice, and garnish with a mint sprig for good measure.'],
    image: ['Daiquiri.webp','MaiTai.webp','PinaColada.webp','DarkNStormy.webp','JungleBird.webp','Coquito.webp','PainKiller.webp','Mojito.webp']
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
    displayDescriptionEl.textContent = liqourDrinks[`${randomLiqour}`].description[`${randomDrink}`]
    drinkImage = liqourDrinks[`${randomLiqour}`].image[`${randomDrink}`]
    image = new Image
    image.src = `./images/${drinkImage}`
    displayImageEl.innerHTML = ""
    displayImageEl.append(image)
}

function getVodkaDrink() {
    randomDrink = Math.floor(Math.random()*liqourDrinks[0].cocktails.length)
    displayDrinkEl.textContent = 'Vodka'
    displayCocktailEl.textContent = liqourDrinks[0].cocktails[`${randomDrink}`]
    displayDescriptionEl.textContent = liqourDrinks[0].description[`${randomDrink}`]
    drinkImage = liqourDrinks[0].image[`${randomDrink}`]
    image = new Image
    image.src = `./images/${drinkImage}`
    displayImageEl.innerHTML = ""
    displayImageEl.append(image)
}

function getTequilaDrink() {
    randomDrink = Math.floor(Math.random()*liqourDrinks[1].cocktails.length)
    displayDrinkEl.textContent = 'Tequila'
    displayCocktailEl.textContent = liqourDrinks[1].cocktails[`${randomDrink}`]
    displayDescriptionEl.textContent = liqourDrinks[1].description[`${randomDrink}`]
    drinkImage = liqourDrinks[1].image[`${randomDrink}`]
    image = new Image
    image.src = `./images/${drinkImage}`
    displayImageEl.innerHTML = ""
    displayImageEl.append(image)
}

function getWhiskeyDrink() {
    randomDrink = Math.floor(Math.random()*liqourDrinks[2].cocktails.length)
    displayDrinkEl.textContent = 'Whiskey'
    displayCocktailEl.textContent = liqourDrinks[2].cocktails[`${randomDrink}`]
    displayDescriptionEl.textContent = liqourDrinks[2].description[`${randomDrink}`]
    drinkImage = liqourDrinks[2].image[`${randomDrink}`]
    image = new Image
    image.src = `./images/${drinkImage}`
    displayImageEl.innerHTML = ""
    displayImageEl.append(image)
}

function getRumDrink() {
    randomDrink = Math.floor(Math.random()*liqourDrinks[3].cocktails.length)
    displayDrinkEl.textContent = 'Rum'
    displayCocktailEl.textContent = liqourDrinks[3].cocktails[`${randomDrink}`]
    displayDescriptionEl.textContent = liqourDrinks[3].description[`${randomDrink}`]
    drinkImage = liqourDrinks[3].image[`${randomDrink}`]
    image = new Image
    image.src = `./images/${drinkImage}`
    displayImageEl.innerHTML = ""
    displayImageEl.append(image)
}

