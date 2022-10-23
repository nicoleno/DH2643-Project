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
