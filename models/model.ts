export type Ingredient = {
    id: string;
    name: string;
}

export type Drink = {
    id: string;
    name: string;
    instructions: string;
    measurements: string;
    alcoholIngredients: string[];
    nonAlcoholIngredients: string[];
    garnish: string;
    typeOfGlass: string;
}
