import React, {Children, useState} from 'react'
import Toggle from "react-native-toggle-element";
import Icon from 'react-native-vector-icons/FontAwesome';

const ToggleComponent = ({childToParent}) => {

    return(
        <Toggle onPress={(newState) => childToParent(newState)}
            leftComponent={  <Icon name="glass" size={20} color="#FFFFFF" />}
            rightComponent={ <Icon name="viadeo" size={30} color="#FFFFFF" />}
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
         
            }}/>
        )
    }

export default ToggleComponent;


