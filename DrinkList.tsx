import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Button } from 'react-native';
import { Hamburger } from './components/menuButton';
import Animated from 'react-native-reanimated';
import React from 'react';
import GestureFlipView from 'react-native-gesture-flip-card';

const DrinkList = ({ navigation }) => {
    const scrollX = React.useRef(new Animated.Value(0)).current;

    const Data = [...(Array(30).keys())].map(i => ({ label: `${i + 1}  out of 30`, value: `${i + 1} ` }));
    const card_width = 300;
    const card_height = 500;

    return (
        <View style={{ flex: 1, backgroundColor: '#fff', }}>
            <Hamburger navigation={navigation} />
            <Animated.FlatList
                contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 50 }}
                horizontal data={Data}
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
                    return <Animated.View style={{ transform: [{ scale }] }}>
                        <TouchableOpacity style={{
                            justifyContent: 'center', alignItems: 'center', height: card_height, width: card_width,
                            backgroundColor: '#F8EDE3', borderRadius: 30,
                            shadowColor: 'black',
                            elevation: 10,
                            shadowOpacity: 1,
                            shadowRadius: 30
                        }} onPress={() => { navigation.navigate("Details") }}>

                            <Image style={{ height: 50, width: 50, }} source={require('./assets/images/lemon.png')} />
                            <Text> These Ingredients you have: {"haaay"}</Text>
                            <Text> These Ingredients you don't have: {"haay"}</Text>
                            <Text >{item.label}</Text>
                            <Text>Click to see more bruh</Text></TouchableOpacity>
                    </Animated.View>


                }}>
            </Animated.FlatList>
            <View style={{ alignItems: 'center', }}>
                <TouchableOpacity style={{ backgroundColor: 'gray', height: 50, width: 200, borderRadius: 30, justifyContent: 'center', marginBottom: 100, }}
                    onPress={() => navigation.navigate('Home')}>
                    <Text style={{ textAlign: 'center' }}>Back to Shaker</Text>
                </TouchableOpacity></View>
        </View >
    )
}

export default DrinkList;