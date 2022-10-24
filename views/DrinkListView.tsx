import { View, Text, StyleSheet, TouchableOpacity, SectionList, ImageBackground } from 'react-native';
import React from 'react';
import { Hamburger } from '../components/menuButton';
import Animated from 'react-native-reanimated';
import { DrinkListItem } from '../models/model';
import { FlatList } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

const DrinkListView = ({ navigation, dataList, allDrinks }) => {
    const data = dataList as DrinkListItem[];
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const card_width = 300;
    const renderItem = ({ item }) => {
        return (<Text style={{ color: '#fff', marginRight: 10, marginLeft: 35 }}>{`\u2022 ${item}`}</Text>);
    }

    return (
        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 0.5, y: 1.0 }} colors={['#414141', '#000000']} style={styles.background}>
            <View style={{ flex: 1 }}>
                <Text style={styles.shakeit} >Shakeit</Text><Hamburger navigation={navigation} />
                <Animated.FlatList contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 50 }} horizontal data={data}
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })}
                    keyExtractor={item => item.value}
                    renderItem={({ item, index }) => {
                        const inputRange = [card_width * (index - 1), card_width * index, card_width * (index + 1)]
                        const scale = scrollX.interpolate({ inputRange, outputRange: [0.75, 1, 0.75] })

                        return <Animated.View style={{ transform: [{ scale }], }}>
                            <View style={styles.cardContainer}>
                                <ImageBackground style={styles.backgroundimg} imageStyle={{ borderRadius: 30 }} source={{ uri: "https://drive.google.com/uc?export=view&id=" + item.imageid }}>
                                    <View style={styles.cardText}>
                                        <Text style={{ color: '#fff', fontSize: 10, padding: 5 }}>{item.label}</Text>
                                        <Text style={styles.poppins}>{item.name}</Text>
                                        <View style={styles.poppins2}>
                                            <FlatList style={{ marginHorizontal: -5 }} data={(item.have)}
                                                ListHeaderComponent={() => <Text style={{ color: '#fff', marginLeft: 40 }}><Text><Text style={{ fontFamily: 'PoppinsBold', fontSize: 14 }}>You have</Text></Text></Text>}
                                                renderItem={renderItem} />
                                            <FlatList data={(item.need)}
                                                ListHeaderComponent={() => <Text style={{ color: '#fff', marginLeft: 35 }}><Text><Text style={{ fontFamily: 'PoppinsBold', fontSize: 14 }}>You need</Text></Text></Text>}
                                                renderItem={renderItem} />
                                        </View>
                                    </View>
                                    <TouchableOpacity
                                        style={styles.recipeButton} onPress={() => { navigation.navigate("Details", { item: item, allDrinks: allDrinks, routeName: "DrinkList" }) }}>
                                        <Text style={{ color: '#fff', fontSize: 12, fontFamily: 'Poppins' }}>Recipe</Text>
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Animated.View>
                    }}>
                </Animated.FlatList>
                <View style={{ alignItems: 'center', }}>
                    <TouchableOpacity style={styles.backbutton} onPress={() => navigation.navigate('Home')}>
                        <ImageBackground style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')}>
                        </ImageBackground>
                        <Text style={{ color: "rgba(255,255,255,1)", marginTop: 5, fontFamily: 'Poppins', fontSize: 10 }}>Back to shaker</Text>
                    </TouchableOpacity>
                </View>
            </View >
        </LinearGradient>
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

    poppins: {
        fontFamily: "Poppins",
        textAlign: "center",
        flexDirection: 'row',
        top: 5,
        marginBottom: 5,
        fontSize: 20,
        color: "rgba(255, 255, 255,1)",
    },

    poppins2: {
        fontFamily: "Poppins",
        weight: "Light",
        textAlign: "left",
        marginLeft: 18,
        flexDirection: 'row',
        top: 5,
        color: "rgba(255, 255, 255,1)",
    },

    cardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 480,
        width: 300,
        marginLeft: 8,
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
    },
    ing_list: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 25,
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