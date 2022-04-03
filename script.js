let vodkaBtnEl = document.getElementById('vodka-button')
let tequilaBtnEl = document.getElementById('tequila-button')
let whiskeyBtnEl = document.getElementById('whiskey-button')
let rumBtnEl = document.getElementById('rum-button')
let displayDrinkEl = document.getElementById('display-drink-container')
let displayCocktailEl = document.getElementById('display-cocktail-container')
let displayDescriptionEl = document.getElementById('display-description-container')
let displayImageEl = document.getElementById('display-image-container')
let displayIngredientsListEl = document.getElementById('ingredients-list')
let displayRatingEl = document.getElementById('display-rating-container')
let displayStarEl = document.getElementById('display-star-container')
let clickToRateEl = document.getElementById('click-to-rate')
let ratingEl = document.getElementById('display-rating-container')

const bloodyMary = [2, 2, 2, 2, 5, 6]
const screwDriver = [2, 3, 4, 1, 1]
const cosmopolitan = [3, 1, 5, 5, 4]
const espressoMartini = [4, 5, 3, 4, 3]
const moscowMule = [1, 4, 1, 1]
const whiteRussian = [5, 5, 5, 1]
const vodkaRatings = [bloodyMary, screwDriver, cosmopolitan, espressoMartini, moscowMule, whiteRussian]


function displayRatingStar(stars) {
    for (i = 0; i < stars; i++) {
        let ratingStars = document.createElement("img");
        ratingStars.setAttribute("src", "./images/star.png");
        displayStarEl.appendChild(ratingStars);
    }
}

function getRating(drink) {
    let ratings = 0
    for (let i = 0; i < drink.length; i++) {
        ratings += drink[i]
        averageRating = ratings / drink.length
        displayRatingEl.textContent = `Rating ${Math.round(`${averageRating}`)}/5`
    }
    let score = Math.round(`${averageRating}`)
  
    if (score == 1) {
        console.log('Score is 1')
        displayStarEl.innerHTML = ""
        displayRatingStar(`${score}`)
        console.log(displayRatingStar)
    } else if (score == 2) {
        console.log('Score is 2')
        displayStarEl.innerHTML = ""
        displayRatingStar(`${score}`)
    } else if (score == 3) {
        console.log('Score is 3')
        displayStarEl.innerHTML = ""
        displayRatingStar(`${score}`)
    } else if (score == 4) {
        console.log('Score is 4')
        displayStarEl.innerHTML = ""
        displayRatingStar(`${score}`)
    } else if (score == 5) {
        console.log('Score is 5')
        displayStarEl.innerHTML = ""
        displayRatingStar(`${score}`)
    } else {
        displayStarEl.innerHTML = ""
        console.log('There is no Rating')
    }
}


function clickToRate() {
    
}


