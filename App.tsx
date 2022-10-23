import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store';
import Sidebar from './components/navigator';
import { getDrinks } from './db/fetch';

//för att köra: npm start

export default function App() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getDrinks = () => {
        fetch("http://192.168.127.216:3000/drinks", {
            method: "get",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then((res) => res.json())
            .then((data) => setData(data.drinks))
            .then(() => setLoading(false))
            .catch((err) => err);
    }

    useEffect(() => {
        getDrinks();
    }, []);

    // console.log('hämtade drinkar', data);

    return (
        <Provider store={store}>
            <Sidebar drinks={data} />
        </Provider>
    )
}
