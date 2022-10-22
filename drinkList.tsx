import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Hamburger } from './components/menuButton';
import Animated from 'react-native-reanimated';
import React, { useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from '@expo-google-fonts/carter-one';

const DrinkList = ({ navigation }) => {
    const [drinks, setDrinks] = React.useState([]);
    const [loaded] = useFonts({
        Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
        Carter: require('./assets/fonts/CarterOne-Regular.ttf')
    });

    useEffect(() => {
        fetch("http://130.229.145.164:3000/drinks", {
            method: "get",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((res) => res.json()).then((data) => setDrinks(data.drinks)).catch((err) => err);
    }, []);

    const scrollX = React.useRef(new Animated.Value(0)).current;
    const Data = [...(Array(30).keys())].map(i => ({ label: `${i + 1}  of 30`, value: `${i + 1}`, have: "Vodka", need: "Redbull", name: "Tommys Margharita" }));
    const card_width = 300;

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient start={{ x: 0.0, y: 0.55 }} end={{ x: 0.5, y: 1.0 }} colors={['#414141', '#171717']} style={styles.background}>
                <Text style={styles.shakeit} >Shakeit</Text><Hamburger navigation={navigation} />
                <Animated.FlatList
                    contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 50 }}
                    horizontal data={Data}
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: true })}
                    keyExtractor={item => item.value}
                    renderItem={({ item, index }) => {
                        const inputRange = [
                            card_width * (index - 1), card_width * index, card_width * (index + 1)]
                        const scale = scrollX.interpolate({
                            inputRange, outputRange: [0.75, 1, 0.75]
                        })
                        return <Animated.View style={{ transform: [{ scale }], }}>
                            <View style={styles.cardContainer}>
                                <ImageBackground style={styles.backgroundimg} imageStyle={{ borderRadius: 30 }} source={require('./assets/images/Tommys-margharita.png')}>
                                    <View style={styles.cardText}>
                                        <Text style={{ color: '#fff', fontFamily: 'Poppins', fontSize: 10, padding: 10 }}>{item.label}</Text>
                                        <Text style={{ color: '#fff', fontFamily: 'Poppins', fontSize: 24, padding: 10 }}>{item.name}</Text>
                                        <View style={styles.ing_list}>
                                            <Image style={{ height: 25, width: 25, }} source={require('./assets/images/check-mark.png')}></Image>
                                            <Text style={{ color: '#fff', fontFamily: 'Poppins' }}>You have:{"\n"} {item.have}</Text>
                                            <Image style={{ height: 25, width: 25, }} source={require('./assets/images/carts.png')}></Image>
                                            <Text style={{ color: '#fff', fontFamily: 'Poppins' }}> You need:{"\n"} {item.need}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity
                                        style={styles.recipeButton} onPress={() => {
                                            navigation.navigate("Details", {
                                                name: item.name,
                                                have: item.have,
                                                need: item.need,
                                            })
                                        }}>
                                        <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'Poppins' }}>Recipe</Text>
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Animated.View>


                    }}>
                </Animated.FlatList>
                <View style={{ alignItems: 'center', }}>
                    <TouchableOpacity style={styles.backbutton}
                        onPress={() => navigation.navigate('Home')}>
                        <Text style={{ color: '#fff', fontSize: 12, fontFamily: 'Poppins' }}>Back to Shaker</Text>
                    </TouchableOpacity></View>
            </LinearGradient>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
    },
    background: {
        flex: 1,
        color: "rgba(255,255,1,1)"
    },
    shakeit: {
        fontFamily: "Carter",
        textAlign: "center",
        flexDirection: 'row',
        top: 40,
        fontSize: 30,
        color: "rgba(255,255,255,1)",
    },

    cardContainer: {
        justifyContent: 'center', alignItems: 'center',
        marginTop: 25,
        marginLeft: 7,
        height: 500,
        width: 300,
        backgroundColor: '#262626', borderRadius: 30,
        shadowColor: 'black',
        elevation: 10,
        shadowOpacity: 0.5,
        shadowRadius: 30
    },
    header: {
        color: '#fff',
        textAlign: 'center',
        alignSelf: 'center'
    },
    recipeButton: {
        backgroundColor: '#798777',
        height: 30,
        width: 130,
        justifyContent: 'center',
        borderRadius: 30,
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    backbutton: {
        backgroundColor: 'black',
        height: 40,
        width: 200,
        borderRadius: 30,
        justifyContent: 'center',
        marginBottom: 50,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#fff'
    },
    ing_list: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    backgroundimg: {
        height: "100%",
        width: "100%",
        resizeMode: "contain",
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    cardText: {
        alignItems: 'center',
        justifyContent: 'flex-start',
    }


})
export default DrinkList;