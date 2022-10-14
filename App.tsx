import React from 'react';
import { View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import ShakerModel from './models/shaker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { HomePage } from './HomePage'
import Sidebar from './components/navigator';

// const store = createStore();

export default function App() {

  return (
    // <Provider store={store}>
    <Sidebar />

    // </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },

  navbuttons: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  searchBar: {
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'blue',
    padding: 15,
    borderRadius: 10
  },

  image: {
    width: 150,
    height: 150,
    margin: 20
  },
  shakerArea: {
    flex: 1,
    height: 300,
    marginTop: 100,

  },

  bottomBar: {
    flex: 2,
    alignSelf: 'stretch',
    backgroundColor: 'rgb(182,227,136)',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: 200,
    justifyContent: 'space-between',
  },
  header: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContainer: {
    backgroundColor: 'rgb(199, 242, 164)',
    flexDirection: 'row',
    height: 200,
  },
  toggle: {
    flexDirection: 'row',

  },
  image2: {
    height: 50,
    width: 50,
    borderRadius: 30,
    margin: 5,
    backgroundColor: 'rgb(199, 242, 164)',
  }
});
