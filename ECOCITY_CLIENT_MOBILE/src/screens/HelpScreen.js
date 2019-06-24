import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class HelpScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    HelpScreen
                </Text>
                <Text style={styles.button} onPress={() => this.props.navigation.navigate('Main')}>Go to Main</Text>
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
    }
});