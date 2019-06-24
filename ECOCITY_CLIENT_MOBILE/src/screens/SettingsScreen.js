import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class SettingsScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.button} onPress={() => this.props.navigation.navigate('Help')}>OPEN MENU</Text>
                <Text>
                    SettingsScreen
                </Text>
            
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        zIndex: 10,
        position: 'absolute',
        top: 50,
        left: 50
    }
});