import React from "react";
import { DetailsView } from '../views/DetailsView';

export const Details = ({ route, navigation, }) => {
    const drinkName = route.params.item.name;
    const allDrinks = route.params.allDrinks;
    console.log(route.params.routeName);

    const findDrink = (all, chosen) => {
        return all.filter(name => name.name === chosen)[0]
    }
    const chosenDrink = findDrink(allDrinks, drinkName);

    return (
        <DetailsView navigation={navigation} chosenDrink={chosenDrink} routeName={route.params.routeName} />)
}
