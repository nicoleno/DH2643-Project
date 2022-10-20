import React, {useState} from 'react'
import Toggle from "react-native-toggle-element";
//import {Icon} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
//Viadeo



const ToggleComponent = () => {
    const [toggleValue, setToggleValue] = useState(true);

    return(
        <Toggle
            value={toggleValue}
            onPress={(newState) => setToggleValue(newState)}
            leftComponent={
                <Icon name="glass" size={20} color="#616161" />
            }
            rightComponent={
                <Icon name="viadeo" size={30} color="#616161" />
            }
            trackBar={{
                activeBackgroundColor: "#101010",
                inActiveBackgroundColor: "#101010",
                borderActiveColor: "#101010",
                borderInActiveColor: "#101010",
                width: 110,
                height: 45
            }}

            thumbButton={{
                width: 50,
                height: 50,
                radius: 30,
                activeColor: '#798777',
                inActiveColor: '#798777'
         
              }}
    />    
    )
}

export default ToggleComponent;