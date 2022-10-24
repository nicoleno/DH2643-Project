import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Sidebar from './components/navigator';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

//för att köra: npm start

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);
    const [data, setData] = useState([]);
    const customFonts = {
        "Poppins": require('./assets/fonts/Poppins-Regular.ttf'),
        "Carter": require('./assets/fonts/CarterOne-Regular.ttf'),
        "PoppinsBold":  require('./assets/fonts/Poppins-Bold.ttf'),
    };

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