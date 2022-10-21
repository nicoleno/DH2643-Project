import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import DraggableCard from './components/dndCards';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Button, ImageBackground } from 'react-native';
import ShakerModel from './models/shaker';
import ingredients from './assets/ingredients.json';
import IngredientCountIcon from './components/ingredientCountIcon';
import ShakeEventExpo from './accelerometer';
import { Hamburger } from './components/menuButton';
import { useFonts } from '@expo-google-fonts/carter-one';
import ToggleComponent from './components/togglecomponent';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/reducers';
import alcohol from './assets/alcohol.json';

export const HomePage = ({ navigation }) => {
    const [drinks, setDrinks] = React.useState([]);

    useEffect(() => {
        fetch("http://130.229.145.164:3000/drinks", {
            method: "get",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((res) => res.json()).then((data) => setDrinks(data.drinks)).catch((err) => err);
    }, []);
    const [loaded] = useFonts({
        Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
        Carter: require('./assets/fonts/CarterOne-Regular.ttf')
    });

    // console.log(store.getState());
    let shaker = new ShakerModel;
    // const dispatch = useDispatch();
    // dispatch(matchedItems(ingredients));

    // const ingredientsToShow = useSelector((state: RootState) => state.matched);
    const [ingredientButtonEnabled, setIngredientButtonEnabled] = useState(true);
    const [alcoholButtonEnabled, setAlcoholButtonEnabled] = useState(false);

    const handleIngredientButtonPressed = () => {
        setIngredientButtonEnabled(true);
        setAlcoholButtonEnabled(false);
        console.log("ingredient button pressed!")
    }
    const handleAlcoholButtonPressed = () => {
        setIngredientButtonEnabled(false);
        setAlcoholButtonEnabled(true);
        console.log("alcohol button pressed!")
    }

    ShakeEventExpo.addListener(() => {
        navigation.navigate('DrinkList');
    })

    const Item = ({ ingredient }) => {
        return (
            <View style={styles.cardContainer}>
                <DraggableCard ingredient={ingredient} />
            </View>
        );
    }
    const renderItem = ({ item }) => (
        <Item ingredient={item} />
    );

    const [showIngredient, setToggleValue] = useState(true);

    const childToParent = (showIngredient) => {
        setToggleValue(showIngredient)
    }

    return (
    <GestureHandlerRootView style={styles.background}>   
      <LinearGradient start={{x: 0.0, y: 0.55}} end={{x: 0.5, y: 1.0}} colors={['#414141', '#171717']} style={styles.background}>
            <ImageBackground style={styles.image3} source={require('./assets/images/table.png')}>
                <Text style={styles.shakeit} >Shakeit</Text><Hamburger navigation={navigation} />
                <View style={styles.shakerArea}>
                    <View style={styles.topsection} >
                    <IngredientCountIcon/>
                        <ImageBackground style={styles.shakerReal} source={require('./assets/images/shaker-real.png')}
                                onLayout={(event) => {
                                    const layout = event.nativeEvent.layout;
                                    console.log("layout", layout);
                                    shaker.setHeight(layout.height);
                                    shaker.setWidth(layout.width);
                                    shaker.setPosX(layout.x);
                            shaker.setPosY(layout.y);
                            }}/>                   
                    </View>
                    <Image style={styles.image4} source={require('./assets/images/shaketomix.png')}></Image>
                </View>
            </ImageBackground>
            
            <View style={styles.bottomBar}>
            <Text style={styles.poppins} >Add items</Text>
            <Text style={styles.poppins2} >What items do you have at home? Drag and drop to  the shaker!</Text>
                <View style={styles.header}>
                <ToggleComponent childToParent= {childToParent}/>
                </View>
                <FlatList style={{ overflow: "visible" }} horizontal data={showIngredient ? ingredients : alcohol} renderItem={renderItem} keyExtractor={item => item.id} />
            </View>
            </LinearGradient>  
        </GestureHandlerRootView >

    )
};

const styles = StyleSheet.create({


    background: {
        flex: 1,
        color: "rgba(255,255,1,1)"
    },

    topsection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'

    },

    topsection2: {
        alignContent: 'flex-end',
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },

    navbuttons: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    searchBar: {
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'blue',
        borderRadius: 10
    },

    image: {
        width: 200,
        height: 200,
        margin: 20,
    },

    shakerArea: {
        flex: 1,
    },

    bottomBar: {
        flex: 2,
        alignSelf: 'stretch',

        justifyContent: 'space-between',
    },
    header: {
        marginTop: 45,
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardContainer: {
        backgroundColor: '#414141',
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
    },

    image3: {
        height: 450,

    },

    image4: {
        height: 80,
        width: 440,
        alignSelf: 'center'

    },

    shakeit: {
        fontFamily: "Carter",
        textAlign: "center",
        flexDirection: 'row',
        top: 40,
        fontSize: 30,
        color: "rgba(255,255,255,1)",

    },

    poppins: {
        fontFamily: "Poppins",
        weight: "Light",
        textAlign: "left",
        marginLeft: 25,
        flexDirection: 'row',
        top: 25,
        fontSize: 20,
        color: "rgba(255, 255, 255,1)",

    },


    poppins2: {
        fontFamily: "Poppins",
        textAlign: "left",
        marginLeft: 25,
        flexDirection: 'row',
        top: 40,
        fontSize: 10,
        color: "rgba(255, 255, 255,1)",

    },

    shakerReal: {
        height: 300,
        width: 230,
        alignSelf: 'center',
    },
});