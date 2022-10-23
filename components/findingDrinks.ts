const checkOneDrink = (shakerIngredients: any, drinkIngredients: any): number => {    //returnerar en siffra med hur många ingredienser i shakern som saknas och som behövs till drinken.
    return drinkIngredients.filter(drinkIng => {
        return !shakerIngredients.some(shakerIng => {
          return drinkIng === shakerIng.name;
        });
      }).length;
}

const combineIngredientsForDrink = (drink) => {
    const ingredients = drink.alcoholIngredients.concat(drink.nonAlcoholIngredients);
    return ingredients
}

export const checkAllDrinks = (shakerIngredients, allDrinks) => {
    const matchedDrinks = []
    allDrinks.forEach(drink => {
        const ingList = combineIngredientsForDrink(drink);
        if (checkOneDrink(shakerIngredients, ingList) <= 2) {  // === 0 innebär att du måste ha alla ingredienserna för drinken hemma
            matchedDrinks.push(drink);
        };
    });
    return matchedDrinks;
}