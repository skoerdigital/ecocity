import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { AppContainer } from '../navigations/Navigation'

export default class StackScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <AppContainer/>
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