import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import DraggableCard from './components/dndCards';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import ShakerModel from './models/shaker';
import ingredients from './assets/ingredients.json';
import SearchDrink from './search';
import store from './store/store';
import { addIngredient, removeIngredient } from './store/actions';
import { RenderIngredients } from './components/renderIngredients';
import IngredientCountIcon from './components/ingredientCountIcon';


export const HomePage = (props) => {
    let shaker = props.shaker;

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

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.navbuttons}>
                    <TouchableOpacity onPress={() => { alert("you clicked me") }}>
                        <Image style={styles.image2} source={require('./assets/images/menu.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { alert("you clicked me") }}>
                        <Image style={styles.image2} source={require('./assets/images/settings.png')} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Image style={styles.image} source={require('./assets/images/shaker-black-no-lines.png')}
                        onLayout={(event) => {
                            const layout = event.nativeEvent.layout;
                            console.log("layout", layout);
                            shaker.setHeight(layout.height);
                            shaker.setWidth(layout.width);
                            shaker.setPosX(layout.x);
                            shaker.setPosY(layout.y);
                        }}
                    />
                </View>
                <IngredientCountIcon />
                <View style={styles.bottomBar}>
                    <View style={styles.header}>
                        <View style={styles.toggle}>
                            <TouchableOpacity onPress={() => { alert("you clicked me") }}>
                                <Image style={styles.image2} source={require('./assets/images/lemon.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { alert("you clicked me") }}>
                                <Image style={styles.image2} source={require('./assets/images/bottle.png')} />
                            </TouchableOpacity>
                        </View>
                        <Text>här har vi vår search bar</Text>
                    </View>
                    <FlatList style={{ overflow: "visible" }} horizontal data={ingredients} renderItem={renderItem} keyExtractor={item => item.id} />
                </View>
            </View>
        </GestureHandlerRootView >
    )
};

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
        width: 200,
        height: 200,
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