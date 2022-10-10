import { GestureHandlerRootView, PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
type ContextType = {
    translateX: number;
    translateY: number;
}
const DraggableCard = (props) => {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const shrink = useSharedValue(1);


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
                <Text>{props.name}</Text>
            </Animated.View>
        </PanGestureHandler>)

}

const styles = StyleSheet.create({
    square: {
        width: 100,
        height: 100,
        backgroundColor: 'rgb(225, 255, 177)',
        borderRadius: 20,
        margin: 10,
    }
})

export default DraggableCard