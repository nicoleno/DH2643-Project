import drinks from '../assets/Drinks.json';

const checkOneDrink = (shakerIngredients: any, drinkIngredients: any): number => {    //returnerar en siffra med hur många ingredienser i shakern som saknas och som behövs till drinken.
    return drinkIngredients.filter(drinkIng => {
        return !shakerIngredients.some(shakerIng => {
          return drinkIng === shakerIng.name;
        });
      }).length;
}

const combineIngredientsForDrink = (drink) => {
    const ingredients = drink.AlcoholIngredients.concat(drink.NonAlcoholIngredients);
    return ingredients
}

const checkAllDrinks = (shakerIngredients, allDrinks) => {
    const matchedDrinks = []
    allDrinks.forEach(drink => {
        const ingList = combineIngredientsForDrink(drink);
        console.log("ing list: ", ingList);
        if (checkOneDrink(shakerIngredients, ingList) <= 2) {  // === 0 innebär att du måste ha alla ingredienserna för drinken hemma
            matchedDrinks.push(drink.Name);
        };
    });
    return matchedDrinks;
}


const shaker = [
    {
        id: 1,
        name: "Vodka"
    },
    {
        id: 2,
        name: "Cointreau (Triple Sec)"
    },
    {
        id: 7,
        name: "Cranberry Juice",
    },
    {
        id: 2,
        name: "Lime"
    },
    {
        id: 3,
        name: "Tequila"
    },
    {
        id: 4,
        name: "Raspberries"
    },
    {
        id: 3,
        name: "Sugar"
    },
]

// console.log(checkOneDrink(shaker, drink));

console.log(checkAllDrinks(shaker, drinks));