// Liqour Types and Cocktails 
const vodka = {
    liqourName: 'Vodka',
    cocktails: ['Bloody Mary', 'Screw Driver', 'Cosmopolitan', 'Espresso Martini', 'Moscow Mule', 'White Russian'],
    description: [
        'Combine all ingredients in a Collins or highball glass. Add ice. Stir well. Garnish with lemon, celery, olives, and enjoy.ombine vodka, tomato juice, lemon juice, Worcestershire sauce, pepper, and celery salt in a Highball glass. Top with your garnish of choice',
        'Made by combining vodka and orange juice in a Highball glass with ice',
        'Combine all ingredients in shaker tin Add ice. Shake vigorously, until tin is frosted over.Strain into chilled cocktail glass Garnish with lime twist and enjoy.',
        'Combine all ingredients in a mixing tin and shake vigorously with ice. Strain into a coupette glass. Garnish with three coffee beans.',
        'Add vodka, ginger beer, and lime juice to a copper mug (or highball glass). Fill mug with crushed ice. Stir well. Garnish with lime wedge and enjoy.',
        'Combine all ingredients in mixing glass with ice. Stir Strain into chilled rocks glass over fresh ice'],

    image: ['BloodyMary.webp', 'ScrewDriver.webp', 'Cosmopolitan.webp', 'EspressoMartini.webp', 'MoscowMule.webp', 'WhiteRussian.webp'],
    ingredients: [
        '2 oz Vodka 5 oz Tomato juice 1/2 oz Fresh lemon Juice ½ oz Worcestershire Pinch PepperPinch Celery salt',
        '2 oz Vodka As needed Orange juice',
        '1 1/2 oz Vodka ½ oz Cranberry juice ¾ oz Lime juice ¾ oz Cointreau L unique',
        '1 ounce vodka, preferably Belvedere Smógory Forest ¾ ounce coffee liqueur, preferably Mr. Black Cold Brew Coffee Liqueur1 ¼ ounces fresh espresso½ ounce simple syrup, (1:1, sugar:water) Garnish: 3 coffee beans',
        '2 ounces vodka 3 ounces ginger beer Juice of half a lime, and lime wedge for garnish',
        '1 ¼ oz Vodka1 ¼ oz Half and half1 ¼ oz Coffee liqueur (Kahlua)']
};
const tequila = {
    liqourName: 'Tequila',
    cocktails: ['Margarita', 'Paloma', 'Tequila Sunrise', 'After Hours Bloody Maria', 'Ranch Water'],
    description: [
        'Combine all ingredients in shaker tin. Add ice to small shaker tin. Shake vigorously. Strain into chilled rocks glass with a salt rim over fresh ice Garnish with lime and enjoy.',
        'Combine ingredients in a highball. Add ice. Garnish with a grapefruit wheel and enjoy.',
        'Combine ingredients in a highball, excluding grenadine Add ice. Using a spoon, sink grenadine to the bottom of the glass. Garnish with an orange wheel and enjoy.',
        'Rim half of a chilled Collins glass in agave nectar, followed by salt. Put all other ingredients into a cocktail shaker with ice, and shake vigorously for 10 seconds. Pour into your rimmed glass over four ice cubes, and stir with a bar spoon.',
        'Start by pouring out (or drinking) two ounces of the Topo Chico. Add the tequila then lime juice to the Topo Chico bottle.'],
    image: ['Margarita.jpeg', 'Paloma.jpeg', 'TequilaSunrise.jpeg', 'AfterHoursBloodyMaria.jpeg', 'RanchWater.webp'],
    ingredients: [
        '1 ¾ oz Blanco tequila 1 oz Lime juice ¾ oz Triple Sec',
        '2 oz Reposado or Blanco tequila 1 oz Lime 1 each Pinch of salt As needed Grapefruit soda',
        '2 oz Tequila As needed Orange juice 1/2 oz Grenadine',
        '6 ounces Bloody Mary mix, such as Toma 2 ounces reposado tequila, such as Goza ½ ounce lime juice 6 dashes of chocolate-chili bitters Agave nectar and flake sea salt or sal de gasano, for rimming glass (optional)',
        '12-ounce bottle Topo Chico, chilled 1 ½ ounces blanco tequila ½ ounce fresh lime juice'
    ]
};
const whiskey = {
    liqourName: 'Whiskey',
    cocktails: ['Sazerac', 'Whiskey Sour', 'Manhattan', 'Old Fashioned', 'Bourbon Peach Punch'],
    description: [
        'Combine all ingredients in mixing glass with ice. Stir. Strain into chilled rocks glass rinsed with absinthe, with no ice. Garnish with lemon twist and enjoy',
        'Add all ingredients to a mixing tin and shake with ice (wet shake) until properly chilled. Remove the ice and shake again (dry shake) to emulsify. Double strain over ice into a rocks glass and garnish as you please.',
        'Combine all ingredients in mixing glass with ice. Stir. Strain into chilled cocktail glass Garnish with a cherry and enjoy.',
        'Combine first three ingredients in a rocks glass. Stir ingredients. Add ice. Garnish with a lemon and orange twist and enjoy.',
        'Make peach ice cubes by adding 1 sliced peach into each cavity of an ice cube tray that makes 6 large cubes. Fill with water and place in freezer. After ice cubes are hard, muddle two peach slices in the bottom of a shaker. Add bourbon, lemon juice and ice and shake to mix and chill. Place one peach ice cube in a tumbler glass and strain contents of shaker over it. Top with an ounce of pineapple juice and fresh-cracked black pepper.'],
    image: ['Sazerac.webp', 'WhiskeySour.webp', 'Manhattan.webp', 'OldFashioned.webp', 'BourbonPeachPunch.webp'],
    ingredients: [
        '3 oz Rye or Brandy 1/2 oz Demerara syrup 10 dashes Peychauds Bitters 1 ea Lemon twistAs needed Absinthe',
        '2 ounces whiskey (preferably bourbon) 1 ounce lemon juice ¾ ounce simple syrup 1 egg white Garnish: brandied cherry, Angostura bitters (to taste), or lemon peel',
        '2 ½ oz Rye 1 oz Sweet Vermouth 2 dashes Angostura',
        '2 ½ oz Bourbon (or Rye Whiskey) 1/2 oz simple syrup 3 dash Angostura Bitters 1 each Lemon and orange twist',
        '1.5 ounces bourbon 1 ounce pineapple juice 1 ounce lemon juice 1 peach sliced into 8 slices black pepper to garnish'
    ]
};
const rum = {
    liqourName: 'Rum',
    cocktails: ['Daiquiri', 'Mai Tai', 'Pina Colada', 'Dark N Stormy', 'Jungle Bird', 'Coquito', 'Painkiller', 'Mojito'],
    description: [
        'Combine all ingredients, except lime wedge, in a shaker. Add ice and shake vigorously, until tin is frosted over. Strain cocktail into a chilled coupe glass. Garnish with a lime wedge and enjoy.',
        'Combine all ingredients, except mint, in a shaker. Add crushed ice and shake vigorously, until shaker is frosted over. Fill a double rocks glass with fresh crushed ice. Strain cocktail into glass. Garnish with mint sprig.',
        'Combine all ingredients, except pineapple leaf, in shaker. Add ice to fill. Shake vigorously, until shaker is frosted over. Fill hurricane glass with crushed ice. Strain cocktail into glass. Garnish with pineapple leaf and enjoy.',
        'Pour Ginger beer in to highball glass over ice. Add ice. Float Goslings Black Seal Rum on top. Garnish with lime wedge and enjoy.',
        'Combine all ingredients in a cocktail shaker with ice, and shake to combine and chill. Pour into a rocks glass over fresh ice.',
        'Combine all ingredients except the tequila in a mixing bowl or blender, and blend on high for 2 minutes. Bottle the mixture and set in the refrigerator for at least 2 hours to settle. To serve, pour 3-4 ounces of chilled coquito into a shaker with an ounce of rum or añejo tequila and shake without ice. Pour into glass and garnish with a sprinkle of cinnamon.',
        'Combine ingredients in a cocktail shaker with plenty of crushed ice. Shake well, and then pour entire contents of the shaker into your glassware of choice. Top with generous sprinkle of nutmeg, and garnish with pineapple fronds and an orange wedge.',
        'Gently muddle mint leaves in Collins or highball glass, taking care not to break the leaves. Add remaining ingredients to the glass. Mix well. Add crushed ice. Garnish with mint sprig and enjoy.'],
    image: ['Daiquiri.webp', 'MaiTai.webp', 'PinaColada.webp', 'DarkNStormy.webp', 'JungleBird.webp', 'Coquito.webp', 'PainKiller.webp', 'Mojito.webp'],
    ingredients: [
        '2 oz white rum ¾ oz lime juice ¾ oz simple syrup Lime wedge',
        '2 ounces blended rum, such as Appleton Estate Reserve Blend or Denizen Merchant’s Reserve ¾ ounce lime juice ¾ ounce orgeat syrup ½ ounce orange liqueur Mint sprig',
        '2 oz White Rum 2 oz Coconut Cream 2 oz Pineapple Juice Pineapple leaf',
        '2 oz Goslings Black Seal Rum As needed Ginger beer',
        '1 ½ ounces rum, Jamaican or blackstrap ¾ ounce Campari ½ ounce fresh lime juice ½ ounce simple syrup 1 ½ ounces pineapple juice',
        '12 ounces silver rum 15 ounces cream of coconut 12 ounces coconut milk 12 ounces sweetened condensed milk 12 ounces evaporated milk ¾ teaspoon ground nutmeg añejo tequila or silver rum wash',
        '2 to 4 ounces of Pusser’s Navy Rum 4 ounces unsweetened pineapple juice 1 ounce freshly squeezed orange juice 1 ounce cream of coconut',
        '2 oz White Rum 1 oz Lime 3/4 oz Simple Syrup 10 Mint leaves, and mint sprig for garnish'
    ]
};
const liqourDrinks = [vodka, tequila, whiskey, rum]


