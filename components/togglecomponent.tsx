import Toggle from "react-native-toggle-element";
import Icon from 'react-native-vector-icons/FontAwesome5';
//import Icon from 'react-native-ico-material-design'
//import Icon from 'react-native-ico';
//fruit-citrus
//liquor
// import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
// const Icon = createIconSetFromIcoMoon(require("../selection.json"));

const ToggleComponent = ({ childToParent }) => {

    return (
        <Toggle onPress={(newState) => childToParent(newState)}
            leftComponent={<Icon name="wine-bottle"  size={20} color="#FFFFFF" />}
            rightComponent={<Icon name="lemon" size={20} color="#FFFFFF" />}
            trackBar={{
                activeBackgroundColor: "#101010",
                inActiveBackgroundColor: "#101010",
                borderActiveColor: "#101010",
                borderInActiveColor: "#101010",
                width: 110,
                height: 45,
            }}
            thumbStyle={{
                backgroundColor: '#798777',
            }}

            thumbButton={{
                width: 50,
                height: 50,
                radius: 30,
                activeColor: '#798777',
                inActiveColor: '#798777'

            }} />
    )
}

export default ToggleComponent;


