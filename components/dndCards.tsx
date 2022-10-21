import { GestureHandlerRootView, PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming, runOnJS, useDerivedValue } from 'react-native-reanimated';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, ImageBackground } from 'react-native';
import store from '../store/store';
import { addIngredient } from '../store/actions';
import { useDispatch } from 'react-redux';
type ContextType = {
    translateX: number;
    translateY: number;
    ingredientName: string;
}
const DraggableCard = (props) => {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const shrink = useSharedValue(1);
    const dispatch = useDispatch();

    const saveIngredient = (ingredient) => {
        dispatch(addIngredient(ingredient.id, ingredient.name));
        console.log(store.getState());
    };



    const panGestureEvent = useAnimatedGestureHandler
        <PanGestureHandlerGestureEvent, ContextType>
        ({
            onStart: (event, context) => {
                context.translateX = translateX.value;
                context.translateY = translateY.value;

            },
            onActive: (event, context) => {
                translateX.value = event.translationX + context.translateX
                translateY.value = event.translationY + context.translateY

            },
            onEnd: (event, context) => {
                console.log("x: ", event.absoluteX);
                console.log("y: ", event.absoluteY);
                // NÄSTA steg, hitta koordinater av shakern och gör en if sats.
                if ((120 < event.absoluteX) && (event.absoluteX < 280)
                    && (170 < event.absoluteY) && (event.absoluteY < 400)) {

                    console.log("i shakern");
                    runOnJS(saveIngredient)(props.ingredient);
                    shrink.value = 0;


                }

                else {
                    translateX.value = withSpring(0);
                    translateY.value = withSpring(0);
                }


            },
        })

    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value,
                },
                {
                    translateY: translateY.value,
                },
                {
                    scale: withTiming(shrink.value, {
                        duration: 1000,
                    })
                }
            ]
        }
    })

    return (
        <PanGestureHandler onGestureEvent={panGestureEvent}>
            <Animated.View style={[styles.square, rStyle]}>
                <Image style={styles.images} source={{ uri: "https://drive.google.com/uc?export=view&id=" + props.alcohol.image_id }} />
                <Text style={{ fontSize: 10 }}>{props.alcohol.name}</Text>

            </Animated.View>
        </PanGestureHandler >)

}

const styles = StyleSheet.create({
    square: {
        width: 100,
        height: 100,
        backgroundColor: 'rgb(225, 255, 177)',
        borderRadius: 20,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    images: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: 80,
        height: 80,
        resizeMode: 'contain',
    }
})

export default DraggableCard