function showIngredients() {
    displayIngredientsListEl.style.color = 'white'
    clickToRateEl.style.color = 'rgb(82, 252, 243)'
    ratingEl.style.color = 'white'
}

// Functions to get Random Drinks onClick  
function getRandomDrink() {
    // Gets Random Liqour
    randomLiqour = Math.floor(Math.random() * liqourDrinks.length)
    displayDrinkEl.textContent = liqourDrinks[`${randomLiqour}`].liqourName
    // Gets Random Cocktail from Liqour 
    randomDrink = Math.floor(Math.random() * liqourDrinks[`${randomLiqour}`].cocktails.length)
    displayCocktailEl.textContent = liqourDrinks[`${randomLiqour}`].cocktails[`${randomDrink}`]
    displayDescriptionEl.textContent = liqourDrinks[`${randomLiqour}`].description[`${randomDrink}`]
    displayIngredientsListEl.textContent = liqourDrinks[`${randomLiqour}`].ingredients[`${randomDrink}`]
    drinkImage = liqourDrinks[`${randomLiqour}`].image[`${randomDrink}`]
    image = new Image
    image.src = `./images/${drinkImage}`
    displayImageEl.innerHTML = ""
    displayImageEl.append(image)
    showIngredients()
}

function getVodkaDrink() {
    randomDrink = Math.floor(Math.random() * liqourDrinks[0].cocktails.length)
    displayDrinkEl.textContent = 'Vodka'
    displayCocktailEl.textContent = liqourDrinks[0].cocktails[`${randomDrink}`]
    displayDescriptionEl.textContent = liqourDrinks[0].description[`${randomDrink}`]
    displayIngredientsListEl.textContent = liqourDrinks[0].ingredients[`${randomDrink}`]
    drinkImage = liqourDrinks[0].image[`${randomDrink}`]
    image = new Image
    image.src = `./images/${drinkImage}`
    displayImageEl.innerHTML = ""
    displayImageEl.append(image)
    showIngredients()
    getRating(vodkaRatings[`${randomDrink}`])
}

