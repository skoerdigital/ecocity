import React from 'react';
import { View, Text,  StyleSheet } from 'react-native'
import colors from '../../globals/colors';

const setColor = (batteryLevel) =>{
    console.log(typeof(batteryLevel) === 'number')

    if(batteryLevel < 30){
        return 'red'
    } else if(batteryLevel >= 30 && batteryLevel < 80){
        
        return colors.YELLOW
    } else if(batteryLevel >= 80){
        return colors.GREEN3
    }
    return colors.GREEN3
}

const batteryLevel = (props) => {
    batteryColor = setColor(props.batteryLevel)

    return (<View style={[styles.container, props.style]}>
   
        <View style={[styles.bar,
            { backgroundColor: batteryColor }
        ]}></View>
        <View style={[styles.bar, {marginHorizontal: 3},
            (props.batteryLevel >= 30) ? { backgroundColor: batteryColor } : { backgroundColor: styles.bar.backgroundColor },
        ]}></View>
        <View style={[styles.bar,
            (props.batteryLevel >= 80) ? { backgroundColor: batteryColor } : { backgroundColor: styles.bar.backgroundColor },
        ]}></View>

    </View>)
}

const styles = StyleSheet.create({
    container: {
        
        flexDirection: 'row',
        justifyContent: 'flex-start',
        height: 20,
    },
    bar: {
        flex: 1,
        backgroundColor: colors.GREEN1
    }
})

export default batteryLevel;