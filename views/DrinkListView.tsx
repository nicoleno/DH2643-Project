import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import React from 'react';
import { Hamburger } from '../components/menuButton';
import Animated from 'react-native-reanimated';
import { DrinkListItem } from '../models/model';

const DrinkListView = ({ navigation, dataList }) => {
    const data = dataList as DrinkListItem[];
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const card_width = 300;

    return (
        <View style={{ flex: 1, backgroundColor: '#262626' }}>
            <View style={styles.container}>
                <Text style={styles.header}>Tragos</Text>
                <Hamburger navigation={navigation} />
            </View>
            <Animated.FlatList
                contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 50 }}
                horizontal data={data}
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                keyExtractor={item => item.value}
                renderItem={({ item, index }) => {
                    const inputRange = [
                        card_width * (index - 1), card_width * index, card_width * (index + 1)
                    ]

                    const scale = scrollX.interpolate({
                        inputRange, outputRange: [0.75, 1, 0.75]
                    })

                    return <Animated.View style={{ transform: [{ scale }], }}>

                        <View style={styles.cardContainer}>
                            <ImageBackground style={styles.backgroundimg} imageStyle={{ borderRadius: 30 }} source={require('../assets/images/Tommys-margharita.png')}>
                                <View style={styles.cardText}>
                                    <Text style={{ color: '#fff', fontSize: 10, padding: 10 }}>{item.label}</Text>
                                    <Text style={{ color: '#fff', fontSize: 24, padding: 10 }}>{item.name}</Text>

                                    <View style={styles.ing_list}>
                                        <Image style={{ height: 25, width: 25, }} source={require('../assets/images/check-mark.png')}></Image>
                                        <Text style={{ color: '#fff' }}>You have:{"\n"} {item.have}</Text>
                                        <Image style={{ height: 25, width: 25, }} source={require('../assets/images/carts.png')}></Image>
                                        <Text style={{ color: '#fff' }}> You need:{"\n"} {item.need}</Text>
                                    </View>
                                </View>
                                <TouchableOpacity
                                    style={styles.recipeButton} onPress={() => { navigation.navigate("Details", { item }) }}>
                                    <Text style={{ color: '#fff', fontSize: 16 }}>Recipe</Text>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                    </Animated.View>
                }}>
            </Animated.FlatList>
            <View style={{ alignItems: 'center', }}>
                <TouchableOpacity style={styles.backbutton}
                    onPress={() => navigation.navigate('Home')}>
                    <Text style={{ color: '#fff', fontSize: 12 }}>Back to Shaker</Text>
                </TouchableOpacity></View>
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
    cardContainer: {
        justifyContent: 'center', alignItems: 'center',
        height: 500,
        width: 300,
        backgroundColor: '#262626', borderRadius: 30,
        shadowColor: 'black',
        elevation: 10,
        shadowOpacity: 1,
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
        marginBottom: 100,
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
export default DrinkListView;