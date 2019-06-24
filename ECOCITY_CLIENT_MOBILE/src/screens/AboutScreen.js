import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class AboutScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    AboutScreen
                </Text>
                <Text onPress={() => this.props.navigation.navigate('Main')}>
                    Go to Main
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
    }
});