function getTequilaDrink() {
    randomDrink = Math.floor(Math.random() * liqourDrinks[1].cocktails.length)
    displayDrinkEl.textContent = 'Tequila'
    displayCocktailEl.textContent = liqourDrinks[1].cocktails[`${randomDrink}`]
    displayDescriptionEl.textContent = liqourDrinks[1].description[`${randomDrink}`]
    displayIngredientsListEl.textContent = liqourDrinks[1].ingredients[`${randomDrink}`]
    drinkImage = liqourDrinks[1].image[`${randomDrink}`]
    image = new Image
    image.src = `./images/${drinkImage}`
    displayImageEl.innerHTML = ""
    displayImageEl.append(image)
    showIngredients()
}

function getWhiskeyDrink() {
    randomDrink = Math.floor(Math.random() * liqourDrinks[2].cocktails.length)
    displayDrinkEl.textContent = 'Whiskey'
    displayCocktailEl.textContent = liqourDrinks[2].cocktails[`${randomDrink}`]
    displayDescriptionEl.textContent = liqourDrinks[2].description[`${randomDrink}`]
    displayIngredientsListEl.textContent = liqourDrinks[2].ingredients[`${randomDrink}`]
    drinkImage = liqourDrinks[2].image[`${randomDrink}`]
    image = new Image
    image.src = `./images/${drinkImage}`
    displayImageEl.innerHTML = ""
    displayImageEl.append(image)
    showIngredients()
}

function getRumDrink() {
    randomDrink = Math.floor(Math.random() * liqourDrinks[3].cocktails.length)
    displayDrinkEl.textContent = 'Rum'
    displayCocktailEl.textContent = liqourDrinks[3].cocktails[`${randomDrink}`]
    displayDescriptionEl.textContent = liqourDrinks[3].description[`${randomDrink}`]
    displayIngredientsListEl.textContent = liqourDrinks[3].ingredients[`${randomDrink}`]
    drinkImage = liqourDrinks[3].image[`${randomDrink}`]
    image = new Image
    image.src = `./images/${drinkImage}`
    displayImageEl.innerHTML = ""
    displayImageEl.append(image)
    showIngredients()
}

