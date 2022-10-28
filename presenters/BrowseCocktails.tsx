import React, { useEffect, useState } from 'react';
import { BrowseView } from '../views/BrowseCocktailsView';

export const BrowseCocktails = ({ navigation, route }) => {

    console.log(route.params.drinks);

    const [data, setData] = useState([]);

    const getDrinks = () => {
        fetch("https://drinks-db-server.herokuapp.com/drinks", {
            method: "get",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then((res) => res.json())
            .then((data) => setData(data.drinks))
            .catch((err) => err);
    }

    useEffect(() => {
        (async () => {
            try {
                await getDrinks();
            }
            catch (e) {
                console.warn(e);
            }
        })();
    }, []);
    // console.log(data);


    return (
        <BrowseView navigation={navigation} data={data}></BrowseView>
    )
}
