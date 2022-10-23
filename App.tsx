import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, SafeAreaView, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store';
import Sidebar from './components/navigator';
import { useFonts } from 'expo-font';
import { getDrinks } from './db/fetch';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

//för att köra: npm start

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);
    const [data, setData] = useState([]);
    const customFonts = {
        "Poppins": require('./assets/fonts/Poppins-Regular.ttf'),
        "Carter": require('./assets/fonts/CarterOne-Regular.ttf')
    };

    const getDrinks = async () => {
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
                await SplashScreen.preventAutoHideAsync();
                await Font.loadAsync(customFonts);
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
        <Provider store={store}>
            <Sidebar drinks={data} />
        </Provider>
    )
}
