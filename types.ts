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

export type DrinkListItem = {
    label: string;
    value: string;
    have: string[];
    need: string[];
    name: string;
    imageid: string;
}
