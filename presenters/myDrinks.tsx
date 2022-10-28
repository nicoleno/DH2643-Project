import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { MyDrinksView } from '../views/MyDrinksView';

export const MyDrinks = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [appIsReady, setAppIsReady] = useState(false);

    const getDrinks = () => {
        fetch("https://drinks-db-server.herokuapp.com/own_drinks", {
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
                await SplashScreen.preventAutoHideAsync();
                await getDrinks();
            }
            catch (e) {
                console.warn(e);
            }
            finally {
                setAppIsReady(true);
            }
        })();
    }, []);

    useEffect(() => {
        SplashScreen.hideAsync();
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }




    return (
        <MyDrinksView data={data} navigation={navigation}></MyDrinksView>
    )
}
