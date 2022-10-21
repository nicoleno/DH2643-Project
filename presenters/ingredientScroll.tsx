import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Button, ImageBackground } from 'react-native';
import DraggableCard from '../components/dndCards';
import ingredients from '../assets/ingredients.json';
import alcohol from '../assets/alcohol.json';


export const IngredientScroll = ({ showIngredient }) => {

    const Item = ({ item }) => {
        return (
            <View style={styles.cardContainer}>
                <DraggableCard item={item} />
            </View>
        );
    }

    const renderItem = ({ item }) => (
        <Item item={item} />
    );

    return (
        <FlatList style={{ overflow: "visible" }} horizontal data={showIngredient ? ingredients : alcohol} renderItem={renderItem} keyExtractor={item => item.id} />
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#414141',
        flexDirection: 'row',
        height: 200,
    }
});
